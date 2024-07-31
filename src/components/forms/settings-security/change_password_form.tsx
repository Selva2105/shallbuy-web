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
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { ApiResponse } from "@/context/AuthContext";
import { CheckIcon } from "lucide-react";

const FormSchema = z
  .object({
    currentPassword: z.string(),
    newPassword: z
      .string()
      .regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{:;'?/><.,])(?=.*[^\w\d\s]).{8,15}$/,
        {
          message:
            "Password should contain at least one uppercase, lowercase, digit, special character, and be 8-15 characters long",
        },
      ),
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });

export type ChangePasswordFormValues = z.infer<typeof FormSchema>;

const ChangePasswordForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { user, changePasswordApi, isLoading } = useAuth();
  const [serverError, setServerError] = useState<ApiResponse>();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    let result = await changePasswordApi(user?._id, data);

    if (result && "message" in result) {
      setServerError({ message: result.message });
    } else {
      setServerError(undefined);
      toast({
        description: (
          <div className="w-full flex items-center">
            <CheckIcon className="mr-2 text-green-500" />
            <span className="first-letter:capitalize">
              successfully updated
            </span>
          </div>
        ),
        title: "Password changed successfully",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full md:w-2/4 lg:w-2/5"
      >
        <h3 className="text-lg font-medium">Change password</h3>
        {serverError && (
          <>
            <span className="text-red-500 text-sm font-medium">
              {serverError.message}
            </span>
          </>
        )}
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem>
                <div className="space-y-0.5">
                  <FormLabel>Current Password</FormLabel>
                </div>
                <FormControl>
                  <Input
                    value={field.value || ""}
                    id="currentPassword"
                    type="password"
                    onChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <div className="space-y-0.5">
                  <FormLabel>New Password</FormLabel>
                </div>
                <FormControl>
                  <Input
                    value={field.value || ""}
                    id="newPassword"
                    type="password"
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="confirmNewPassword"
            render={({ field }) => (
              <FormItem>
                <div className="space-y-0.5 flex items-center">
                  <FormLabel>Confirm new Password</FormLabel>
                  <Link
                    className="ml-auto inline-block text-xs underline text-gray-700"
                    href="#"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <FormControl>
                  <Input
                    value={field.value || ""}
                    id="confirmNewPassword"
                    type="password"
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full md:w-fit !text-[0.75rem] !font-normal"
        >
          Change Password
        </Button>
      </form>
    </Form>
  );
};

export default ChangePasswordForm;
