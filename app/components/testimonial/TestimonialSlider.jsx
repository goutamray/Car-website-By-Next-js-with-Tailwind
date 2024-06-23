"use client"
import goutam from "@/public/assets/images/testimonial/goutam.png"
import ava1 from "@/public/assets/images/testimonial/avatar.png"


// slider 
import { Swiper, SwiperSlide } from "swiper/react"

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules 
import { Pagination } from "swiper/modules" 

// next image
import Image from "next/image";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "@/varient/varient";

// react icons 
import { FaQuoteLeft } from "react-icons/fa";

// data 
const testimonialData = [
  {
    message : "They truly exceeded my expections and made my car rental experience a delight",
    avater : goutam,
    name : "Goutam Ray",
    job : "Mern Stack Developer", 
  },
  {
    message : "They truly exceeded my expections and made my car rental experience a delight",
    avater : ava1,
    name : "Shanto Ray",
    job : "Theme Developer", 
  },
  {
    message : "They truly exceeded my expections and made my car rental experience a delight",
    avater : goutam,
    name : "Durjay Ray",
    job : "Html Developer", 
  },

]

export default function TestimonialSlider() {
  return (
    <motion.div 
    variants={fadeIn('up', 0.4)} 
    initial="hidden" 
    whileInView={"show"} 
    viewport={{once : false, amount : 0.6 }} 
    > 
    <Swiper pagination = {{
      clickable : true,
      dynamicBullets : true,
    }}
    modules={[Pagination]}
    className="h-[450px] xl:h-[430px]" 
    >       
        {
          testimonialData.map((item, index) => {
            return <SwiperSlide key={index}>
              <div className="flex flex-col justify-center text-center items-center ">
                <FaQuoteLeft className="text-7xl text-accent mb-6"/>
                <div className="text-2xl xl:text-4xl max-w-[674px] mb-10 font-medium "> {item.message}</div>
                <Image src={item.avater} alt="avater" height={64} width={64} className="mb-4 rounded-full"  />
                <div>
                   <h2 className="text-lg font-medium"> {item.name}</h2>
                    <h2 className="text-secondary mb-3 font-normal text-md"> {item.job}</h2>
                 </div>
              </div>
          </SwiperSlide>
          })
        }

       </Swiper>
    </motion.div>
  )
}
