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
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import useAuth from "@/hooks/useAuth";
import {
  SettingsProfileFormValues,
  settingsProfileSchema,
} from "@/lib/settings-profile-schema";
import { updateUserProfile } from "@/redux/features/userProfileSlice";
import { useAppDispatch } from "@/redux/lib/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon, RocketIcon } from "@radix-ui/react-icons";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const UserEdit = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false); // Add loading state

  // Constants
  const TITLE = "Profile";
  const DESCRIPTION = "This is how others will see you on the site.";

  // Form - react hook form
  const form = useForm<SettingsProfileFormValues>({
    resolver: zodResolver(settingsProfileSchema),
    mode: "onChange",
    defaultValues: {
      username: user?.username || "",
      email: user?.email || "",
      contactno: user?.contactno || "",
      dateOfBirth: user?.dateOfBirth.split("T")[0] || "",
    },
  });

  const ProcessForm: SubmitHandler<SettingsProfileFormValues> = async (
    data,
  ) => {
    setIsLoading(true);
    try {
      console.log("data ==>", data);
      if (user?._id) {
        await dispatch(
          updateUserProfile({
            id: user._id,
            userData: {
              username: data.username,
              contactno: data.contactno,
            },
          }),
        ).unwrap();

        toast({
          className: cn(
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4",
          ),
          title: "Profile Updated",
          description: "Your profile has been successfully updated.",
        });
      }
    } catch (error) {
      console.error("Failed to update profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="">
        <Heading title={TITLE} description={DESCRIPTION} />
      </div>
      <Separator className="mt-6" />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(ProcessForm)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            defaultValue=""
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="johndoe@gmail.com"
                    {...field}
                    type="email"
                    disabled={true}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactno"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter you contact number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateOfBirth"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of birth</FormLabel>
                <FormControl>
                  <Input type="date" {...field} disabled={true} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className=""
            type="submit"
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? (
              <>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              <>
                <RocketIcon className="mr-2 h-4 w-4" />
                Update
              </>
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default UserEdit;
