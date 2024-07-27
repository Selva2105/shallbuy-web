"use client";

import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";
import React from "react";
import NavbarUi from "@/components/navigation-ui/navbar-ui";

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  return (
    <>
      {!(pathname.includes("/login") || pathname.includes("/signup")) && (
        <NavbarUi />
      )}

      {children}
      {!(pathname.includes("/login") || pathname.includes("/signup")) && (
        <Footer />
      )}
    </>
  );
};
