"use client"

import { SearchContext } from "@/app/context/search"
import { useContext } from "react"
import LocationSelection from "../date/LocationSelection";
import DateSelection from "../date/DateSelection";
import HourSelection from "../date/HourSelection";



export default function Search() {
  const { searchActive } = useContext(SearchContext);

  return (
    <div className={ `${searchActive ? 
     "bg-white rounded-none max-h-[80px]" :
     "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[108px]" } hidden xl:block w-full relative shadow-lg ` }>
      <div className={`flex h-full ${searchActive && "container mx-auto xl:py-3"}`} >
      <LocationSelection /> 
      <DateSelection />
      <HourSelection />
      <div className="xl:h-full flex items-center px-6 xl:px-0 ">
        <button className={`${searchActive ?
           "btn btn-sm btn-accent xl:w-[164px]" : 
           "btn btn-lg btn-accent xl:w-[184px]"} `}> Search </button>
      </div>
      </div>
    </div>
  )
}



