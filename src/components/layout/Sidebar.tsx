"use client";

import { DashboardNav } from "@/components/dashboard-nav";
import { navItems } from "@/constants/data";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  return (
    <nav className={cn(`relative hidden h-screen lg:block w-72`)}>
      <div className="space-y-4">
        <div className="p-4">
          <div className="space-y-1">
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </nav>
  );
}
