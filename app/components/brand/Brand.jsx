"use client"

// image 
import Image from "next/image";

// framer 
import { motion } from "framer-motion";

// varient 
import { fadeIn } from "@/varient/varient";

import brand from "@/public/assets/icons/brands/ford.svg"; 
import marce from "@/public/assets/icons/brands/mercedes.svg"; 
import audi from "@/public/assets/icons/brands/audi.svg"; 
import bmw from "@/public/assets/icons/brands/bmw.svg"; 
import vw from "@/public/assets/icons/brands/vw.svg"; 
import skoda from "@/public/assets/icons/brands/skoda.svg"; 
import mazda from "@/public/assets/icons/brands/mazda.svg"; 

export default function Brand() {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center ">
       <motion.div
        variants={fadeIn('up', 0.4)} 
        initial="hidden" 
        whileInView={"show"} 
        viewport={{once : false, amount : 0.6 }}
        className="container mx-auto"> 
          <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap gap-x-6 xl:justify-between ">
              <div>
                <Image src={brand} alt="brand" className="w-[85px] h-[32px] "/>
              </div>
              <div>
                <Image src={marce} alt="brand" className="w-[60px] h-[60px] "/>
              </div>
              <div>
                <Image src={audi} alt="brand" className="w-[85px] h-[40px] "/>
              </div>
              <div>
                <Image src={bmw} alt="brand" className="w-[60px] h-[60px] "/>
              </div>
              <div>
                <Image src={vw} alt="brand" className="w-[60px] h-[60px] "/>
              </div>
              <div>
                <Image src={skoda} alt="brand" className="w-[60px] h-[60px] "/>
              </div>
              <div>
                <Image src={mazda} alt="brand" className="w-[62px] h-[50px] "/>
              </div>
          </div>
       </motion.div>
    </section>
  )
}
