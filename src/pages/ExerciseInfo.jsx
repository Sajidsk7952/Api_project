import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseInfo = () => {
  const [infoData, setInfoData] = useState(null);
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
  if (infoData === null) {
    return <p>loading...</p>;
  }
  return (
    <section>
      <section className="flex sm:flex-row flex-col mt-2 mb-2 px-6 items-center w-full">
        <div className="flex-1">
          <img src={infoData.gifUrl} alt={infoData.name} loading="lazy"/>
        </div>
        <div className="flex-1">
          <h1 className="text-[35px] w-full capitalize text-center font-semibold">
            {infoData.name}
          </h1>
          <p className="text-[18px] capitalize mt-4 px-6 font-normal">
            Involved body part : {infoData.bodyPart}
          </p>
          <p className="text-[18px] capitalize mt-2 px-6 font-normal">
            required Equipment : {infoData.equipment}
          </p>
          <p className="text-[18px] capitalize mt-2 px-6 font-normal">
            Target Muscle Group : {infoData.target}
          </p>
          <div className="flex w-[60%] px-6 mt-2 items-center">
            <h1 className="text-[22px] capitalize ">secondary Muscles:</h1>
            <ul className="list-none px-4 text-[18px] flex flex-col">
              {infoData.secondaryMuscles.map((mus) => (
                <li>{mus}</li>
              ))}
            </ul>
          </div>
          <div className="px-6 ">
            <h1 className="text-[22px]">Instructions:</h1>
            <ul className="text-[18px] list-decimal">
              {infoData.instructions.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <SimilarExercises target={infoData.target} bodyPart={infoData.bodyPart} equipment={infoData.equipment}/>
    </section>
  );
};

export default ExerciseInfo;
