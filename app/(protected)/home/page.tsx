import Foods from "@/components/foods";
import Header from "@/components/header";
import Tabs from "@/components/tabs";
import React from "react";

function Home() {
  return (
    <div className="flex flex-col mt-2 space-y-6 ">
       <Header/>
      <Tabs />
      {/* foods */}
      <Foods />
    </div>
  );
}

export default Home;
