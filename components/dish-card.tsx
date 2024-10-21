import { Edit } from "lucide-react";
import Image from "next/image";
 import { motion } from "framer-motion";

interface DishCardProps {
  title: string;
  decription: string;
  imageçurl: string;
  price: number;
}

function DishCard({ dish ,index }: { dish: DishCardProps,index:number }) {
  return (
    <motion.div
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay: index * 0.05 + 0.5 }}
    viewport={{ once: true }}

      className="flex flex-col   min-h-[300px] border rounded-sm
     border-lightBgColor dark:border-darkBorderColor
      items-center justify-between 
    "
    >
      <div className="flex flex-1 flex-col p-4 gap-y-2 items-center justify-center ">
        <Image
          src={dish.imageçurl}
          width={130}
          height={130}
          alt=""
          className=""
        />
        <h2 className="text-center text-[14px]"> {dish.title} </h2>
        <h5 className="text-center text-lightDescriptionColor dark:text-darkDescriptionColor">
          $ {dish.price} / 20 Bowls
        </h5>
      </div>
      <div
        className="flex w-full bg-primaryColor/50 p-4 
      justify-center items-center gap-x-4 text-primaryColor cursor-pointer"
      >
        <Edit />
        <span className=""> Edit Dish</span>
      </div>
    </motion.div>
  );
}

export default DishCard;
