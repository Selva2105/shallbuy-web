import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Shallbuy | Settings",
  description: "Shallbuy settings page",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex overflow-hidden">
        <Sidebar />
        <main className="w-full">{children}</main>
      </div>
    </>
  );
}
