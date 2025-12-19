"use client";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";

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
import axios from "axios";
import { showToast } from "@/lib/showToast";
import { useRouter } from "next/navigation";
import { WEBSITE_LOGIN } from "@/routes/WebsiteRoute";

const UpdatePassword = ({ email }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isTypePassword, setIsTypePassword] = useState(true);
  const formSchema = StrongAuthSchema.pick({
    email: true,
    password: true,
  })
    .extend({
      confirmPassword: z.string().min(1, "Confirm password is required"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password and confirm password must be same.",
      path: ["confirmPassword"],
    });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: email,
      password: "",
      confirmPassword: "",
    },
  });

  const handleUpdatePassword = async (values) => {
    try {
      setLoading(true);

      const { data } = await axios.put(
        "/api/auth/reset-password/update-password",
        values
      );

      if (!data.success) {
        throw new Error(data.message);
      }

      form.reset();
      showToast("success", data.message);
      router.push(WEBSITE_LOGIN);
    } catch (error) {
      showToast(
        "error",
        error.response?.data?.message || error.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-center"></div>
      <div className="text-center">
        <h1 className="text-3xl font-bold">Update Password</h1>
        <p>Create new password by filling up this form </p>
      </div>
      <div className="mt-3">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleUpdatePassword)}>
            {/* password part  */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => <input type="hidden" {...field} />}
            />
            <div className="mb-3">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* confirm password  */}
            <div className="mb-3">
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel>Confirm Password</FormLabel>
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
                text="Update Password"
                className="w-full cursor-pointer"
              />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UpdatePassword;
