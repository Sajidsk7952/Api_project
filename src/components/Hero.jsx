import React from "react";
import { banner } from "../assets";
const Hero = () => {
  return (
    <section className="relative">
      <div className="w-full h-auto object-cover">
        <img src={banner} alt="banner" />
        <div className="absolute bg-black/30 left-0 top-0 p-5 w-full h-full text-white font-poppins">
          <h1 className="sm:text-[120px] xs:text-[20px] text-[30px] font-semibold capitalize tracking-wide">
            Start Your <br /> Fitness <br />
            <span className="bg-gradient-to-r from-yellow-100 via-orange-200 to-red-300 inline-block text-transparent bg-clip-text">
              Journey
            </span>
          </h1>
          <p className="sm:text-[40px] ss:text-[20px] text-dimWhite sm:w-[700px]">
            Discover a wide range of exercises to enhance your fitness routine
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
