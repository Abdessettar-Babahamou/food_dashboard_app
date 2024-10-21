import { cn } from "@/lib/utils";
import { CircleCheck, CreditCardIcon } from "lucide-react";
import React, { useState } from "react";
import { FaPaypal } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";

const paymentMethod = [
  {
    name: "Credit Card",
    icon: CreditCardIcon,
  },
  {
    name: "Paypal",
    icon: FaPaypal,
  },
  {
    name: "Cash",
    icon: BsCashCoin,
  },
];

function PaymentMethod() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col gap-y-2 ">
      <h2 className="text-xl font-semibold text-lightTitleColor dark:dark:text-white">
        Payment Method
        <div className=" flex gap-x-2 my-4">
          {paymentMethod.map((item, index) => {
            return (
              <div
                key={item.name}
                className={cn(
                  `flex flex-col items-center transition-all ease-in-out
  justify-center gap-1 px-8 py-4     cursor-pointer
  rounded-md relative border border-white dark:border-darkBorderColor`,
                  { " dark:border-white bg-white dark:bg-blackBase": activeIndex === index }
                )}

                onClick={()=>setActiveIndex(index)}
              >
                <item.icon />
                <span className="text-[14px]">{item.name}</span>
                {activeIndex === index && (
                  <CircleCheck className="text-primaryColor absolute top-2 right-2" />
                )}
              </div>
            );
          })}
        </div>
      </h2>
    </div>
  );
}

export default PaymentMethod;
