import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import SectionTitle from "@/components/section-title";
   import MostOrderItem from "@/components/most-order-item";
  import { Button } from "@/components/ui/button";
  
function MostOrderd() {
  return (
    <div className="flex flex-col p-4 bg-white dark:bg-darkCardColor 
    rounded-md ">
      <SectionTitle title={"Most Ordered"}>
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
      <MostOrderItem
        title={"Spicy seasoned seafood noodles"}
        num_of_orderd={200}
        image_url={"/Image_1.png"}
      />
      <MostOrderItem
        title={"Spicy seasoned seafood noodles"}
        num_of_orderd={120}
        image_url={"/Image_2.png"}
      />
      <MostOrderItem
        title={"Spicy seasoned seafood noodles"}
        num_of_orderd={80}
        image_url={"/Image_3.png"}
      />
      <Button
        variant={"ghost"}
        className="border border-primaryColor text-primaryColor py-5 my-4 hover:bg-primaryColor"
      >
        View All
      </Button>
    </div>
  );
}

export default MostOrderd;
