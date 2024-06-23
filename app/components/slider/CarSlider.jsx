"use client"

// import swiper 
import { Swiper, SwiperSlide } from "swiper/react"

// import Swiper styles
import 'swiper/css';

// next image
import Image from "next/image";

// framer 
import { motion } from "framer-motion";

// variants
import { fadeIn } from "@/varient/varient";

// react icons 
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


// car images
import car1 from "@/public/assets/images/carSlider/car01.svg"
import car2 from "@/public/assets/images/carSlider/car02.svg"
import car3 from "@/public/assets/images/carSlider/car03.svg"


// car icons 
import cari1 from "@/public/assets/icons/carSlider/gearshift.svg"
import seati1 from "@/public/assets/icons/carSlider/seat.svg"
import gasi1 from "@/public/assets/icons/carSlider/gas.svg"
import wheel1 from "@/public/assets/icons/carSlider/wheel.svg"
import enginei1 from "@/public/assets/icons/carSlider/engine.svg"

// cars data
const cars = [
  {
    type : "HatchBack",
    name : "Ford Focus",
    price : 29,
    stars : 3.5,
    image : car1,
    info : [
      {
        icon : cari1,
        text : "Manual"
      },
      {
        icon : seati1,
        text : "5 Seats"
      },
      {
        icon : gasi1,
        text : "Gas"
      },
      {
        icon : wheel1,
        text : "1600 HP"
      },
      {
        icon : enginei1,
        text : "Front "
      },
    ]
  },
  {
    type : "Sedan",
    name : "Toyata Corolla",
    price : 25,
    stars : 5,
    image : car2,
    info : [
      {
        icon : cari1,
        text : "Manual"
      },
      {
        icon : seati1,
        text : "5 Seats"
      },
      {
        icon : gasi1,
        text : "Gas"
      },
      {
        icon : wheel1,
        text : "1600 HP"
      },
      {
        icon : enginei1,
        text : "Front "
      },
    ]
  },
  {
    type : "SUV",
    name : "Honda CR-V",
    price : 35,
    stars : 4.7,
    image : car3,
    info : [
      {
        icon : cari1,
        text : "Automatic"
      },
      {
        icon : seati1,
        text : "5 Seats"
      },
      {
        icon : gasi1,
        text : "Gas"
      },
      {
        icon : wheel1,
        text : "1600 HP"
      },
      {
        icon : enginei1,
        text : "Front "
      },
    ]
  },
  {
    type : "Convertible",
    name : "Mazda MX-5",
    price : 32,
    stars : 4.5,
    image : car2,
    info : [
      {
        icon : cari1,
        text : "Automatic"
      },
      {
        icon : seati1,
        text : "5 Seats"
      },
      {
        icon : gasi1,
        text : "Gas"
      },
      {
        icon : wheel1,
        text : "1600 HP"
      },
      {
        icon : enginei1,
        text : "Front "
      },
    ]
  },
]

export default function CarSlider() {
  return (
    <motion.div 
    variants={fadeIn('up', 0.4)} 
    initial="hidden" 
    whileInView={"show"} 
    viewport={{once : false, amount : 0.2 }}
    className="container mx-auto mb-20">
        <Swiper breakpoints={{
          320 : {slidesPerView : 1, spaceBetween : 15}, 
          640 : {slidesPerView : 2, spaceBetween : 32}, 
          1260 : {slidesPerView : 3, spaceBetween : 32}, 
          }}> 
          {
            cars.map((car, index) => {
              return <SwiperSlide key={index}> 
                <div className="max-w-[385px] mx-auto sm:mx-0 bg-gray-100  rounded-md mb-10">
                  <Image src={car.image} alt="car" className="w-[300px] h-[284px]"/>
                  <div className="flex justify-between p-3">
                    <div>
                      <div className="text-secondary text-[13px] upperacse"> {car.type} </div>
                      <h2 className="text-lg uppercase font-bold"> {car.name} </h2>
                      <h4 className="mb-2 text-accent font-semibold uppercase "> {car.price}/day </h4>
                    </div>
                    <div className="flex gap-x-2 text-accent h-max"> 
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>       
                  </div>
                  {/* car info  */}
                
                  <div className="flex gap-x-3 xl:gap-x-4 w-max p-3">
                     {car.info.map((item, index) => {
                      return <div key={index} className="flex flex-col items-center mb-3 ">
                             <div className="bg-primary h-12 w-12 rounded-full flex justify-center items-center mb-2"> 
                                <Image src={item.icon} alt="icon" className="h-[24px] w-[24px] "/>
                             </div>
                            <h2 className="text-[12px] uppercase "> {item.text}</h2>   
                      </div>
                     })}
                  </div>
                  <button className="btn btn-accent btn-lg"> See Details </button>
                </div>
               </SwiperSlide>
            })
          }
          </Swiper>
     
    </motion.div>
  )
}
