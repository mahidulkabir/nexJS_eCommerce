import { z } from "zod";

const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])([^\s]){8,128}$/;

export const StrongAuthSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),

  password: z.string().min(8, { message: "Password must be at least 8 characters" })
    .max(128, { message: "Password must be at most 128 characters" })
    .regex(strongPasswordRegex, {
      message:
        "Password must contain uppercase, lowercase, number, special character and no spaces",
    }),

  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),
   

  otp: z
    .string()
    .regex(/^\d{6}$/, {
      message:"OTP must be a 6-digit number"}),
    
  _id: z.string().min(3,'_id is required.'),
  alt: z.string().min(3,'alt is required.'),
  title: z.string().min(3,'title is required.'),
  slug: z.string().min(3, 'Slug is required.'),
  category: z.string().min(3, 'Category is required.'),
  mrp:z.union([
    z.number().positive('Expected positive value, recieved negative.'),
    z.string().transform((val) =>Number(val)).refine((val)=> !isNaN(val) && val>=0, 'Pleasee enter a valid number.')
  ]),
  sellingPrice:z.union([
    z.number().positive('Expected positive value, recieved negative.'),
    z.string().transform((val) =>Number(val)).refine((val)=> !isNaN(val) && val>=0, 'Pleasee enter a valid number.')
  ]),
  discountPercentage:z.union([
    z.number().positive('Expected positive value, recieved negative.'),
    z.string().transform((val) =>Number(val)).refine((val)=> !isNaN(val) && val>=0, 'Pleasee enter a valid number.')
  ]),
  description: z.string().min(3, 'Description is required.'),
  media: z.array(z.string()),
  product: z.string().min(3, 'Product is required.'),
  color: z.string().min(3, 'Color is required.'),
  size: z.string().min(1, 'Size is required.'),
  sku: z.string().min(3, 'SKU is required.'),
  });