import { StrongAuthSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import {  useForm } from "react-hook-form";
import {
    Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import ButtonLoading from "./ButtonLoading";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "../ui/input-otp";
import { showToast } from "@/lib/showToast";
import axios from "axios";

const OTPVerification = ({ email, onSubmit, loading }) => {

const [isResendOtp, setIsResendOtp] = useState(false)


  const formSchema = StrongAuthSchema.pick({
    otp: true,
    email: true,
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
      email: email,
    },
  });

  const handleOtpVerification = async (values) => {
    onSubmit(values)
  }

  const resendOTP = async ()=>{
    try {
      setIsResendOtp(true);

      const { data } = await axios.post("/api/auth/resend-otp", { email })

      if (!data.success) {
        throw new Error(data.message);
      }
      showToast("success", data.message);
    } catch (error) {
      showToast(
        "error",
        error.response?.data?.message || error.message || "Login failed"
      );
    } finally {
      setIsResendOtp(false);
    }
  }


  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleOtpVerification)}>
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Please Complete Verification</h1>
            <p className="text-md">We have sent an One-time Password (OTP) to your registered email address. The OTP is valid for 10 minutes only</p>
          </div>
          <div className="my-5 flex justify-center">
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">One-time Password(OTP)</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field} >
                      <InputOTPGroup>
                        <InputOTPSlot  className="text-xl size-10" index={0} />
                        <InputOTPSlot className="text-xl size-10"  index={1} />
                        <InputOTPSlot  className="text-xl size-10" index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot className="text-xl size-10"  index={3} />
                        <InputOTPSlot  className="text-xl size-10" index={4} />
                        <InputOTPSlot  className="text-xl size-10" index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <ButtonLoading
              loading={loading}
              type="submit"
              text="Verify OTP"
              className="w-full cursor-pointer"
            />
            <div className="text-center mt-5">
                {!isResendOtp
                ? 
                    <button onClick={resendOTP} type="button" className="text-blue-500 cursor-pointer hover:underline">

              Resend OTP
                </button>
                :
                <span className="text-md">
                    Resending....
                </span>
                }
                
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default OTPVerification;
