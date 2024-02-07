import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import ExerciseCard from "../components/ExerciseCard";

const SearchExercise = () => {
  const [data, setData] = useState([]);
  const query = useParams(); // gets the name of the exercise
  console.log(query.query);
  useEffect(() => {
    const fetchSearchData = async () => {
      const parameter = query.query.substring(1);
      console.log(parameter);
      try {
        const responseName = await useFetch(
          `https://exercisedb.p.rapidapi.com/exercises/name/${parameter}`
        );
        const nameData = await responseName;
        const responseBodyPart = await useFetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${parameter}`);
        const bodyPartData = await responseBodyPart;
        const responseEquip = await useFetch(`https://exercisedb.p.rapidapi.com/exercises/equipment/${parameter}`);
        const equipData = await responseEquip;
        setData([...nameData,...bodyPartData,...equipData]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSearchData();
  }, [query.query]);
  console.log(data);
  return (
    <section className="mt-6 pl-6 bg-orange-100 w-full">
        <h1 className="text-[20px] sm:text-[35px] font-normal capitalize px-4 py-4 text-left">the results for your search <span className="font-semibold text-orange-700">{query.query.substring(1)}</span></h1>
        <ul className="ml-6 flex flex-wrap gap-6 justify-start items-center">
            {data.map((ele,index)=>(
                <li key={index} ><ExerciseCard data={ele}/></li>
            ))}
        </ul>
    </section>
  );
};

export default SearchExercise;
