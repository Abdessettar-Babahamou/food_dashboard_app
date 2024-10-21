import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { Trash } from "lucide-react";

interface FoodItemProps {
  title: string;
  description?: string;
  image_url: string;
  price: number;
  qty: number;
}

function CartItem({ title, image_url, price, qty }: FoodItemProps) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex    items-center justify-between">
        <div className="flex  first-letter: flex-1">
          <Image src={image_url} width={45} height={45} alt="" />
          <div className="flex flex-1 ml-2 mr-8    justify-between">
            <div className="flex flex-col">
              <h2 className="text-sm   ">{title}</h2>
              <span className="text-[12px] text-lightDescriptionColor dark:text-darkDescriptionColor">
                ${price}
              </span>
            </div>
            <span
              className="flex items-center ml-8 justify-center w-12 h-12 bg-lightBgColor dark:bg-darkBgColor rounded-md text-lg
      "
            >
              {qty}
            </span>
          </div>
        </div>
        <h2 className="text-lg w-12">${qty * price}</h2>
      </div>
      <div className="flex justify-between gap-x-8">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Search for food,coofe,etc..."
            className="bg-lightBgColor dark:bg-darkBgColor border-none 
          shadow-none py-6"
          />
        </div>
        <span
          className="flex items-center justify-center w-12 h-12 border border-primaryColor  
      rounded-md text-lg
      
      "
        >
          <Trash className="text-primaryColor" />
        </span>
      </div>
    </div>
  );
}

export default CartItem;
