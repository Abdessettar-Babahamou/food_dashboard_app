"use client";
import React from "react";
import {  X } from "lucide-react";
import CartItem from "./cart-item";
import { cartItems } from "@/lib/constants";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useSideBar } from "@/context/side-bar-context";
import { motion } from "framer-motion";

function CartModel() {
  const { isOpen, setIsOpen, setPayementModelIsOpen } = useSideBar();

  return (
    <motion.div
    initial={{  opacity: 0 }}
    animate={{  opacity: 1 }}
    transition={{ duration: 0.4 }}

      className={cn(
        `flex flex-col justify-between overflow-y-scroll 
        px-8 py-6 pb-10 bg-white dark:bg-darkCardColor w-screen md:w-[470px] fixed  h-screen right-0 xl:translate-x-0 transition-all ease-in-out`,
        { "translate-x-full": !isOpen },
        { "translate-x-0": isOpen }
      )}
    >
      {/* heder */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Orders #34562</h3>
        <X className="cursor-pointer flex xl:hidden" onClick={() => setIsOpen(false)}/>
        </div>
        {/* options */}
        <div className="flex gap-2">
          <span
            className="px-4 py-2 bg-primaryColor
           text-white text-sm font-semibold rounded-md
           "
          >
            Drine In
          </span>
          <span
            className="px-4 py-2 border border-darkBorderColor
           text-primaryColor text-sm  rounded-md
           "
          >
            To Go
          </span>
          <span
            className="px-4 py-2 border border-darkBorderColor
           text-primaryColor text-sm  rounded-md
           "
          >
            Delivery
          </span>
        </div>
      </div>
      {/* cart items header */}
      <div
        className="flex items-center gap-x-8 mt-4 pb-4
      justify-between w-full border-b border-lightBgColor dark:border-darkBorderColor
      
      "
      >
        <div className="flex flex-1 items-center justify-between">
          <h2 className="text-lg">Item</h2>
          <h2 className="text-lg w-12">QTy</h2>
        </div>
        <h2 className="text-lg">Price</h2>
      </div>

      {/* items */}
      <div className="flex flex-col gap-y-6 flex-1 py-4 ">
        {cartItems.map((food) => (
          <CartItem
            key={food.title}
            title={food.title}
            description={food.decription}
            image_url={food.imageçurl}
            price={food.price}
            qty={food.qty}
          />
        ))}
      </div>
      {/* footers */}

      <div className="flex flex-col mb-4  gap-4 py-4 border-t border-t-lightBgColor dark:border-t-darkBorderColor">
        <div className="flex items-center justify-between">
          <span className="text-sm dark:text-darkDescriptionColor">Discount</span>
          <span className="text-sm ">$0</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm dark:text-darkDescriptionColor">Sub total</span>
          <span className="text-sm ">$200</span>
        </div>
        <Button className="bg-primaryColor py-6  text-white " 
        onClick={()=>{setPayementModelIsOpen(true)}}
        >
          Continue To Payment
        </Button>
      </div>
    </motion.div>
  );
}

export default CartModel;
