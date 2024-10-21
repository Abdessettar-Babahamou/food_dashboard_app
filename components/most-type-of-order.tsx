import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SectionTitle from "./section-title";
import { OrderChart } from "./chart";

export default function MostTypeOfOrder() {
  return (
    <div className="flex flex-col p-4 bg-white dark:bg-darkCardColor rounded-md">
      <SectionTitle   title={"Most Type of Order"}>
        <Select defaultValue="Today">
          <SelectTrigger className="w-[100px] bg-lightBgColor dark:bg-darkCardColor">
            <SelectValue placeholder="select" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectItem value="Today">Today</SelectItem>
            <SelectItem value="Today1">Today</SelectItem>
            <SelectItem value="Today2">Today</SelectItem>
          </SelectContent>
        </Select>
      </SectionTitle>
      <span className="w-full h-[1px] my-4 bg-lightBgColor dark:bg-darkBorderColor"></span>
      <div className="flex ">
        <OrderChart />
        <div className="flex flex-col flex-1 gap-4  justify-center p-4  ">
          <div className="flex gap-4">
            <span className="w-6 h-6 rounded-full bg-accentRed"></span>
            <div className="flex flex-col">
              <div className="flex flex-col gap-1">
                <h4 className="text-sm"> {'Dine In'}</h4>
                <span className="text-[12px] text-lightDescriptionColor dark:text-darkDescriptionColor">
                  {200} Customers
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="w-6 h-6 rounded-full bg-accentOrange"></span>
            <div className="flex flex-col">
              <div className="flex flex-col gap-1">
                <h4 className="text-sm"> {'To Go'}</h4>
                <span className="text-[12px] text-lightDescriptionColor dark:text-darkDescriptionColor">
                  {200} Customers
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="w-6 h-6 rounded-full bg-accentPurple"></span>
            <div className="flex flex-col">
              <div className="flex flex-col gap-1">
                <h4 className="text-sm"> {'Delivery'}</h4>
                <span className="text-[12px] text-lightDescriptionColor dark:text-darkDescriptionColor">
                  {200} Customers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
