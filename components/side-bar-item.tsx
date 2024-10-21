"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

function SideBarItem({
  link,
}: {
  link: { title: string; url: string; icon: LucideIcon };
}) {
  const pathName = usePathname();

  return (
    <div
      className={cn(`flex  p-3 rounded-l-sm relative w-full   `, {
        "bg-lightBgColor dark:bg-darkBgColor": link.url == pathName,
      })}
    >
      {link.url == pathName && (
        <>
          <div
            className=" w-6 h-6 bg-transparent absolute 
              right-0 -top-6 rounded-br-[20px] shadow-side-bar-item dark:shadow-side-bar-item-dark
               
              "
          />
          <div
            className=" w-6 h-6 bg-transparent absolute 
              right-0 -bottom-6 rounded-tr-[20px] shadow-side-bar-item-bottom dark:shadow-side-bar-item-bottom-dark
               
              "
          />
        </>
      )}

      <Link href={link.url}>
        <Button
          className={cn(
            ` flex  items-center w-14 h-14 gap-4 
        justify-start rounded-md`,
            {
              "bg-primaryColor text-white hover:text-white hover:bg-primaryColor/90":
                pathName === link.url,
            }
          )}
          variant={"ghost"}
        >
          <link.icon className={cn(`text-primaryColor`,
            {
                'text-white':pathName === link.url,
            }
          )} />
        </Button>
      </Link>
    </div>
  );
}

export default SideBarItem;
