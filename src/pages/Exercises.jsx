import React from "react";
import Search from "../components/Search";
import useFetch, { FitnessOptions } from "../utils/useFetch";
import { useLoaderData } from "react-router-dom";
import ExerciseCard from "../components/ExerciseCard";

const Exercises = () => {
  const exerciseData = useLoaderData();
  console.log(exerciseData);
  return (
    <section className="sm:top-[90px] top-[70px] relative">
      <div>
        <h1 className="w-full sm:text-[45px] text-[25px] font-bold text-center py-4 px-2 uppercase bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 text-transparent bg-clip-text">
          Shape Your Fitness Destiny
        </h1>
        <div className="py-4 flex justify-center items-center px-2">
          <h1 className="sm:text-[25px] text-[15px] typeWriter font-[450] capitalize">
            <span className="sm:inline hidden">From cardio to strength,</span> <span className="">Explore Our Diverse Exercise Collection.</span>
          </h1>
          <span className="cursor bg-orange-500">&nbsp;</span>
        </div>
        <Search />
        <section className="my-4 mx-6">
          <h1 className="text-[30px] w-full text-left font-semibold capitalize mb-4 mx-auto">Our recommended exercises</h1>
          <ul className="flex flex-wrap gap-6 justify-start items-center mx-4">
            {exerciseData.map((exercise)=>(
              <li key={exercise.id}><ExerciseCard data={exercise}/></li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export const exerciseLoader = async()=>{
  const data = await useFetch('https://exercisedb.p.rapidapi.com/exercises',FitnessOptions);
  return data;
}

export default Exercises;
