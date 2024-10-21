import { CardType } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  CircleArrowDown,
  CircleArrowUp,
   LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

interface OrderCardProps {
  precentage: string;
  amount: string;
  description: string;
  icon: LucideIcon;
  type: CardType;
   
}

function OrderCardItem({ order ,index }: { order: OrderCardProps,index:number }) {
  return (
    <motion.div
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay: index * 0.05 + 0.5 }}
    className="flex p-4 flex-col gap-4 bg-white dark:bg-darkCardColor rounded-md">
      <div className="flex items-center gap-x-2 ">
        <span className="flex items-center justify-center w-8 h-8 bg-lightBgColor dark:bg-darkBgColor rounded-md">
          <order.icon
            size={20}
            className={cn(`  text-sm text-pinkColor`, {
              "text-accentOrange": order.type === CardType.ORDERD,
              "text-accentBlue": order.type === CardType.CUSTOMER,
            })}
          />
        </span>
        <span
          className={cn(`text-accentGreen text-sm`, {
            "text-accentRed": order.type === CardType.ORDERD,
          })}
        >
          {order.precentage}
        </span>
        {order.type === CardType.ORDERD ? (
          <CircleArrowDown className="text-accentRed" />
        ) : (
          <CircleArrowUp className="text-accentGreen" />
        )}
      </div>
      <h2 className="text-3xl font-semibold">{order.amount}</h2>
      <span className=" text-lightDescriptionColor dark:text-darkDescriptionColor">
        {order.description}
      </span>
    </motion.div>
  );
}

export default OrderCardItem;
