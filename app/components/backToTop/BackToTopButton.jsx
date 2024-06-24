"use client"

import { useEffect, useState } from "react"

// react icons 
import { FaChevronUp } from "react-icons/fa";

// react scroll
import { Link } from "react-scroll";

export default function BackToTopButton() {
  const [isActive, setIsActive ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // header 
      if (window.scrollY > 400) {
        setIsActive(true);
      }else{
        setIsActive(false);
      };
  
    }; 
   
   window.addEventListener('scroll', handleScroll);
  
   // remove event listener 
   return () => {
    window.removeEventListener('scroll', handleScroll); 
   }
  
   });
  

  return (
    <Link
    to="home"
    smooth={true}

     className={` ${!isActive && "hidden" } fixed bg-accent hover:bg-accent-hover h-12 w-12 right-16 bottom-11 z-10 cursor-pointer flex justify-center items-center text-white  border-2 border-white `} >
       <FaChevronUp className="text-xl"/> 
    </Link>
  )
}


















