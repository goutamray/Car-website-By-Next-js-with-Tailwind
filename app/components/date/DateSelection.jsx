"use client "

import { useState } from "react";

// headless ui 
import { Menu, MenuButton, MenuItems } from "@headlessui/react";

// react icons 
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6"; 

// react date 
import { DateRange } from "react-date-range";
import { format, addDays } from "date-fns";

// date range css 
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file 

export default function DateSelection() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  return (
    <Menu as='div' className="w-full h-full flex xl:flex-row ">
      <div className="relative flex-1 ">
         {/* btn  */}
         <MenuButton className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-center xl:pl-8"> 
              <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0  "> 
                    <FaCalendarAlt className="text-accent"/>
                    <div className="text-[15px] uppercase font-bold "> Select Date </div>
                </div>
                <div className="flex items-center gap-x-3 xl:ml-6">
                  <div className="text-[13px] font-medium text-secondary "> {format(date[0].startDate, "dd/MM/yyy")}</div>
                  <FaArrowRightLong className="text-accent text-[13px]"/>
                  <div className="text-[13px] font-medium text-secondary " >
                    {
                      date[0].endDate ? 
                       (<div>  {format(date[0].endDate, "dd/MM/yyy")} </div>)  : 
                       (<div> {format(date[0].startDate, "dd/MM/yyy")}  </div>)
                    }
                  </div>
                </div>
           </MenuButton>

         {/* date */}
         <MenuItems className="dropdown-menu shadow-lg absolute -top-96 xl:top-[98px] left-1/2 xl:left-0 z-60 transform -translate-x-1/2 xl:translate-x-0 text-center text-sm xl:text-left w-full bg-white max-w-[332px] rounded-[10px] overflow-hidden 
         "> 
         <DateRange 
         onChange={item => setDate([item.selection])}
         editableDateInputs={true} 
         moveRangeOnFirstSelection={false} 
         ranges={date} 
         rangeColors={['#ed1d24']}
         minDate={addDays(new Date(), 0)}
         />
 
          </MenuItems>
      </div>
    </Menu>
  )
}



