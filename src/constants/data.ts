import { CategoryLinkProps, NavItem, TeamMember } from "@/types";
import { ValuesList } from "@/types";
import { User, Rocket, Fingerprint } from "lucide-react";
import users from "../../public/images/teams/teamsIcon.svg";
import Flag from "../../public/images/teams/flag.svg";
import Heart from "../../public/images/teams/heart.svg";
import LineChart from "../../public/images/teams/graph.svg";
import Smile from "../../public/images/teams/smile.svg";
import Zap from "../../public/images/teams/zap.svg";
import React from "react";
import { homeReviews } from "@/types/static";

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
    profile: "/images/teams/man-avatar.webp",
    name: "Selvaganapathi K",
    role: "Full stack developer",
    bio: "Selvaganapathi is our fullstack developer, responsible for building and maintaining the front-end and back-end of our platform.",
    github: "https://github.com/Selva2105",
    linkedin: "https://www.linkedin.com/in/selvaganapathi-kanakaraj/",
  },
  {
    profile: "/images/teams/female-avatar.webp",
    name: "Navya Sri Thalluri",
    role: "Backend developer",
    bio: "Navya is our backend developer, responsible for implementing the server-side logic and APIs that power our platform.",
    github: "https://github.com/Navya1624",
    linkedin: "https://www.linkedin.com/in/navya-sri-thalluri-4365a8256/",
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

export const categories: CategoryLinkProps[] = [
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/ikart-40b39.appspot.com/o/images%2FHome%2Fwomens-fashion.jpg?alt=media&token=da11e083-0dd9-4ee2-9181-ad021ea072e5",
    altText: "Category 1",
    categoryName: "Women's Fashion",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/ikart-40b39.appspot.com/o/images%2FHome%2Fmens-fashion.jpg?alt=media&token=10878023-2df3-4876-8760-57bea65fb0e6",
    altText: "Category 2",
    categoryName: "Men's Fashion",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/ikart-40b39.appspot.com/o/images%2FHome%2Faccessories.jpg?alt=media&token=765c9637-55e7-4991-88b4-2a5d81d72a9b",
    altText: "Category 3",
    categoryName: "Accessories",
  },
  {
    href: "#",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/ikart-40b39.appspot.com/o/images%2FHome%2Ffurniture.jpg?alt=media&token=280d66a3-fa03-42b3-9178-fc03dea26996",
    altText: "Category 4",
    categoryName: "Furniture",
  },
  // {
  //   href: "#",
  //   imgSrc: "https://firebasestorage.googleapis.com/v0/b/ikart-40b39.appspot.com/o/images%2FHome%2Fgym.jpg?alt=media&token=5bbf9723-f4ca-4a9e-8175-95d8be206119",
  //   altText: "Category 5",
  //   categoryName: "Gym equipments"
  // },
  // {
  //   href: "#",
  //   imgSrc: "https://firebasestorage.googleapis.com/v0/b/ikart-40b39.appspot.com/o/images%2FHome%2Felectronics.jpg?alt=media&token=26f918db-7edd-4213-9c8f-ff82cf0bfafc",
  //   altText: "Category 6",
  //   categoryName: "Electronics"
  // },
  // {
  //   href: "#",
  //   imgSrc: "https://firebasestorage.googleapis.com/v0/b/ikart-40b39.appspot.com/o/images%2FHome%2Fsports.jpg?alt=media&token=84de4b32-e2fb-49f3-8ee8-1877345e8b29",
  //   altText: "Category 7",
  //   categoryName: "Sports equipments"
  // },
  // {
  //   href: "#",
  //   imgSrc: "https://firebasestorage.googleapis.com/v0/b/ikart-40b39.appspot.com/o/images%2FHome%2Fjewellry.jpg?alt=media&token=107f66bd-afda-47c4-b34d-21e74e00c604",
  //   altText: "Category 8",
  //   categoryName: "Jewellery"
  // }
];

export const HomeReviews: homeReviews[] = [
  {
    userName: "John Doe",
    userAltText: "JD",
    rating: 4,
    reviewMsg: `I'm absolutely in love with the quality and style of the products from this brand. The customer service has been`,
  },
];
