"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface FoodItemProps {
  title: string;
  description: string;
  image_url: string;
  price: number;
  index: number;
}
function FoodItem({
  title,
  description,
  price,
  image_url,
  index,
}: FoodItemProps) {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 + 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col space-y-2  items-center justify-center
     p-8 bg-white dark:bg-darkCardColor rounded-lg cursor-pointer"
    >
      <Image
        src={image_url}
        width={130}
        height={130}
        alt=""
        className="-mt-20"
      />
      <h2 className="text-center"> {title} </h2>
      <h4 className="text-center "> {price}</h4>
      <h5 className="text-center text-lightDescriptionColor">{description}</h5>
    </motion.div>
  );
}

export default FoodItem;
