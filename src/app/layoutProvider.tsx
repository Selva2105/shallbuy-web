"use client";

import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";
import React from "react";
import NavbarUi from "@/components/navigation-ui/navbar-ui";

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const ignore = ["/login", "/signup", "/seller-onboard"];
  return (
    <>
      {!ignore.some((path) => pathname.includes(path)) && <NavbarUi />}

      {children}
      {!ignore.some((path) => pathname.includes(path)) && <Footer />}
    </>
  );
};
