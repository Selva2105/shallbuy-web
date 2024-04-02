import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export interface HeadersOption {
  username?: string;
  role?: string;
  email: string;
}
export interface MenuItem {
  type:
    | "label"
    | "separator"
    | "group"
    | "sub"
    | "disabled"
    | "header"
    | "D_Button"
    | "button";
  label?: string;
  items?: string[];
  headers?: HeadersOption;
  onClick?: () => void;
  variant?: "secondary" | "destructive" | "outline" | "ghost" | "link";
}

interface ReusableDropdownMenuProps {
  triggerContent: React.ReactNode;
  menuItems: MenuItem[];
}

const ReusableDropdownMenu = ({
  triggerContent,
  menuItems,
}: ReusableDropdownMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{triggerContent}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 text-sm font-normal text-gray-900 cursor-pointer">
        {menuItems.map((menuItem, index) => (
          <React.Fragment key={index}>
            {menuItem.type === "header" && (
              <div className="p-2">
                <div className="font-semibold truncate">
                  {menuItem.headers?.username}
                </div>
                <div className="text-gray-500 font-font-medium">
                  {menuItem.headers?.role}
                </div>
                <div className="truncate">{menuItem.headers?.email}</div>
              </div>
            )}
            {menuItem.type === "label" && (
              <DropdownMenuLabel>{menuItem.label}</DropdownMenuLabel>
            )}
            {menuItem.type === "D_Button" && (
              <DropdownMenuItem>
                <Button
                  onClick={menuItem.onClick}
                  className="justify-start w-full my-1"
                  variant="destructive"
                >
                  {menuItem.label}
                </Button>
              </DropdownMenuItem>
            )}
            {menuItem.type === "button" && (
              <DropdownMenuItem>
                <Button
                  onClick={menuItem.onClick}
                  className="w-full my-1"
                  variant={menuItem.variant}
                >
                  {menuItem.label}
                </Button>
              </DropdownMenuItem>
            )}
            {menuItem.type === "separator" && <DropdownMenuSeparator />}
            {menuItem.type === "group" && (
              <DropdownMenuGroup>
                {menuItem.items?.map((item, idx) => (
                  <DropdownMenuItem key={idx} className="cursor-pointer">
                    {item}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            )}
            {menuItem.type === "sub" && (
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  {menuItem.label}
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    {menuItem.items?.map((item, idx) => (
                      <DropdownMenuItem key={idx} className="cursor-pointer">
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            )}
            {menuItem.type === "disabled" && (
              <DropdownMenuItem disabled>{menuItem.label}</DropdownMenuItem>
            )}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ReusableDropdownMenu;
