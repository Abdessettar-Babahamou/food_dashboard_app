import { cn } from "@/lib/utils";
import React from "react";
import { useSideBar } from "@/context/side-bar-context";
import PaymentSideBar from "./payment-side-bar";
import CartSideBarConfirmation from "./cart-side-bar-confirmation";

function CartPaymentModel() {
  const { payementModelIsOpen } = useSideBar();

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 bottom-0 hidden  bg-black/40  z-50  justify-end",
        {
          flex: payementModelIsOpen,
        }
      )}
    >
      <div
        className={cn(
          "flex justify-end w-full flex-wrap overflow-y-scroll transition-all ease-in-out duration-500 delay-1000",
          { "translate-x-full": !payementModelIsOpen },
          { "translate-x-0": payementModelIsOpen }
        )}
      >
        {/* cart Model */}
        <CartSideBarConfirmation />
        {/* payment Side Bar */}
        <PaymentSideBar />
      </div>
    </div>
  );
}

export default CartPaymentModel;
