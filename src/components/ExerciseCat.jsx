import React from "react";
import { ExerciseCategory } from "../constants";

const Category = ({ id, icon, title }) => {
  return (
    <div className="relative cursor-pointer">
      <div className="w-[350px]">
        <img src={icon} alt={title} loading="lazy"/>
      </div>
      <div className="absolute w-full h-full top-0 left-0 p-2 bg-gray-300 bg-opacity-30">
        <h2 className="text-[45px] font-semibold capitalize strokeText tracking-[5px]">{title}</h2>
      </div>
    </div>
  );
};
const ExerciseCat = () => {
  return (
    <section className="w-full">
      <h1 className="text-[20px] sm:text-[35px] font-semibold capitalize">
        our various categories are
      </h1>
      <ul className="flex justify-start items-center gap-6 mx-4 overflow-x-scroll mt-4">
        {ExerciseCategory.map((cat, index) => (
          <li key={index}>
            <Category id={cat.id} icon={cat.icon} title={cat.title} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExerciseCat;
