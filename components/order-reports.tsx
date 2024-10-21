'use client';
import React from "react";
import SectionTitle from "./section-title";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
   TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { orderList, OrderStatus } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function OrderReports() {
  return (
    <motion.div
    initial={{  opacity: 0 }}
    animate={{  opacity: 1 }}
    transition={{ duration: 0.5, delay:  0.5 }}
    
    className=" flex flex-col gap-8 mt-4 bg-white dark:bg-darkCardColor rounded-md p-4">
      <SectionTitle title="Order Report">
        <Select defaultValue="Filtter Order">
          <SelectTrigger className="w-[200px] bg-lightBgColor dark:bg-darkCardColor">
            <SelectValue placeholder="select" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectItem value="Filtter Order">Filtter Order</SelectItem>
            <SelectItem value="Dine t">Dine In</SelectItem>
            <SelectItem value="Dine y">Dine In</SelectItem>
          </SelectContent>
        </Select>
      </SectionTitle>
      {/* table */}
      <Table>
        <TableHeader className="">
          <TableRow>
            <TableHead className="text-black dark:text-white ">
              Customer
            </TableHead>
            <TableHead className="text-black dark:text-white ">Menu</TableHead>
            <TableHead className="text-black dark:text-white ">
              Total Payment
            </TableHead>
            <TableHead className="text-black dark:text-white ">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderList.map((order) => {
            return (
              <TableRow key={order.name} className="">
                <TableCell className=" flex py-6 items-center gap-x-4 text-lightDescriptionColor dark:text-darkDescriptionColor">
                  <Image src={order.avatar} width={32} height={32} alt="" />
                  <span className="text-base">{order.name}</span>
                </TableCell>
                <TableCell className=" text-lightDescriptionColor dark:text-darkDescriptionColor">
                  {order.menu}
                </TableCell>
                <TableCell className=" text-lightDescriptionColor dark:text-darkDescriptionColor">
                  ${order.totalAmount}
                </TableCell>
                <TableCell className=" text-lightDescriptionColor dark:text-darkDescriptionColor">
                  <span
                    className={cn(`px-4 py-1 bg-accentGreen/60 rounded-full`, {
                      "bg-accentPurple/60":
                        order.status == OrderStatus.Preparing,
                      "bg-accentOrange/60": order.status == OrderStatus.Pending,
                    })}
                  >
                    {order.status}
                  </span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </motion.div>
  );
}

export default OrderReports;
