"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import PillWithNumber from "../ui/pill";
import ReusableDropdownMenu, { MenuItem } from "./NavDropdown";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export function NavigationBar() {
  const { logout, user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    let result = await logout();

    if (result) {
      router.push("/login");
    }
  };

  const menuItems: MenuItem[] = [
    {
      type: "header",
      label: "My Account",
      headers: {
        email: user?.email,
        role: user?.role,
        username: user?.username.toUpperCase(),
      },
    },
    { type: "separator" },
    {
      type: "group",
      items: ["Profile", "Billing", "Settings", "Keyboard shortcuts"],
    },
    { type: "separator" },
    {
      type: "sub",
      label: "Support",
      items: ["Contact sales", "Chat"],
    },
    { type: "separator" },
    { type: "D_Button", label: "Log out", onClick: handleLogout },
  ];

  const menuItems2: MenuItem[] = [
    {
      type: "button",
      label: "Login",
      onClick() {
        router.push("/login");
      },
    },
    {
      type: "button",
      label: "Signup",
      onClick() {
        router.push("/signup");
      },
      variant: "outline",
    },
  ];

  return (
    <nav className="flex items-center h-16 px-4 border-b bg-gray-100 dark:bg-gray-800">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <Link className="flex items-center gap-2" href="#">
          <PackageIcon className="h-6 w-6" />
          <span>ShallBuy</span>
        </Link>
      </div>
      <div className="flex items-center gap-4 flex-1 min-w-0 mx-2">
        <form>
          <div className="relative">
            <SearchIcon className="absolute left-2.5 h-5 w-5 text-gray-500 top-2/4 translate-y-[-50%] dark:text-gray-400" />
            <Input
              className="pl-8 w-[150px] sm:w-[200px] md:w-[150px] lg:w-[200px] xl:w-[250px] bg-white"
              placeholder="Search"
              type="search"
            />
          </div>
        </form>
        <Link
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
          href="#"
        >
          Home
        </Link>
        <Link
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
          href="#"
        >
          Products
        </Link>
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <Button size="sm" variant="outline">
          <BellIcon className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>
        <ReusableDropdownMenu
          triggerContent={
            <Button size="sm" variant="outline">
              <UserIcon className="h-4 w-4" />
              <span className="sr-only">Profile</span>
            </Button>
          }
          menuItems={user ? menuItems : menuItems2}
        />

        <div className="flex items-center gap-2">
          <Button className="w-8 h-8" size="icon" variant="ghost">
            <HeartIcon className="icon-sm" />
            <span className="sr-only">Toggle wishlist</span>
          </Button>
          <Button className="w-8 h-8" size="icon" variant="ghost">
            <PillWithNumber>
              <PackageIcon className="icon-sm" />
              <span className="sr-only">Toggle cart</span>
            </PillWithNumber>
          </Button>
        </div>
      </div>
    </nav>
  );
}

function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function BellIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
