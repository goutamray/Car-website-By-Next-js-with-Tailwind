"use client"

import phone from "@/public/assets/images/cta/phone.svg"
import google from "@/public/assets/icons/buttons/google-play.svg"
import apple from "@/public/assets/icons/buttons/app-store.svg"

// next image 
import Image from "next/image";

// framer motion
import { motion } from "framer-motion";

// varients
import { fadeIn } from "@/varient/varient"; 




export default function Cta() {
  return (
    <section className="pt-24 xl:pt-48 flex items-end pb-0 overflow-hidden  " id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center ">
          {/* text */}
          <div className="flex xl:ml-24 text-center md:text-left mb-12 md:mb-0 ">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none ">
              <motion.h2
              variants={fadeIn('right', 0.2)} 
              initial="hidden" 
              whileInView={"show"} 
              viewport={{once : false, amount : 0.6 }}
              className="h2"> Download our App now and hit the road with easy. </motion.h2>
              <motion.p
                variants={fadeIn('right', 0.4)} 
                initial="hidden" 
                whileInView={"show"} 
                viewport={{once : false, amount : 0.8 }}
              className="mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ipsum inventore id reiciendis saepe. Obcaecati doloremque asperiores nesciunt iure dolorum.</motion.p>
              <motion.div 
              variants={fadeIn('right', 0.6)} 
              initial="hidden" 
              whileInView={"show"} 
              viewport={{once : false, amount : 0.6 }}
              className="flex gap-x-3 justify-center md:justify-start ">
                <button className="btn-cta"> 
                  <Image  src={google} alt="google" height={36} width={132}/>
                </button>
                <button className="btn-cta"> 
                  <Image src={apple} alt="apple" height={36} width={132}/>
                </button>
              </motion.div>
            </div>
          </div>

          {/* image */} 
          <motion.div
            variants={fadeIn('left', 0.8)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once : false, amount : 0.2 }}
           className="flex flex-1 justify-center order-1 md:order-none ">
           <Image src={phone} alt="phone" width={320} height={640} /> 
          </motion.div>      
        </div>
      </div>
    </section>
  )
}






















