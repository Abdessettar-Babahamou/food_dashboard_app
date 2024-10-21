import React from "react";


interface TitleWithDescriptionProps{
    title:string,
    description:string
}

function TitleWithDescription({title,description}:TitleWithDescriptionProps) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-xl font-semibold text-lightTitleColor dark:dark:text-white">
        {title}
      </h2>
      <span className="text-base text-lightDescriptionColor dark:text-darkDescriptionColor">
        {description}
      </span>
    </div>
  );
}

export default TitleWithDescription;
