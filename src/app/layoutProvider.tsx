"use client";

import Footer from "@/components/footer/Footer";
import { NavigationBar } from "@/components/navigation-ui/navigation-bar";
import { usePathname } from "next/navigation";
import React from "react";

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  return (
    <>
      {!(pathname.includes("/login") || pathname.includes("/signup")) && (
        <NavigationBar />
      )}
      {children}
      {!(pathname.includes("/login") || pathname.includes("/signup")) && (
        <Footer />
      )}
    </>
  );
};
