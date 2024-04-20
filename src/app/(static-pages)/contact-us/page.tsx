"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, LocateFixed, Phone } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Page = () => {
  // Define schema using Zod
  const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required").email(),
    subject: z.string().min(12, "Minimum 12 characters required"),
    message: z.string().min(25, "Minimum 25 characters required"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <div className="flex flex-col items-center p-10 bg-white max-md:px-5">
      <div className="flex flex-col items-center w-full max-w-[1058px] max-md:max-w-full">
        <div className="text-4xl font-semibold text-black">
          Get In Touch With Us
        </div>
        <div className="mt-7 text-base text-center text-neutral-400 w-[644px] max-md:max-w-full">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </div>
        <div className="self-stretch mt-4 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[38%] max-md:w-full">
              <div className="flex flex-col items-start px-12 pt-12 pb-12 mx-auto  w-full text-black bg-white max-md:px-5 max-md:mt-10 space-y-10">
                <div className="flex gap-5 justify-between items-start">
                  <LocateFixed className="w-8 h-8" />
                  <div className="flex flex-col">
                    <div className="text-ellipsis font-bold">Address</div>
                    <div className="mt-2 text-sm">
                      236 5th SE Avenue, New York NY10000, United States
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between items-start">
                  <Phone className="w-6 h-6" />
                  <div className="flex flex-col">
                    <div className="text-ellipsis font-bold">Phone</div>
                    <div className="mt-2 text-sm space-y-4">
                      <span>Mobile: +(84) 546-6789</span>
                      <span>Hotline: +(84) 456-6789</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between items-start">
                  <Clock className="w-6 h-6" />
                  <div className="flex flex-col">
                    <div className="text-ellipsis font-bold">Working Time</div>
                    <div className="mt-2 text-sm space-y-4">
                      <span>Monday-Friday: 9:00 - 22:00</span>
                      <span>Saturday-Sunday: 9:00 - 21:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow p-12 w-full text-base text-black bg-white max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 w-full max-w-sm"
                  >
                    <div className="space-y-2 w-full">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="name" className="text-gray-900">
                              Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter name"
                                {...field}
                                type="text"
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2 w-full">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel
                              htmlFor="email"
                              className="text-gray-900"
                            >
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter email address"
                                {...field}
                                type="email"
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2 w-full">
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel
                              htmlFor="subject"
                              className="text-gray-900"
                            >
                              Subject
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your subject"
                                {...field}
                                type="text"
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2 w-full">
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel
                              htmlFor="message"
                              className="text-gray-900"
                            >
                              Message
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us a little bit about yourself"
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                            <FormDescription>
                              Write your queries above we will get back to you
                              within 24 hrs.
                            </FormDescription>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-4 w-full !mt-4">
                      <Button className="w-full" type="submit">
                        Submit
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
