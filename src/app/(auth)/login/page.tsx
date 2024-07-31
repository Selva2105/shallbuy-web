"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { login, user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Define schema using Zod
  const formSchema = z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    password: z.string().min(1, "Password is required"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoggingIn(true);
    try {
      let result = await login(values.email, values.password);
      if (result) {
        toast({
          title: "Successful 🎉",
          description: "Hey, chief welcome back !",
        });
        setTimeout(() => {
          router.push("/");
        }, 3000);
      }
    } catch (error) {
      console.error("Login error:", error);
      const errorMessage =
        (error as any).response?.data?.message ||
        "Login failed. Please try again.";
      setLoginError(errorMessage);
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="mx-auto max-w-md w-full flex flex-col justify-center items-center">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Buy now and enjoy the experience! 🎉
          </CardDescription>
          <CardDescription className="text-red-500">
            {loginError && loginError}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 w-full max-w-sm"
            >
              <div className="space-y-2 w-full">
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
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="relative space-y-2 w-full">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <div className="flex items-center">
                          <Label htmlFor="password" className="text-gray-900">
                            Password
                          </Label>
                          <Link
                            className="ml-auto inline-block text-xs underline text-gray-700"
                            href="/forget-password"
                          >
                            Forgot your password?
                          </Link>
                        </div>
                      </FormLabel>
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
                <div className="space-y-4 w-full !mt-4">
                  <Button
                    className="w-full"
                    type="submit"
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? (
                      <>
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        Logging in...
                      </>
                    ) : (
                      "Login"
                    )}
                  </Button>
                  <div className="flex items-center my-4">
                    <Separator className="my-3 !w-[45%]" />
                    <span className="mx-3 text-sm text-gray-500">or</span>
                    <Separator className="my-3 !w-[45%]" />
                  </div>
                  <Button className="w-full" variant="outline">
                    Login with Google
                  </Button>
                </div>
                <div className="space-y-4 text-center text-sm ">
                  Don’t have an account?
                  <Link
                    className="underline underline-offset-1 hover:no-underline hover:text-gray-500 mx-2"
                    href="/signup"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
