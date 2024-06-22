"use client"

import { SearchContext } from "@/app/context/search"
import { useContext } from "react"
import LocationSelection from "../date/LocationSelection";
import DateSelection from "../date/DateSelection";



export default function Search() {
  const { searchActive } = useContext(SearchContext);

  return (
    <div className={ `${searchActive ? 
     "bg-white rounded-none max-h-[80px]" :
     "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[108px]" } hidden xl:block w-full relative shadow-lg ` }>
      <div className="xl:h-full flex items-center px-6 xl:px-0 xl:py-3" >
      <LocationSelection /> 
      <DateSelection />
      </div>
    </div>
  )
}



