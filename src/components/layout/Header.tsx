import { cn } from "@/lib/utils";
import { MobileSidebar } from "./mobile-sidebar";

export default function Header() {
  return (
    <div className="left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20 lg:px-4 lg:py-5">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>
        <div className="hidden lg:flex flex-col">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
      </nav>
    </div>
  );
}
