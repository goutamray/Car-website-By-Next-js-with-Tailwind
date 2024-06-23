
// components 
import Brand from "../brand/Brand";
import CarSlider from "../slider/CarSlider";

export default function Car() {
  return (
    <section className="section flex items-center mb-10" id="car">
       <div className="container mx-auto ">
         <Brand />
         <CarSlider /> 
       </div>
    </section>
  )
}









