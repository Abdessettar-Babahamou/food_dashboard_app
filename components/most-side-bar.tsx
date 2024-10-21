"use client";
import { cn } from "@/lib/utils";
import React from "react";
import MostOrderd from "./most-orderd";
import MostTypeOfOrder from "./most-type-of-order";
import { useSideBar } from "@/context/side-bar-context";
import { X } from "lucide-react";
import { motion } from "framer-motion";

function MostSideBar() {
  const { mostSideBarIsOpen, setMostSideBarIsOpen } = useSideBar();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        `flex flex-col gap-y-8  py-8 px-2 pb-10 
       w-screen md:w-[470px] fixed  right-0 bottom-0 top-0 
      translate-x-full lg:translate-x-0 transition-all overflow-y-scroll
      ease-in-out bg-lightBgColor dark:bg-darkBgColor`,
        { "translate-x-full": false },
        { "translate-x-0": mostSideBarIsOpen }
      )}
    >
      <X
        className="cursor-pointer flex lg:hidden absolute top-1 right-2"
        onClick={() => setMostSideBarIsOpen(false)}
      />
      {/* most orders */}
      <MostOrderd />
      {/* most type of order */}

      <MostTypeOfOrder />
    </motion.div>
  );
}

export default MostSideBar;
