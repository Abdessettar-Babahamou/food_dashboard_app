"use client";
 
  import { Bell, ChevronDown, Menu, User } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSideBar } from "@/context/side-bar-context";

 function NavBar() {
   const { isOpen, setIsOpen } = useSideBar();
 
  return (
    <div
      className="flex items-center justify-between px-8  py-4    border-gray-200  dark:border-zinc-800
        bg-white dark:bg-darkCardColor border-b-2  w-full z-30  "
    >
      <div className="flex items-center justify-center space-x-4">
        <Menu
          size="25"
          className="text-black dark:text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        <h2 className="text-xl font-bold text-lightTitleColor dark:dark:text-white">
          Waste App
        </h2>
      </div>
      <div className="flex items-center space-x-4">
        <Bell size="25" className="text-black dark:text-white" />
        <Badge className="px-4 py-1">
          <span>0.00</span>
        </Badge>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center justify-center">
              <User size="25" className="text-black dark:text-white" />
              <ChevronDown size="20" className="text-black dark:text-white" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={20}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default NavBar;
