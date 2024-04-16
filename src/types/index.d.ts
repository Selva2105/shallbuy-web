import { ReactNode } from "react";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  description?: string;
  icon?: ReactNode;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export type SidebarNavItem = NavItemWithChildren;

export interface UserAddress {
  street: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  isPrimary: boolean;
  _id: string;
}

export interface UserPreferences {
  language: string;
  currency: string;
}

export interface User {
  preferences: UserPreferences;
  _id: string;
  username: string;
  email: string;
  addresses: UserAddress[];
  contactno: string;
  dateOfBirth: string;
  role: string;
  isActive: boolean;
  isEmailVerified: boolean;
  updatedAt: string;
  createdAt: string;
  twoFactorEnabled: boolean;
}
