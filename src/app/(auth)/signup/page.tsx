"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

const Index = () => {
  async function test() {
    await new Promise((resolve) => setTimeout(resolve, 900000));
  }
  test();
  const formSchema = z
    .object({
      firstName: z
        .string({
          required_error: "First name is required",
        })
        .min(5, {
          message: "First name should have at least 5 characters",
        })
        .max(15, {
          message: "First name should not exceed 15 characters",
        }),
      lastName: z
        .string({
          required_error: "Last name is required",
        })
        .min(5, {
          message: "Last name should have at least 5 characters",
        })
        .max(15, {
          message: "Last name should not exceed 15 characters",
        }),
      username: z
        .string({
          required_error: "Username is required",
        })
        .min(8, {
          message: "Username should have at least 8 characters",
        })
        .max(15, {
          message: "Username should not exceed 15 characters",
        }),
      email: z
        .string({
          required_error: "Email address is required",
        })
        .email({
          message: "Give a valid email address",
        }),
      password: z
        .string({
          required_error: "Password is required",
        })
        .min(8, {
          message: "Password should have at least 8 characters",
        })
        .max(15, {
          message: "Password should not exceed 15 characters",
        }),
      confirmPassword: z
        .string({
          required_error: "Password is required",
        })
        .min(8, {
          message: "Password should have at least 8 characters",
        })
        .max(15, {
          message: "Password should not exceed 15 characters",
        }),
      phone: z
        .string({
          required_error: "Phone number is required",
        })
        .min(10, {
          message: "Give a valid phone number",
        })
        .max(10, {
          message: "Give a valid phone number",
        }),
      dob: z.date({
        required_error: "A date of birth is required.",
      }),
      terms: z
        .boolean({
          required_error: "Accept the agreement policy",
        })
        .default(false),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
      if (confirmPassword !== password) {
        ctx.addIssue({
          code: "custom",
          message: "The passwords did not match",
        });
      }
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      terms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your information to create an account
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="firstName"
                rules={{ required: "First name required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter first name" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter last name" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter username" {...field} />
                    </FormControl>
                    <FormDescription className="!text-xs">
                      User name should be unique and its not updateable.
                    </FormDescription>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
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
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter password"
                        id="password"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter confirm password"
                        id="confirmPassword"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormDescription className="!text-xs">
                      Password and confirm password should be same.
                    </FormDescription>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter phone numbeeer"
                        id="phone"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="mt-2">Date of birth</FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "text-left font-normal",
                              !field.value && "text-muted-foreground",
                            )}
                            size={"default"}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex items-center space-x-2 py-4">
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="leading-none !m-0">
                    <FormLabel className="text-sm">
                      Accept our privacy policy.
                    </FormLabel>
                  </div>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full py-4">Sign Up</Button>
        </form>
      </Form>
    </div>
  );
};

export default Index;