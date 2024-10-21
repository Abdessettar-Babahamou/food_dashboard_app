import { Plus } from "lucide-react";
import React from "react";

function AddDish() {
  return (
    <div
      className="flex flex-col p-4 min-h-[300px] border rounded-sm
   border-dashed  border-primaryColor items-center justify-center
   
   "
    >
      <Plus size={30} className="text-primaryColor" />

      <h2 className="text-lg text-primaryColor font-semibold">Add new dish</h2>
    </div>
  );
}

export default AddDish;
