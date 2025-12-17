"use client";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import Logo from "@/public/assets/images/logo-black.png";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { StrongAuthSchema } from "@/lib/zodSchema";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import ButtonLoading from "@/components/Application/ButtonLoading";
import Link from "next/link";
import { WEBSITE_REGISTER } from "@/routes/WebsiteRoute";
import axios from "axios";
import { showToast } from "@/lib/showToast";
import OTPVerification from "@/components/Application/OTPVerification";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [isTypePassword, setIsTypePassword] = useState(true);
  const [otpVerificationLoading, setOtpVerificationLoading] = useState(false)
  const [otpEmail, setOtpEmail] = useState(true);
  const formSchema = StrongAuthSchema.pick({
    email: true,
  }).extend({
    password: z.string().min("3", "Password field can not be empty"),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLoginSubmit = async (values) => {
    try {
      setLoading(true);

      const { data } = await axios.post("/api/auth/login", values);

      if (!data.success) {
        throw new Error(data.message);
      }
      setOtpEmail(values.email);
      form.reset();
      showToast("success", data.message);
    } catch (error) {
      showToast(
        "error",
        error.response?.data?.message || error.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleOtpVerification = async ()=>{
    alert('hello from the othe side')
  }

  return (
    <Card className="w-[400px]">
      <CardContent>
        <div className="flex justify-center">
          <Image
            src={Logo.src}
            width={Logo.width}
            height={Logo.height}
            alt="log in logo"
            className="max-w-[150px]"
          />
        </div>
        {!otpEmail ? (
          <>
            <div className="text-center">
              <h1 className="text-3xl font-bold">Login Into Account</h1>
              <p>Login into your account by filling out the form below</p>
            </div>
            <div className="mt-3">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleLoginSubmit)}>
                  <div className="my-3">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="example@gmail.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="mb-3">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem className="relative">
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type={isTypePassword ? "password" : "text"}
                              placeholder="******"
                              {...field}
                            />
                          </FormControl>
                          <button
                            className="absolute top-1/2 right-2 cursor-pointer"
                            type="button"
                            onClick={() => setIsTypePassword(!isTypePassword)}
                          >
                            {isTypePassword ? <FaRegEyeSlash /> : <FaRegEye />}
                          </button>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <ButtonLoading
                      loading={loading}
                      type="submit"
                      text="Login"
                      className="w-full cursor-pointer"
                    />
                  </div>
                  <div className="text-center my-2">
                    <div className="flex justify-center items-center gap-2">
                      <p>Don&apos;t have account?</p>
                      <Link
                        href={WEBSITE_REGISTER}
                        className="text-primary underline"
                      >
                        Create Account!
                      </Link>
                    </div>
                    <div className="mt-2">
                      <Link href="" className="text-primary underline">
                        Forgot Pasword?
                      </Link>
                    </div>
                  </div>
                </form>
              </Form>
            </div>
          </>
        ) : (
          <>
            <OTPVerification email = {otpEmail} onSubmit={handleOtpVerification} loading={otpVerificationLoading} />
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default LoginPage;
