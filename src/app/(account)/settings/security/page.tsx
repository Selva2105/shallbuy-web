import ChangePasswordForm from "@/components/forms/settings-security/change_password_form";
import { SwitchForm } from "@/components/forms/settings-security/two-factor-form";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Page = () => {
  // Constants
  const TITLE = "Security";
  const DESCRIPTION =
    "Enhance your account's security by updating your password, enabling two-factor authentication, and managing device access.";

  return (
    <ScrollArea className="min-h-screen">
      <div className="p-4">
        <Heading title={TITLE} description={DESCRIPTION} />

        <Separator className="mt-6 mb-4" />

        <div className="space-y-4">
          <ChangePasswordForm />
          <SwitchForm />
        </div>
      </div>
    </ScrollArea>
  );
};

export default Page;
