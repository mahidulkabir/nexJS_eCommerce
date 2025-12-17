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
    .max(50, "Name must not exceed 50 characters")
    .regex(/^[A-Za-z .'-]+$/, "Name can only contain letters, spaces, periods, apostrophes, and hyphens"),

  otp: z
    .string()
    .regex(/^\d{6}$/, {
      message:"OTP must be a 6-digit number"}),

  });