"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Palette, Store } from "lucide-react";
import { nav_Links } from "@/lib/constants";
import { Button } from "./ui/button";
import SideBarItem from "./side-bar-item";
import { useSideBar } from "@/context/side-bar-context";
import { motion } from "framer-motion";

function SideBar() {
  const { setTheme } = useTheme();
  const { sideBarIsOpen } = useSideBar();

  return (
    <motion.aside
      initial={{  opacity: 0 }}
      animate={{  opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        `flex lg:flex flex-col items-center  justify-between gap-4 w-[100px] pl-3
         bg-white  dark:bg-darkCardColor 
           fixed h-screen z-20  py-4 overflow-y-scroll
         transition-all duration-200 -translate-x-full lg:translate-x-0 `,
        { "translate-x-0": sideBarIsOpen }
      )}
    >
      {/* logo */}
      <Button
        className={cn(
          ` flex  items-center w-14 h-14 gap-4 
        justify-start rounded-md bg-primaryColor/30`
        )}
        variant={"ghost"}
      >
        <Store className="text-primaryColor" />
      </Button>

      <div className="flex flex-1 flex-col  space-y-2  w-full">
        {nav_Links.map((link) => {
          return <SideBarItem link={link} key={link.url} />;
        })}
      </div>
      <div className="flex flex-col gap-4 ">
        <DropdownMenu>
          <DropdownMenuTrigger
            className="w-full flex gap-4 justify-between items-center
          bg-lightBgColor dark:bg-darkBgColor p-2 rounded-md
          focus-visible:ring-0 focus-visible:ring-offset-0
          "
            aria-label="Theme selection" // Add aria-label for accessibility
          >
            <div className="flex gap-4 items-center justify-center w-full">
              <Palette />
              {/* <h3>Theme</h3> */}
            </div>
            {/* <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="hidden dark:flex h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> */}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setTheme("dark")}
            >
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setTheme("light")}
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setTheme("system")}
            >
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          className={cn(
            ` flex  items-center w-14 h-14 gap-4 
        justify-start rounded-md`
          )}
          variant={"ghost"}
        >
          <LogOut className="text-primaryColor" />
        </Button>
      </div>
    </motion.aside>
  );
}

export default SideBar;
