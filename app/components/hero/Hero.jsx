"use client"

import { useContext } from "react"
import Search from "../search/Search"
import { SearchContext } from "@/app/context/search"

export default function Hero() {
  const { searchActive } = useContext(SearchContext);



  return (
    <section className="h-screen xl:h-[98vh] bg-[#b2b7c2]/10  " id="home">
      <div className="container mx-auto h-full xl:pt-10 ">
           Hero container 
      </div>
      {
        searchActive
         ?
         <div className="fixed top-[80px] z-10 w-full max-w-[1920px] ">
             <Search /> 
         </div> 
        : 
         <div className="-mt-12 w-full mx-auto max-w-[1300px]  ">
             <Search /> 
         </div> 
      }
 
    </section>
  )
}
