"use client"

import { useContext } from "react";
import { SearchContext } from "@/app/context/search";
import google from "@/public/assets/icons/buttons/google-play.svg";
import app from "@/public/assets/icons/buttons/app-store.svg";
import car from "@/public/assets/images/hero/car.svg";

import Search from "../search/Search";
import Image from "next/image";

// motion
import { motion, easeInOut } from "framer-motion";

import { fadeIn } from "@/varient/varient";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);

  return (
    <section className="h-screen xl:h-[98vh] bg-[#b2b7c2]/10  " id="home">
      <div className="container mx-auto h-full xl:pt-10 ">
        {/* banner image & text  */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full ">
           <div className="text-center xl:max-w-2xl xl:text-left mt-16 xl:mt-0 ">
              <motion.h1
                  variants={fadeIn('down', 0.2)} 
                  initial="hidden" 
                  whileInView={"show"} 
                  viewport={{once : false, amount : 0.6 }} 
                  className="h1"> Explore The Finest 
                  <span className="text-accent"> Global</span>
                    Offers 
                </motion.h1>
              <motion.p
                 variants={fadeIn('down', 0.4)} 
                 initial="hidden" 
                 whileInView={"show"} 
                 viewport={{once : false, amount : 0.6 }} 
               className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10 "> Find your ideal ride for any adventure with our diverse range of affordable and dependable our rentals </motion.p>
              <motion.div
                variants={fadeIn('down', 0.6)} 
                initial="hidden" 
                whileInView={"show"} 
                viewport={{once : false, amount : 0.8 }} 
              className="flex gap-x-3 justify-center xl:justify-start ">
                {/* google btn */}
                <button className="btn-cta">
                  <Image src={google} alt="google" className="w-[132px] h-[36px]"/> 
                </button>
                {/* app btn  */}
                <button className="btn-cta">
                  <Image src={app} alt="app" className="w-[132px] h-[36px]"/> 
                </button>    
              </motion.div>
           </div>

           <motion.div
            variants={fadeIn('up', 0.6)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once : false, amount : 0.6 }}
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[10px] min-[1680px]:right-[120px]  xl:top-46 ">
             <Image src={car} fill alt="car" style={{objectFit : "contain "}} priority />
           </motion.div>

        </div>
      </div>
      {
        searchActive
         ?
         <motion.div 
         initial = {{ y: '-100%'}}
         animate = {{y: 0}}
         transition={{ ease : easeInOut }}
         className="fixed top-[80px] z-10 w-full max-w-[1920px] ">
             <Search /> 
         </motion.div> 
        : 
        <div className="-mt-12 w-full mx-auto max-w-[1300px] "> 
         <motion.div 
            variants={fadeIn('up', 0.8)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once : false, amount : 0.2 }}
         >
             <Search /> 
         </motion.div> 
        </div>
      }
 
    </section>
  )
}
