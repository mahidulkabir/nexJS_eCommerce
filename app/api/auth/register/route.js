import { connectDB } from "@/lib/databaseConnection";
import { response } from "@/lib/helperFunction";
import { StrongAuthSchema } from "@/lib/zodSchema";
import UserModel from "@/models/User.model";
import { SignJWT } from "jose";


export async function POST(request) {
  try {
    await connectDB();
    // validation schema 
    const validationSchema = StrongAuthSchema.pick({
        name:true, email:true, password:true
    })
    const payload = await request.json()
    const validatedData = validationSchema.safeParse(payload)
    if(!validatedData.success){
        return response(false,401,'invalid or missing input field.',
            validatedData.error
        )
    }
    const {name,email,password} = validatedData.data
    // check already registerd user 
    const checkUser = await UserModel.exists({email})
    if(checkUser){
        return response(true,409,'User already registered.',validatedData.error)
    }
    // new registration 
    const NewRegistration = new UserModel({
        name, email, password
    })
    await NewRegistration.save()

    const secret = new TextEncoder().encode(process.env.SECRET_KEY)
    const token = await new SignJWT({userId: NewRegistration._id})
    .setIssuedAt()
    .setExpirationTime('1hr')
    .setProtectedHeader({alg: 'HS256'})
    .sign(secret)
  } catch (error) {}
}
