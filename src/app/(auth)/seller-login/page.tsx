"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, Mail, Lock, ShieldCheck, RefreshCw } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useAppDispatch, useAppSelector } from "@/redux/lib/hooks";
import { loginSeller } from "@/redux/features/sellerSlice";
import { verifyOtp } from "@/redux/features/sellerSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Define the schema using zod
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean(),
});

const otpSchema = z.object({
  otp: z.string().min(6, { message: "OTP must be at least 6 characters" }),
});

type FormData = z.infer<typeof loginSchema> | z.infer<typeof otpSchema>;

export default function SellerLogin() {
  const [rememberMe, setRememberMe] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const dispatch = useAppDispatch();
  const { isLoading, seller, error } = useAppSelector((state) => state.seller);
  const router = useRouter();

  // Conditionally apply the schema based on whether the OTP has been sent
  const formSchema = isOtpSent ? otpSchema : loginSchema;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
      otp: "",
    },
  });

  // Type guard to check if data is login data
  const isLoginData = (data: FormData): data is z.infer<typeof loginSchema> => {
    return "email" in data;
  };

  // Handle login submission
  const handleLogin = async (data: FormData) => {
    if (isLoginData(data)) {
      dispatch(loginSeller({ email: data.email, password: data.password }))
        .unwrap()
        .then(() => {
          form.reset({ otp: "" });
          setIsOtpSent(true);
          toast({
            title: "OTP Sent",
            description: "Please check your email for the OTP.",
          });
        })
        .catch((err) => {
          toast({
            title: "Login Failed",
            description: err.message,
          });
        });
    }
  };

  // Handle OTP verification
  const handleOtpVerification = async (data: FormData) => {
    if (!isLoginData(data)) {
      if (!seller) {
        toast({
          title: "Error",
          description: "Seller information is missing.",
        });
        return;
      }
      dispatch(verifyOtp({ email: seller.email, otp: data.otp }))
        .unwrap()
        .then(() => {
          toast({
            title: "Login Successful",
            description: "Welcome back to Shallbuy!",
          });
          router.push("/seller/dashboard");
        })
        .catch((err) => {
          toast({
            title: "OTP Verification Failed",
            description: err.message,
          });
        });
    }
  };

  const handleResendOtp = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "OTP Resent",
      description: "A new OTP has been sent to your email.",
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="max-w-md w-full flex flex-col justify-center items-center">
        <CardHeader className="space-y-1 w-full">
          <CardTitle className="text-3xl font-bold text-center">
            Shallbuy
          </CardTitle>
          <CardDescription className="text-center">
            Login to your seller account
          </CardDescription>
          <CardDescription className="text-red-500">
            {error ? error.message : null}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 w-full">
          {!isOtpSent ? (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleLogin)}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="email" className="text-gray-900">
                          Email
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="email"
                              placeholder="Enter your email"
                              type="email"
                              {...field}
                              className="pl-10"
                            />
                          </div>
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
                        <FormLabel htmlFor="password" className="text-gray-900">
                          Password
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="password"
                              placeholder="Enter your password"
                              type="password"
                              {...field}
                              className="pl-10"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      checked={rememberMe}
                      onCheckedChange={(checked) =>
                        setRememberMe(checked as boolean)
                      }
                    />
                    <label
                      htmlFor="rememberMe"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                  <Button variant="link" className="px-0 text-sm">
                    Forgot password?
                  </Button>
                </div>
                <Button className="w-full" type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : null}
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </form>
            </Form>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleOtpVerification)}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="otp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="otp" className="text-gray-900">
                          OTP
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <ShieldCheck className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="otp"
                              placeholder="Enter OTP sent to your email"
                              {...field}
                              className="pl-10"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>
                <Button className="w-full" type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : null}
                  {isLoading ? "Verifying..." : "Verify OTP"}
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleResendOtp}
                  disabled={isLoading}
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Resend OTP
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
        <CardFooter className="w-full text-center justify-center">
          <div className="text-sm text-gray-600">
            <p className="mt-2">
              What to become a seller?{" "}
              <Link
                href="/seller-onboard"
                className="text-gray-800 hover:underline"
              >
                create account
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
