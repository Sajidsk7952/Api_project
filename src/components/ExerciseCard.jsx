import React from "react";
import { useNavigate } from "react-router-dom";
import ExerciseNavigator from "./ExerciseNavigator";
const ExerciseCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col px-2 py-4 rounded-md border-t-2 border-red-600 mb-1 bg-white">
      <div className="sm:w-[300px] md:w-[350px] w-[200px]">
        <img src={data.gifUrl} alt={data.namr} loading="lazy" />
      </div>
      <div className="text-left">
        <div className=" flex justify-around items-center py-4">
          <ExerciseNavigator
            title={data.bodyPart}
            classname={"bg-pink-500 shadow-[1px_1px_3px_2px_#ed64a6] text-[16px]"}
          />
          <ExerciseNavigator
            title={data.equipment}
            classname={"bg-red-500 shadow-[1px_1px_3px_2px_#FC8181] text-[16px]"}
          />
          <ExerciseNavigator
            title={data.target}
            classname={"bg-yellow-500 shadow-[1px_1px_3px_2px_#F6E05E] text-[16px]"}
          />
        </div>
        <h3 className="text-center font-semibold text-[18px] capitalize mt-4">
          {data.name}
        </h3>

        <button
          onClick={() => navigate(`/exercises/view/${data.id}`)}
          className="px-4 py-2 bg-orange-300 border-2 border-orange-300 hover:bg-white duration-700 rounded-sm font-semibold mt-4"
        >
          view info
        </button>
      </div>
    </div>
  );
};

export default ExerciseCard;
