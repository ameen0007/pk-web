import React, { useEffect } from "react";
import "./home.scss";
import { Header } from "../Components/Header/Header";
import { Hero } from "../Components/Hero/Hero";
import Aos from "aos";
import 'aos/dist/aos.css';
import { Section3 } from "../Components/section3/Section3";
import { Section4 } from "../Components/section4/Section4";

export const Home = () => {

  useEffect(() => {
   Aos.init({duration : '2000'})
  },[])
  
  return (
    <>
      <section className="section1">
        <Header />
        <Hero />
      </section>


      <section className="section2">
        <div className="choose-div">
         
          <div className="inner-div">
            <div className="img" data-aos="fade-up" >
              <img  src="whylogo.png" alt="" />
            </div>
            <div className="main-why-div"  data-aos="fade-up" >
             <p>Looking For Top-Notch Software Development Services? Look No Further Than Star Developers in Karukachal, Kerala, India. Our Team of Skilled Developers is Dedicated to Delivering High-quality Solutions Tailored to your Specific needs. Trust Star Developers to Bring Your Digital Projects to life with Expertise and Precision.</p>
            </div>
          </div>
        </div>
      </section>
     
     <Section3/>
     <Section4/>
    </>
  );
};
