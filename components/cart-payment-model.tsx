import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./ui/button";
import {  Plus, SlidersHorizontal } from "lucide-react";
import TitleWithDescription from "./Title-description";
import { cartItems } from "@/lib/constants";
import CartItem from "./cart-item";
import PaymentMethod from "./payment-method";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useSideBar } from "@/context/side-bar-context";

function CartPaymentModel() {
  const { payementModelIsOpen, setPayementModelIsOpen } = useSideBar();

  return (
    <div
      className={cn('fixed top-0 left-0 right-0 bottom-0 hidden  bg-black/40  z-50  justify-end',{
        'flex' :payementModelIsOpen
      })} 
     
    >
      <div
        className={cn(
          "flex justify-end w-full flex-wrap overflow-y-scroll transition-all ease-in-out duration-500 delay-1000",
          { "translate-x-full": !payementModelIsOpen },
          { "translate-x-0": payementModelIsOpen }
        )}
      >
        {/* cart Model */}
        <div
          className={cn(
            `flex flex-col justify-between  px-3 md:px-8 py-6 pb-10 bg-white dark:bg-darkCardColor
         w-full md:w-[450px]   ease-in-out`
          )}
        >
          {/* card header */}
          <div className="flex items-center justify-between relative">
            <TitleWithDescription
              title={"Confirmation"}
              description={"Orders #34562"}
            />
            <Button className="w-12 h-12 p-0 rounded-md bg-primaryColor text-white">
              <Plus size={25} className="text-4xl " />
            </Button>
            {/* <MoveLeft size={28} className="absolute -top-6"/> */}
          </div>
          <span className="w-full h-[1px] bg-lightBgColor dark:bg-darkDescriptionColor my-4"></span>
          {/* card items */}
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

          {/* footer */}
          <div className="flex flex-col mb-4  gap-4 py-4 border-t border-t-lightBgColor dark:border-t-darkBorderColor">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-darkDescriptionColor">
                Discount
              </span>
              <span className="text-sm ">$0</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-darkDescriptionColor">
                Sub total
              </span>
              <span className="text-sm ">$200</span>
            </div>
          </div>
        </div>

        {/* paymeny Model */}
        <div
          className={cn(
            `flex flex-col justify-between  px-3 md:px-8 py-6 pb-10 bg-lightBgColor dark:bg-darkCardColor
          w-full md:w-[450px]   ease-in-out 
         border-t md:border-t-0 md:border-l border-lightBgColor dark:border-darkBorderColor
         `,
          )}
        >
          {/* card header */}
          <div className="flex items-center justify-between">
            <TitleWithDescription
              title={"Payment"}
              description={"3 payment method available"}
            />
          </div>
          <span className="w-full h-[1px] bg-white dark:bg-darkDescriptionColor my-4" />
          <div className="flex flex-col gap-y-6 flex-1 py-2 ">
            {/* payment Method */}
            <PaymentMethod />

            {/* forms */}
            <form className="flex flex-col gap-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="Cardholder">Cardholder Name</Label>
                <Input
                  type="text"
                  id="Cardholder"
                  placeholder="Levi Ackerman"
                  className="
              bg-white dark:bg-blackBase !py-6
              "
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="CardNumber">Card Number</Label>
                <Input
                  type="text"
                  id="CardNumber"
                  placeholder="2564 1421 0897 1244"
                  className="
              bg-white dark:bg-blackBase !py-6
              "
                />
              </div>
              <div className="flex gap-x-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="ExpirationDate">Expiration Date</Label>
                  <Input
                    type="text"
                    id="ExpirationDate"
                    placeholder="02/2022"
                    className="
              bg-white dark:bg-blackBase !py-6
              "
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="CVV">CVV</Label>
                  <Input
                    type="password"
                    id="CVV"
                    placeholder="****"
                    value={"123"}
                    className="
              bg-white dark:bg-blackBase !py-6
              "
                  />
                </div>
              </div>
              <span className="w-full h-[1px] bg-white dark:bg-darkDescriptionColor my-4" />

              <div className="flex">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="ExpirationDate">Order Type</Label>
                  <Select defaultValue="Dine In">
                    <SelectTrigger className="w-[150px] py-6 bg-white dark:bg-blackBase">
                      <SlidersHorizontal size={16} />
                      <SelectValue placeholder="select" />
                    </SelectTrigger>
                    <SelectContent className="">
                      <SelectItem value="Dine In">Dine In</SelectItem>
                      <SelectItem value="Dine t">Mange Gategories</SelectItem>
                      <SelectItem value="Dine y">Mange Gategories</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="Table no.">Table no.</Label>
                  <Input
                    type="text"
                    id="Table no."
                    placeholder="****"
                    value={"140"}
                    className="
              bg-white dark:bg-blackBase !py-6
              "
                  />
                </div>
              </div>
              <div className="flex gap-x-4 w-full   ">
                <Button
                  variant={"ghost"}
                  type="button"
                  className="border w-full border-primaryColor text-primaryColor py-5 bg-white hover:bg-primaryColor hover:text-white"
                  onClick={() => setPayementModelIsOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant={"ghost"}
                  className="bg-primaryColor w-full text-white py-5  hover:bg-primaryColor hover:text-white"
                   type="button"
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPaymentModel;
