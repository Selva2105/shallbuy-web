"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import useAuth from "@/hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ForgetPassword = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const { forgotPassword } = useAuth();

  const FormSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setIsLoggingIn(true);
    try {
      let result = await forgotPassword(values.email);
      if (result.status === "success") {
        toast({
          title: "Successful 🎉",
          description: result.message,
        });
      } else if (result.status === 404) {
        toast({
          title: "Error 😔",
          description: result.data.message,
        });
      }
    } catch (error) {
      toast({
        title: "Error 😔",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="mx-auto max-w-md space-y-6 min-h-screen flex flex-col justify-center">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Forgot Password</h1>
        <p className="text-muted-foreground">
          Enter your email to reset your password
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email" className="text-gray-900">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter email address"
                    {...field}
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoggingIn}>
            Verify
          </Button>
        </form>
      </Form>
      {/* <div className="hidden space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" placeholder="Enter new password" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" placeholder="Confirm new password" required />
                </div>
                <Button type="submit" className="w-full">
                    Save New Password
                </Button>
            </div> */}
    </div>
  );
};

export default ForgetPassword;
