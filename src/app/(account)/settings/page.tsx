"use client";

import UserEdit from "@/components/forms/settings-profile/user-edit";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Page() {
  return (
    <ScrollArea className="min-h-screen">
      <div className="space-y-4 md:px-8 md:py-2">
        <UserEdit />
      </div>
    </ScrollArea>
  );
}
