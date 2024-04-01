import { CreateProfileOne } from "@/components/forms/user-profile-stepper/create-profile";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 lg:py90 lg:px-40  ">
        <CreateProfileOne />
      </div>
    </ScrollArea>
  );
}
