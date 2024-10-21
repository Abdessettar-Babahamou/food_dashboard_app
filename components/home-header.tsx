"use client";
import { useSideBar } from "@/context/side-bar-context";
import { Button } from "./ui/button";
import { Menu, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

function HomeHeader() {
  const { setMostSideBarIsOpen, setSideBarIsOpen, sideBarIsOpen } =
    useSideBar();

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="flex  py-4
    border-b border-white dark:border-darkBorderColor items-center justify-between
  "
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold text-lightTitleColor dark:dark:text-white">
          Dashbard
        </h2>
        <span className="text-base text-lightDescriptionColor dark:text-darkDescriptionColor">
          Tuesday, 2 Feb 2021
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Button
          className="flex items-center justify-center w-12 h-12 border border-primaryColor  
      rounded-md text-lg
       xl:hidden
      "
          onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
        >
          <Menu className="text-primaryColor  " />
        </Button>

        <Button
          className="flex items-center justify-center w-12 h-12 border border-primaryColor  
      rounded-md text-lg
       xl:hidden
      "
          onClick={() => setMostSideBarIsOpen(true)}
        >
          <ShoppingCart className="text-primaryColor  " />
        </Button>
      </div>
    </motion.div>
  );
}

export default HomeHeader;
