import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SectionTitle from "./section-title";
import FoodItem from "./food-item";
import { foods } from "@/lib/constants";


function Foods() {
  return (
    <div className="flex flex-col space-y-20">
      {/* title section */} 
      <SectionTitle title="Choose Dishes">
        <Select defaultValue="Dine In">
          <SelectTrigger className="w-[100px] bg-white dark:bg-darkCardColor">
            <SelectValue placeholder="select" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectItem value="Dine In">Dine In</SelectItem>
            <SelectItem value="Dine t">Dine In</SelectItem>
            <SelectItem value="Dine y">Dine In</SelectItem>
          </SelectContent>
        </Select>
      </SectionTitle>
      {/* foods */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-20">
        {foods.map((food,index) => (
          <FoodItem
            key={food.title}
            title={food.title}
            description={food.decription}
            image_url={food.imageçurl}
            price={food.price} index={index}          />
        ))}
      </div>
    </div>
  );
}

export default Foods;
