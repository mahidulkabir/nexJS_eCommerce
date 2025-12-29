"use client";
import BreadCrumb from "@/components/Application/Admin/BreadCrumb";
import ButtonLoading from "@/components/Application/ButtonLoading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useFetch from "@/hooks/useFetch";
import { StrongAuthSchema } from "@/lib/zodSchema";
import { ADMIN_DASHBOARD, ADMIN_MEDIA_SHOW } from "@/routes/AdminPanelRoute";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import imgPlaceHolder from '@/public/assets/images/img-placeholder.webp'
import { showToast } from "@/lib/showToast";
import axios from "axios";
const breadCrumbData = [
  {
    href: ADMIN_DASHBOARD,
    label: "Home",
  },
  {
    href: ADMIN_MEDIA_SHOW,
    label: "Media",
  },
  {
    href: "#",
    label: "Edit Media",
  },
];
const EditMedia = ({ params }) => {
  const { id } = use(params);
  const { data: mediaData } = useFetch(`/api/media/get/${id}`);

  const [loading, setLoading] = useState(false);

  const formSchema = StrongAuthSchema.pick({
    _id: true,
    alt: true,
    title: true,
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      _id: "",
      alt: "",
      title: "",
    },
  });

  useEffect(()=>{
    if(mediaData && mediaData.success){
      const data = mediaData.data
      form.reset({
        _id: data._id,
        alt: data.alt,
        title:data.title
      })
    }
  },[mediaData])

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.put("/api/media/update", values);
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
      setLoading(false);
    }
  };
  return (
    <div>
      <BreadCrumb breadCrumbData={breadCrumbData} />

      <Card className="py-0 rounded shadow-sm">
        <CardHeader className="pt-3 px-3 border-b [.border-b:pb-2] ">
          <h4 className="font-semibold text-xl">Edit Media</h4>
        </CardHeader>
        <CardContent className="pb-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mb-5">
              <Image
                src= {mediaData?.data?.secure_url || imgPlaceHolder}
                width={200}
                height={200}
                alt={mediaData?.alt || "image"}
              />
              </div>
              <div className="my-3">
                <FormField
                  control={form.control}
                  name="alt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Alt</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Enter alt" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="my-3">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter Title"
                          {...field}
                        />
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
                  text="Update Media"
                  className="cursor-pointer"
                />
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditMedia;
