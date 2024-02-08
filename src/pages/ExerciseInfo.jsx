import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import ExerciseNavigator from "../components/ExerciseNavigator";
// import SimilarExercises from "../components/SimilarExercises";

const ExerciseInfo = () => {
  const [infoData, setInfoData] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(() => {
    const getInfoData = async () => {
      const data = await useFetch(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${params.name}`
      );
      setInfoData(data);
    };
    getInfoData();
  }, []);
  console.log(infoData);
  if (Object.keys(infoData).length === 0) {
    return <p>loading...</p>;
  }
  return (
    <section className="w-full bg-orange-100/90 my-4">
      <h1 className="text-[35px] py-6  w-full capitalize text-center font-bold tracking-wide">
        {infoData.name}
      </h1>
      <section className="flex sm:flex-row flex-col mt-2 mb-2 px-6 items-start w-full">
        <div className="flex-1 w-full">
          <img
            src={infoData.gifUrl}
            alt={infoData.name}
            loading="lazy"
            className="mix-blend-multiply w-full"
          />
        </div>
        <div className="flex-1">
          {/* <h1 className="text-[35px] w-full capitalize text-center font-bold tracking-wide">
            {infoData.name}
          </h1> */}
          <div className="flex justify-around items-center w-full my-4">
            {/* <p className="text-[18px] capitalize mt-4 px-6 py-2 font-normal text-white bg-pink-500 rounded-md shadow-[1px_1px_3px_2px_#ed64a6] cursor-pointer">
              {infoData.bodyPart}
            </p> */}
            <ExerciseNavigator title={infoData.bodyPart} classname={'bg-pink-500 shadow-[1px_1px_3px_2px_#ed64a6] text-[18px]'}/>
            {/* <p className="text-[18px] capitalize mt-2 px-6 py-2 font-normalm text-white bg-red-500 rounded-md shadow-[1px_1px_3px_2px_#FC8181] cursor-pointer">
              {infoData.equipment}
            </p> */}
            <ExerciseNavigator title={infoData.equipment} classname={'bg-red-500 shadow-[1px_1px_3px_2px_#FC8181] text-[18px]'}/>
            {/* <p className="text-[18px] capitalize mt-2 px-6 py-2 font-normal text-white bg-yellow-500 rounded-md shadow-[1px_1px_3px_2px_#F6E05E] cursor-pointer">
              {infoData.target}
            </p> */}
            <ExerciseNavigator title={infoData.target} classname={'bg-yellow-500 shadow-[1px_1px_3px_2px_#F6E05E] text-[18px]'}/>
          </div>
          <div className="flex w-[80%] px-6 mt-2 items-center">
            <h1 className="text-[22px] capitalize font-semibold">
              secondary Muscles:
            </h1>
            <ul className="list-none px-4 text-[18px] flex flex-col">
              {infoData.secondaryMuscles.map((mus) => (
                <li className="py-1">{mus}</li>
              ))}
            </ul>
          </div>
          <div className="px-6 ">
            <h1 className="text-[22px] text-left font-semibold">
              Instructions:
            </h1>
            <ul className="text-[18px] list-decimal">
              {infoData.instructions.map((i) => (
                <li className="text-left py-1">{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* <SimilarExercises target={infoData.target} bodyPart={infoData.bodyPart} equipment={infoData.equipment}/> */}
    </section>
  );
};

export default ExerciseInfo;
