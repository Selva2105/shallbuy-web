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
import React from "react";

const index = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="mx-auto max-w-md w-full flex flex-col justify-center items-center">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Buy now and enjoy the experience! 🎉
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center w-full">
          <div className="space-y-4 w-full max-w-sm">
            <div className="space-y-2 w-full">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="relative space-y-2 w-full">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  className="ml-auto inline-block text-sm underline"
                  href="#"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                placeholder="Enter your password"
                required
                type="password"
              />
              <div className="space-y-4 w-full !mt-4">
                <Button className="w-full" type="submit">
                  Login
                </Button>
                <div className="flex items-center my-4">
                  <Separator className="my-3 !w-[45%]" />
                  <span className="mx-3 text-sm text-gray-500">or</span>
                  <Separator className="my-3 !w-[45%]" />
                </div>
                <Button className="w-full" variant="outline">
                  Login with GitHub
                </Button>
              </div>
              <div className="space-y-4 text-center text-sm">
                Don’t have an account?
                <Link className="underline" href="/signup">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default index;
