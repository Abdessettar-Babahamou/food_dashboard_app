import { LucideIcon } from "lucide-react";
import React from "react";

interface SettingMenuItemProps{
    icon:LucideIcon,
    title:string,
    description:string
}

function SettingMenuItem({title,description,icon}:SettingMenuItemProps) {
    const Icon=icon;
  return (
    <div className="flex gap-x-4 mt-8  px-8 py-4">
      <Icon />
      <div className="flex flex-col gap-1">
        <h4 className="text-sm"> {title} </h4>
        <span className="text-sm text-lightDescriptionColor dark:text-darkDescriptionColor">
          {description}
        </span>
      </div>
    </div>
  );
}

export default SettingMenuItem;
