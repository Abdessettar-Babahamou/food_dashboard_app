import Image from "next/image";
import React from "react";

interface MostOrederItemProps {
  title: string;
  num_of_orderd: number;
  image_url: string;
}
function MostOrderItem({ title, num_of_orderd, image_url }: MostOrederItemProps) {
  return (
    <div className="flex gap-2 items-center mb-4">
      <Image src={image_url} width={54} height={54} alt=" " />
      <div className="flex flex-col gap-1">
        <h4 className="text-sm"> {title}</h4>
        <span className="text-sm text-lightDescriptionColor dark:text-darkDescriptionColor">
          {num_of_orderd} dishes ordered
        </span>
      </div>
    </div>
  );
}

export default MostOrderItem;
