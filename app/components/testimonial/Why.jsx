"use client"
import carPhoto from "@/public/assets/images/why/car.svg"

// next image 
import Image from "next/image"

// framer motion
import { motion } from "framer-motion"

// varients
import { fadeIn } from "@/varient/varient"

// react icons 
import { MdHandshake , MdKey , MdTrendingUp } from "react-icons/md";

export default function Why() {
  return (
    <section className="section flex items-center mb-10" id="why">
      <div className="container mx-auto mb-5">
        <motion.h2 
        variants={fadeIn('up', 0.2)} 
        initial="hidden" 
        whileInView={"show"} 
        viewport={{once : false, amount : 0.8 }} 
        className="text-center h2"> Unmatched excellence and customer satisfication </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once : false, amount : 0.8 }} 
        className="text-center max-w-[680px] mx-auto mb-2"> Our dedication to providing exceptional services sets us a part from the competion. From the moment you engage with us, we strive to exceed your expection in every interaction </motion.p>
        {/* car  image  */}
        <motion.div
          variants={fadeIn('up', 0.4)} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once : false, amount : 0.8 }}
         className="hidden md:flex justify-center mb-6 xl:mb-2 ">
          <Image src={carPhoto} alt="car-photo" width={1064} height={420}/> 
        </motion.div>
        {/* grid items */}
        <motion.div
         variants={fadeIn('up', 0.8)} 
         initial="hidden" 
         whileInView={"show"} 
         viewport={{once : false, amount : 0.4 }}
        className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:space-y-0 xl:gap-x-[30px] ">
          {/* item 1 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0 ">
            <MdKey className="text-[38px] text-accent mb-4 "/>
            <h3 className="h3"> Rently simply and quickly. </h3>
            <p className="hidden xl:flex "> We prioritize your need and we go above and beyand to ensure your experience with us is nothing short of outstanding. </p>
          </div>

          {/* item 2 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0 ">
            <MdTrendingUp className="text-[38px] text-accent mb-4 "/>
            <h3 className="h3"> Modern & well maintained vehicles. </h3>
            <p className="hidden xl:flex "> We prioritize your need and we go above and beyand to ensure your experience with us is nothing short of outstanding. </p>
          </div>
          {/* item 3 */}

          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0 ">
            <MdHandshake className="text-[38px] text-accent mb-4 "/>
            <h3 className="h3"> Prompt and flexiable services</h3>
            <p className="hidden xl:flex "> We prioritize your need and we go above and beyand to ensure your experience with us is nothing short of outstanding. </p>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
