"use client";
import Search from "./serch";
import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useSideBar } from "@/context/side-bar-context";
import { motion } from "framer-motion";

function Header() {
  const { setIsOpen, sideBarIsOpen, setSideBarIsOpen } = useSideBar();
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3,delay:0.5 }}
      className="flex justify-between items-center"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold text-lightTitleColor dark:dark:text-white">
          Jaegar Resto
        </h2>
        <span className="text-base text-lightDescriptionColor dark:text-darkDescriptionColor">
          Tuesday, 2 Feb 2021
        </span>
      </div>
      {/* saerch  */}
      <div className="flex gap-x-4 items-center justify-center">
        <Search />
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
            onClick={() => setIsOpen(true)}
          >
            <ShoppingCart className="text-primaryColor  " />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
