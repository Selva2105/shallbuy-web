import { NavItem } from "@/types";
import { User, Rocket, Fingerprint } from "lucide-react";
import React from "react";

export const navItems: NavItem[] = [
  {
    title: "Account",
    href: "/settings",
    label: "Account",
    icon: React.createElement(User, { className: "w-4 h-4" }),
  },
  {
    title: "Appearance",
    href: "/settings/appearance",
    label: "appearance",
    icon: React.createElement(Rocket, { className: "w-4 h-4" }),
  },
  {
    title: "Security",
    href: "/settings/security",
    label: "Security",
    icon: React.createElement(Fingerprint, { className: "w-4 h-4" }),
  },
];
