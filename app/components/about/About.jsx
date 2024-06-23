"use client"

// image
import Image from "next/image"

// react icons 
import { MdOutlineMapsHomeWork, MdOutlineBuildCircle, MdOutlineDirectionsCar  } from "react-icons/md"; 

// react count up
import CountUp from "react-countup";

// motion
import { motion } from "framer-motion";

// varients
import { fadeIn } from "@/varient/varient";

import { useInView } from "react-intersection-observer";

import car from "@/public/assets/images/about/car01.png"

export default function About() {
  const [ref, inview ] = useInView({
    threshold : 0.5,
  });

  return (
    <section className="section flex items-center " id="about" ref={ref}>
       <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:justify-between ">
            {/* image */}
            <motion.div 
            variants={fadeIn('up', 0.2)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once : false, amount : 0.6 }} 
            className="flex flex-1 mb-8 ">
              <Image src={car} alt="car" className="rounded-[20px]" width={600} height={448} />
            </motion.div>
            {/* text & state */}
            <div className="flex flex-1 items-center xl:justify-center  ">
                <div className="max-w-[570px]">
                  <motion.h2 
                    variants={fadeIn('up', 0.4)} 
                    initial="hidden" 
                    whileInView={"show"} 
                    viewport={{once : false, amount : 0.6 }} 
                  className="h2"> Car services simpilified. </motion.h2>
                  <motion.p 
                    variants={fadeIn('up', 0.6)} 
                    initial="hidden" 
                    whileInView={"show"} 
                    viewport={{once : false, amount : 0.6 }} 
                  className="mb-10 "> Rent, choose & repair with easy. Our convient locations, diverse car types, and reliable repair point ensure a seamless car experience </motion.p>
                  <motion.div
                       variants={fadeIn('up', 0.8)} 
                       initial="hidden" 
                       whileInView={"show"} 
                       viewport={{once : false, amount : 0.2 }} 
                   className="flex items-center gap-x-8 mb-12">
                    {/* car types */}
                    <div className="flex flex-col w-[100px]">
                      <MdOutlineDirectionsCar className="text-5xl text-accent mb-2"/>
                      <div className="text-3xl font-black ">
                        { inview ? <CountUp start={0} end={50} duration={3} delay={1}/> : null }
                        + 
                      </div>
                      <div className="uppercase text-[13px] font-semibold text-secondary ">
                        car <br /> types 
                      </div>
                    </div>

                    {/* rental outlets  */}
                    <div className="flex flex-col w-[100px]">
                      <MdOutlineMapsHomeWork className="text-5xl text-accent mb-2"/>
                      <div className="text-3xl font-black ">
                        { inview ? <CountUp start={0} end={135} duration={3} delay={1}/> : null }
                        + 
                      </div>
                      <div className="uppercase text-[13px] font-semibold text-secondary ">
                        rental <br /> outlets 
                      </div>
                    </div>

                    {/* repair points  */}
                    <div className="flex flex-col w-[100px]">
                      <MdOutlineBuildCircle className="text-5xl text-accent mb-2"/>
                      <div className="text-3xl font-black ">
                        { inview ? <CountUp start={0} end={35} duration={3} delay={1}/> : null }
                        + 
                      </div>
                      <div className="uppercase text-[13px] font-semibold text-secondary ">
                        repair <br /> points  
                      </div>
                    </div>
                  </motion.div>
                    <motion.button
                       variants={fadeIn('up', 0.8)} 
                       initial="hidden" 
                       whileInView={"show"} 
                      viewport={{once : false, amount : 0.2 }} 
                     className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase font-medium text-white text-[13px]  tracking-[2px] max-w-[184px]"> See All Cars </motion.button>
                </div>
            </div>
          </div>
       </div>
    </section> 
  )
}
