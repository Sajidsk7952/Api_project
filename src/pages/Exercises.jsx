import React, { useEffect } from "react";
import Search from "../components/Search";
import { Outlet, useLoaderData } from "react-router-dom";
import ExerciseCat from "../components/ExerciseCat";

const Exercises = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <section className="sm:top-[90px] top-[70px] relative overflow-hidden bg-orange-50/85">
      <div className="w-full text-center">
        <h1 className="w-full sm:text-[45px] text-[25px] font-bold text-center py-4 px-2 uppercase bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 text-transparent bg-clip-text">
          Shape Your Fitness Destiny
        </h1>
        <div className="py-4 flex justify-center items-center px-2">
          <h1 className="sm:text-[25px] text-[15px] typeWriter font-[450] capitalize">
            <span className="md:inline hidden">From cardio to strength,</span>Explore Our Diverse Exercise Collection.
          </h1>
          <span className="cursor bg-orange-500">&nbsp;</span>
        </div>
        <Search />
        <ExerciseCat />
        <Outlet />
      </div>
    </section>
  );
};


export default Exercises;
