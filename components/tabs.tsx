"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";

function Tabs() {
  const [activeIndex, setactiveIndex] = useState(0);
  const tabItems = [
    "Hot Dishes",
    "Cold Dishes",
    "Soup",
    "Grill",
    "Appetizer",
    "Dessert",
  ];
  const activeClass = [
    "translate-x-[0px]",
    "translate-x-[100px]",
    "translate-x-[200px]",
    "translate-x-[300px]",
    "translate-x-[400px]",
    "translate-x-[500px]",
  ];

  return (
    <motion.div
      initial={{  opacity: 0 }}
      animate={{  opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="flex  overflow-x-scroll"
    >
      <div className="flex flex-col  border-b-2 dark:border-darkBorderColor py-4 relative transition-all ease-out min-w-full ">
        <div className="flex">
          {tabItems.map((item, index) => {
            return (
              <h3
                className="text-sm font-semibold  w-[100px] cursor-pointer flex-shrink-0"
                key={item}
                onClick={() => setactiveIndex(index)}
              >
                {item}
              </h3>
            );
          })}
        </div>
        <div className="w-ful h-1 relative mt-1">
          <div
            className={cn(
              `flex absolute -bottom-[3px]  w-8 h-1 bg-primaryColor rounded-sm transition-all ease-out duration-300`,
              activeClass[activeIndex]
            )}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Tabs;
