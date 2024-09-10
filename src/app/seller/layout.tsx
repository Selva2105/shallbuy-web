import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import React from "react";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminPanelLayout>{children}</AdminPanelLayout>;
}
