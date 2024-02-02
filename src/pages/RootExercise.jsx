import React from "react";
import ExerciseCard from "../components/ExerciseCard";
import { useLoaderData } from "react-router-dom";
import useFetch from "../utils/useFetch";
const RootExercise = () => {
  const exerciseData = useLoaderData();
  return (
    <section className="my-4 mx-6">
      <h1 className="text-[30px] w-full text-left font-semibold capitalize mb-4 mx-auto">
        Our recommended exercises
      </h1>
      <ul className="flex flex-wrap gap-6 justify-start items-center mx-4">
        {exerciseData?.map((exercise) => (
          <li key={exercise.id}>
            <ExerciseCard data={exercise} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export const exerciseLoader = async () => {
  const data = await useFetch("https://exercisedb.p.rapidapi.com/exercises");
  return data;
};

export default RootExercise;
