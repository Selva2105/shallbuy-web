import { NavItem, TeamMember } from "@/types";
import { ValuesList } from "@/types";
import { User, Rocket, Fingerprint } from "lucide-react";
import maleAvatar from "../../public/images/teams/man-avatar.webp";
import femaleAvatar from "../../public/images/teams/female-avatar.webp";
import users from "../../public/images/teams/teamsIcon.svg";
import Flag from "../../public/images/teams/flag.svg";
import Heart from "../../public/images/teams/heart.svg";
import LineChart from "../../public/images/teams/graph.svg";
import Smile from "../../public/images/teams/smile.svg";
import Zap from "../../public/images/teams/zap.svg";
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

export const teamMembers: TeamMember[] = [
  {
    profile: maleAvatar,
    name: "Selvaganapathi K",
    role: "Full stack developer",
    bio: "Consistency is a key for success 🎉",
    github: "https://github.com/Selva2105",
    linkedin: "https://www.linkedin.com/in/selvaganapathi-kanakaraj/",
  },
  {
    profile: femaleAvatar,
    name: "Uthra Karunakaran",
    role: "Frontend developer",
    bio: "I'm a !worst programmer",
    github: "https://github.com/code-par-learn",
    linkedin: "https://www.linkedin.com/in/uthra-karuna/",
  },
];

export const valuesList: ValuesList = [
  {
    icon: users,
    title: "Care about our team",
    description:
      "Understand what matters to our employees. Give them what they need to do their best work.",
  },
  {
    icon: Heart,
    title: "Be excellent to each other",
    description:
      "No games. No bullshit. We rely on our peers to improve. Be open, honest and kind.",
  },
  {
    icon: LineChart,
    title: "Pride in what we do",
    description:
      "Value quality and integrity in everything we do. At all times. No exceptions.",
  },
  {
    icon: Smile,
    title: "Don't #!&$ the customer",
    description:
      "Understand customer's stated and unstated needs. Make them wildly successful.",
  },
  {
    icon: Flag,
    title: "Do the impossible",
    description:
      "Be energized by difficult problems. Revel in unknowns. Ask 'Why?', but always question, 'Why not?'",
  },
  {
    icon: Zap,
    title: "Sweat the small stuff",
    description:
      "We believe the best products come from the best attention to detail. Sweat the small stuff.",
  },
];
