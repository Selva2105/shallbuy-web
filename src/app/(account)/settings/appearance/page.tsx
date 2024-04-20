import React from "react";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ui/theme-toggle";

const Page = () => {
  // Constants
  const TITLE = "Appearance";
  const DESCRIPTION =
    "Customize the appearance of the app. Automatically switch between day and night themes.";

  return (
    <div className="p-4">
      <Heading title={TITLE} description={DESCRIPTION} />

      <Separator className="my-6" />

      <div className="space-y-6">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Page;
