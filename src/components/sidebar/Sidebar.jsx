import React, { useState } from "react";
import InfoBox from "./InfoBox";
import Navigation from "./Navigation";
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="h-screen w-70 bg-white shadow-lg  py-6 px-4 border-r border-gray-200 relative">
      <IoMdClose className="absolute right-5 top-2" onClick={()=> setShowSidebar(false)}/>
      {showSidebar && (
        <div className=" h-screen flex flex-col justify-between items-center">
          <InfoBox showName={false} />
          <Navigation />
          <InfoBox />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
