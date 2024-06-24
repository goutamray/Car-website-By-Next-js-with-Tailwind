import Car from "./components/car/Car";
import Cta from "./components/cta/Cta";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Why from "./components/testimonial/Why";
import Testimonial from "./components/testimonial/Testimonial";
import BackToTopButton from "./components/backToTop/BackToTopButton";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


export default function Home() {
  return (
   <div className="max-w-[1920px] bg-white mx-auto relative overflow-hidden ">
      <Header />
      <Hero />
      <Car /> 
      <About />
      <Why /> 
      <Testimonial />
      <Cta /> 
      <Footer /> 
      <BackToTopButton /> 
   </div>              
  );
}  












