"use client"
import { useEffect, useContext, useState} from "react"
import logo from "@/public/assets/icons/logo.svg"
import { BiX, BiMenuAltRight } from "react-icons/bi"; 

// next image 
import Image from "next/image"

// react scroll
import { Link } from "react-scroll"

// search mobile 
import SearchMobile from "../search/SearchMobile"

// responsive 
import { useMediaQuery } from "react-responsive"
import { SearchContext } from "@/app/context/search";


export default function Header() {
  const [header, setHeader ] = useState(false);
  const [nav, setNav ] = useState(false);
  const { setSearchActive } = useContext(SearchContext);


 const desktopMode  = useMediaQuery({
   query : '(min-width : 1300px)',
 });

 useEffect(() => {
  const handleScroll = () => {
    // header 
    if (window.scrollY > 40) {
      setHeader(true);
    }else{
      setHeader(false);
    };

    // search 
    if (window.scrollY > 800) {
      setSearchActive(true);
    }else{
      setSearchActive(false);
    }




  }; 
 
 window.addEventListener('scroll', handleScroll);

 // remove event listener 
 return () => {
  window.removeEventListener('scroll', handleScroll); 
 }

 });



  return (
    <header className={` ${header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"} fixed w-full max-w-[1920px] shadow mx-auto transition-all duration-300 z-30 `}>
    <div className="xl:container  mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between px-4">
       <div className="flex  justify-between items-center ">
         {/* logo */}  
            <Link to="home" smooth={desktopMode} spy={true} className="cursor-pointer ">
               <Image src={logo} alt="logo" className="w-[180px] h-[60px]"/> 
           </Link>
         {/* mobile menu */}
         <div className="cursor-pointer xl:hidden" onClick={() => setNav(!nav)}>
            { nav ? <BiX className="text-4xl"/> : <BiMenuAltRight className="text-4xl"/> }    
         </div>
       </div>

        {/* main nav menu */}
          <nav className={` ${nav ?  "max-h-max py-8 xl:py-0 xl:px-0 " : "max-h-0 xl:max-h-max " } flex flex-col w-full bg-white gap-y-6 overflow-hidden xl:flex-row xl:w-max xl:gap-x-6 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase xl:text-sm xl:font-medium xl:normal-case ` }>
            <Link  className="cursor-pointer text-md font-semibold " to="home" activeClass="active" smooth={desktopMode} spy={true} > 
               Home 
            </Link>
            <Link  className="cursor-pointer text-md font-semibold " to="car" activeClass="active" smooth={desktopMode} spy={true} > 
               Cars 
            </Link>
            <Link  className="cursor-pointer text-md font-semibold " to="about" activeClass="active" smooth={desktopMode} spy={true} > 
               About
            </Link>
            <Link  className="cursor-pointer text-md font-semibold " to="why" activeClass="active" smooth={desktopMode} spy={true} > 
               Why Us
            </Link>
            <Link  className="cursor-pointer text-md font-semibold " to="testimonial" activeClass="active" smooth={desktopMode} spy={true} > 
               Testimonial 
            </Link>
            <Link  className="cursor-pointer text-md font-semibold " to="contact" activeClass="active" smooth={desktopMode} spy={true} > 
               Contact
            </Link>
            <Link  className="cursor-pointer text-md font-semibold xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto " to="/" activeClass="active" smooth={desktopMode} spy={true} > 
               See All Cars 
            </Link>
            <SearchMobile /> 
          </nav>
    </div>
    </header>
  )
}






