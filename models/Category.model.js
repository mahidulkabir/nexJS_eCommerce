import mongoose from "mongoose";
const cetegorySchema = new mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    otp:{
        type:String,
        required:true
    },
    expiresAt: {
        type: Date,
        required: true,
        default:() => new Date(Date.now() + 10 * 60 * 1000)
    }
}, {timestamps: true })

cetegorySchema.index({ expiresAt:1}, {expireAfterSeconds:0})

const CategoryModel = mongoose.models.OTP || mongoose.model('OTP', otpSchema, 'otps')
export default CategoryModel