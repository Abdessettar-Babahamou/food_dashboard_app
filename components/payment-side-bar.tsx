import { cn } from "@/lib/utils";
import TitleWithDescription from "./Title-description";
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
import { SlidersHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { useSideBar } from "@/context/side-bar-context";

function PaymentSideBar() {
  const { setPayementModelIsOpen } = useSideBar();

  return (
    <div
      className={cn(
        `flex flex-col justify-between  px-3 md:px-8 py-6 pb-10 bg-lightBgColor dark:bg-darkCardColor
            w-full md:w-[450px]   ease-in-out 
           border-t md:border-t-0 md:border-l border-lightBgColor dark:border-darkBorderColor
           `
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
  );
}

export default PaymentSideBar;
