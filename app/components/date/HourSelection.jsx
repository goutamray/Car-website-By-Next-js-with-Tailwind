"use client "

import { useState } from "react";

// headless ui 
import { Menu, MenuButton, MenuItems } from "@headlessui/react";

// react icons 
import { FaClock } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6"; 

// hours 
const hours = ["10:00 AM", "12:00 AM", "16:00 PM", "4:00 PM"]; 

export default function HourSelection() {
  const [hour, setHour ] = useState("10:00 AM");

  return (
    <Menu as='div' className="w-full h-full flex xl:flex-row ">
      <div className="relative flex-1 ">
         {/* btn  */}
         <MenuButton className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-center xl:pl-8"> 
         
              <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0  "> 
                    <FaClock className="text-accent"/>
                    <div className="text-[15px] uppercase font-bold "> Select Hour </div>
                </div>
                <div className="flex items-center justify-center gap-x-3 xl:ml-6" >
                  <div className="uppercase font-medium text-secondary text-[13px] xl:ml-6 "> {hour} </div>
                   <FaArrowRightLong className="text-accent text-[12px] "/> 
                   <div className="uppercase font-medium text-secondary text-[13px] ">  {hour}</div>
                </div>
              
           </MenuButton>

         {/* items */}
         <MenuItems className="dropdown-menu shadow-lg absolute -top-56 xl:top-[98px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:translate-x-0 text-center text-sm  w-full bg-white max-w-[332px] py-6 rounded-[10px]
         "> 
          {
            hours.map((hour, index) => {
              return <div key={index} onClick={() => setHour(hour)} className="cursor-pointer py-4  hover:bg-gray-50 text-[13px] "  >
                   {hour}
              </div>
            })
          }

          </MenuItems>
      </div>
    </Menu>
  )
}











