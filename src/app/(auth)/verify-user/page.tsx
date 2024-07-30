"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Unauthorized from "@/components/unAuth/UnAuthorized";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Component() {
  const FormSchema = z.object({
    pin: z.string().min(6, {
      message: "Your one-time password must be 6 characters.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  const searchParams = useSearchParams();
  const router = useRouter();

  const userId = searchParams.get("id");

  const [resendTimer, setResendTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (resendTimer > 0 && isResendDisabled) {
      interval = setInterval(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (resendTimer === 0 && isResendDisabled) {
      setIsResendDisabled(false);
    }
    return () => clearInterval(interval);
  }, [resendTimer, isResendDisabled]);

  const handleResend = async () => {
    setIsResendDisabled(true);
    setResendTimer(60);
    // Add your resend logic here
    try {
      let result = await axios.post(
        `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/v1/auth/resendOTP/${userId}`,
      );

      if (result.data.status === "success") {
        toast({
          title: "Email Sent",
          description: "A new verification code has been sent to your email.",
        });
      }
    } catch (error) {
      toast({
        title: "Failed!",
        description: "Failed to resend verification email",
      });
    }
  };

  if (!userId) {
    return <Unauthorized />;
  }

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      let result = await axios.patch(
        `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/v1/auth/verifyEmail/${userId}`,
        {
          emailVerificationOTP: data.pin,
        },
      );

      if (result.data.status === "success") {
        toast({
          title: "Congrats!",
          description: "Successfully Verified",
        });
      }
      router.push("/login");
    } catch (error) {
      toast({
        title: "Failed!",
        description: "Failed to verify",
      });
    }
  }

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome back!</h1>
          <p className="text-muted-foreground">
            Please enter the 6-digit verification code sent to your email.
          </p>
        </div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup className="justify-center w-full">
                          <InputOTPSlot
                            index={0}
                            className="w-12 h-12 text-2xl"
                          />
                          <InputOTPSlot
                            index={1}
                            className="w-12 h-12 text-2xl"
                          />
                          <InputOTPSlot
                            index={2}
                            className="w-12 h-12 text-2xl"
                          />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup className="justify-center w-full">
                          <InputOTPSlot
                            index={3}
                            className="w-12 h-12 text-2xl"
                          />
                          <InputOTPSlot
                            index={4}
                            className="w-12 h-12 text-2xl"
                          />
                          <InputOTPSlot
                            index={5}
                            className="w-12 h-12 text-2xl"
                          />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Verify
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-2">
          <div className="text-center text-sm text-muted-foreground">
            <Button
              variant="ghost"
              onClick={handleResend}
              disabled={isResendDisabled}
              className="underline"
            >
              {isResendDisabled
                ? `Resend email (${resendTimer}s)`
                : "Resend email"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
