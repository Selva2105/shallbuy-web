import {
  Package,
  Settings,
  LayoutGrid,
  LucideIcon,
  ShoppingBag,
  BarChart,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/seller/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "General",
      menus: [
        {
          href: "",
          label: "Product",
          active: pathname.includes("/products"),
          icon: Package,
          submenus: [
            {
              href: "/seller/products",
              label: "All Products",
              active: pathname === "/products",
            },
            {
              href: "/seller/products/new",
              label: "New Product",
              active: pathname === "/products/new",
            },
            {
              href: "/seller/products/inventory",
              label: "Inventory Management",
              active: pathname === "/products/inventory",
            },
          ],
        },
        {
          href: "/seller/orders",
          label: "Orders",
          active: pathname.includes("/orders"),
          icon: ShoppingBag,
          submenus: [],
        },
        {
          href: "/seller/analytics",
          label: "Analytics",
          active: pathname.includes("/analytics"),
          icon: BarChart,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/seller/account",
          label: "Account",
          active: pathname.includes("/account"),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}
