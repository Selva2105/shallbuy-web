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
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ChangePassword = () => {
  const { changePassword } = useAuth();
  const [loading, setloading] = useState(false);
  const router = useRouter();

  const searchParams = useSearchParams();

  const token = searchParams.get("token") || "";

  const FormSchema = z.object({
    newPassword: z.string().min(1, { message: "New password is required" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setloading(true);
    try {
      let result = await changePassword(
        token,
        values.newPassword,
        values.confirmPassword,
      );
      if (result.status === "success") {
        toast({
          title: "Successful 🎉",
          description: result.message,
        });
        setTimeout(() => {
          router.push("/login");
        }, 3000);
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
      setloading(false);
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
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email" className="text-gray-900">
                  New Password
                </FormLabel>
                <FormControl>
                  <Input
                    id="new-password"
                    {...field}
                    type="password"
                    placeholder="Enter new password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email" className="text-gray-900">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    id="confirm-password"
                    {...field}
                    type="password"
                    placeholder="Confirm new password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Verifying..." : "Verify"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ChangePassword;
