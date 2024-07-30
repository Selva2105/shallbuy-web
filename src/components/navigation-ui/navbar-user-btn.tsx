"use client";

import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { LogOut, Settings, User } from "lucide-react";

const NavbarUserBtn = () => {
  const { logout, user } = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = async () => {
    let result = await logout();
    if (result) {
      router.push("/login");
    }
  };

  const handleLogin = () => {
    router.push("/login");
  };

  if (!isClient) {
    return null; // Return null on the server-side
  }

  return (
    <>
      {user?.email ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="p-0 focus-visible:ring-0 focus-visible:ring-transparent"
            >
              <User className="size-5 text-muted-foreground" />
              <span className="sr-only">Account</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-56">
            <div className="flex flex-col items-start gap-2 px-2 py-1.5">
              <div className="text-base font-semibold">John Doe</div>
              <div className="text-xs text-muted-foreground">Admin</div>
              <div className="text-xs text-muted-foreground">
                john@example.com
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href="/profile"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <User className="size-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/settings"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <Settings className="size-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button
                variant="link"
                className="w-full p-0 flex items-center justify-start gap-2 text-red-500 hover:bg-none hover:no-underline"
                onClick={handleLogout}
              >
                <LogOut className="size-4 text-red-500" />
                <span>Logout</span>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button variant="outline" onClick={handleLogin}>
          Login
        </Button>
      )}
    </>
  );
};

export default NavbarUserBtn;
