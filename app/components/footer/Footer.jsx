
"use client"
import logo from "@/public/assets/icons/logo.svg"

// next image 
import Image from "next/image"

// react icons 
import { FaPhone, FaEnvelope } from "react-icons/fa";

// motion
import { motion } from "framer-motion";

// components 
import CopyRight from "./CopyRight";

// varients
import { fadeIn } from "@/varient/varient";

// react scroll 
import { Link } from "react-scroll";



export default function Footer() {
  return (
    <footer className="pt-20 bg-white z-20 " id="contact">
       <div className="container mx-auto mb-24">
           {/* grid */}
            <motion.div 
              variants={fadeIn('up', 0.2)} 
              initial="hidden" 
              whileInView={"show"} 
              viewport={{once : false, amount : 0.6 }}
            className="flex flex-col xl:flex-row xl:justify-between gap-x-5 gap-y-14 ">
              <div className="flex flex-1 flex-col gap-y-5">
                <Link to="home" smooth={true} spy={true} className="cursor-pointer ">
                   <Image src={logo} alt="" height={200} width={200}/> 
                </Link>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="flex flex-col gap-y-4 font-semibold">
                  {/* phone */}
                  <div className="flex items-center gap-x-[10px]">
                    <FaPhone />
                    <div className="font-medium" > 01755302053 </div>
                  </div>
                  {/* email */}
                  <div  className="flex items-center gap-x-[10px]" >
                    <FaEnvelope />
                    <div className="font-medium"> goutamr362@gmail.com </div>
                  </div>
    
                </div>
              </div>

              {/* link  */}
              <div className="flex flex-1 flex-col xl:items-center ">
                <div>
                  <h2 className="h3 font-bold mb-8"> Company </h2>
                  <ul className="flex flex-col font-semibold gap-y-3">
                    <li> <Link href="#"> New York </Link></li>
                    <li> <Link href="#"> Carrers </Link></li>
                    <li> <Link href="#"> Mobile </Link></li>
                    <li> <Link href="#"> Blog </Link></li>
                    <li> <Link href="#"> How we work </Link></li>
                  </ul>
                </div>
              </div>

             {/* time */}
              <div className="flex flex-1 flex-col ">
                <h3  className="h3 font-bold mb-8" > Working Hours</h3>
                <div  className="flex flex-col gap-y-4 ">       
                  <div  className="flex gap-x-2 ">
                    <div className="text-secondary"> Mon-Fri: </div>
                    <div className="font-semibold"> 09:00 AM - 09:00 PM </div>
                  </div>
                  <div  className="flex gap-x-2 ">
                    <div className="text-secondary"> Sat </div>
                    <div className="font-semibold  "> 09:00 AM - 07:00 PM </div>
                  </div>
                  <div  className="flex gap-x-2 ">
                    <div className="text-secondary"> Sun: </div>
                    <div className="font-semibold  "> Closed </div>
                  </div>

                </div>
              </div>

             {/* newsletter */}
              <div className="flex flex-1 flex-col ">
                <h3  className="h3 font-bold mb-8" > NewsLetter</h3>
                <p className="mb-9 text-secondary "> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <form className="flex gap-x-2" >
                  <input type="text" placeholder="Your Email" className="outline-none bg-white h-full py-5 border rounded-lg pl-4 focus:border-accent "/>
                  <button type="submit" className="btn btn-sm btn-accent w-24"> Submit </button>
                </form>
              </div>
           
            </motion.div>
       </div>
       <CopyRight /> 
    </footer>
  )
}
