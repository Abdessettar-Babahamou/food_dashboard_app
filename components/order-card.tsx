'use client';
import OrderCardItem from "./order-card-item";
import { orderStatus } from "@/lib/constants";

function OrderCard() {
  return (
    <div className="flex gap-x-4 mt-10 w-full">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 w-full">
        {orderStatus.map((item ,index) => {
          return <OrderCardItem order={item} key={item.description} index={index} />;
        })}
      </div>
    </div>
  );
}

export default OrderCard;
