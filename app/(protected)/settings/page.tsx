"use client";
import SettingMenuItem from "@/components/setting-menu-item";
import Tabs from "@/components/tabs";
import { foods, settingsMenuItem } from "@/lib/constants";
import { Menu, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SectionTitle from "@/components/section-title";
import AddDish from "@/components/add-dish";
import DishCard from "@/components/dish-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useSideBar } from "@/context/side-bar-context";

 function SettingsPage() {
  const {  sideBarIsOpen,setSideBarIsOpen } = useSideBar();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="flex flex-col gap-4"
    >
      <div className="flex items-center justify-between gap-1 w-full">
        <h2 className="text-3xl font-semibold text-lightTitleColor dark:dark:text-white">
          Settings
        </h2>
        <Button
          className="flex items-center justify-center w-12 h-12 border border-primaryColor  
      rounded-md text-lg
       xl:hidden
      "
          onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
        >
          <Menu className="text-primaryColor  " />
        </Button>
      </div>

      <div className="flex gap-8 mt-2 flex-wrap  justify-center">
        {/* menu */}
        <div
          className="flex flex-col   bg-white dark:bg-darkCardColor 
        rounded-md  w-full lg:min-w-[400px] lg:max-w-[400px]"
        >
          {settingsMenuItem.length > 0 &&
            settingsMenuItem.map((item) => {
              if (!item) return null;
              return (
                <SettingMenuItem
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
        </div>
        {/* content */}
        <div
          className="flex flex-1 flex-col p-4 bg-white dark:bg-darkCardColor 
        rounded-md  min-w-[370px] w-full justify-between"
        >
          <SectionTitle title={"Products Management"}>
            <Select defaultValue="Mange Gategories">
              <SelectTrigger className="w-[200px] bg-lightBgColor dark:bg-darkCardColor">
                <SlidersHorizontal size={16} />
                <SelectValue placeholder="select" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="Mange Gategories">
                  Mange Gategories
                </SelectItem>
                <SelectItem value="Dine t">Mange Gategories</SelectItem>
                <SelectItem value="Dine y">Mange Gategories</SelectItem>
              </SelectContent>
            </Select>
          </SectionTitle>
          <Tabs />
          {/* foods */}

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-2
           gap-4 h-[495px] overflow-y-scroll px-1>
          "
          >
            <AddDish />
            {foods.map((dish, index) => {
              return <DishCard key={dish.title} dish={dish} index={index} />;
            })}
          </div>

          {/* btns */}

          <div className="flex gap-x-4 w-full p-4 bg-lightBgColor dark:bg-darkBgColor shadow-md">
            <Button
              variant={"ghost"}
              className="border border-primaryColor text-primaryColor py-5 my-4 hover:bg-primaryColor hover:text-white"
            >
              DiscardChanges
            </Button>
            <Button
              variant={"ghost"}
              className="bg-primaryColor text-white py-5 my-4 hover:bg-primaryColor hover:text-white"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SettingsPage;
