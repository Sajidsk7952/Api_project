import React from "react";
import { useNavigate } from "react-router-dom";

const ExerciseCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col px-2 py-4 rounded-md border-t-2 border-red-600 mb-1 bg-white">
      <div className="sm:w-[350px] w-[200px]">
        <img src={data.gifUrl} alt={data.namr} loading="lazy" />
      </div>
      <div className="text-left">
        <p className="text-[16px] p-2 bg-red-500 rounded-xl inline mr-4 text-white">{data.target}</p>
        <p className="text-[16px] p-2 bg-yellow-500 rounded-xl inline mr-4 text-white">{data.equipment}</p>
        <h3 className="text-center font-semibold text-[18px] capitalize mt-4">
          {data.name}
        </h3>

        <button
          onClick={() => navigate(`${data.id}`)}
          className="px-4 py-2 bg-orange-300 rounded-sm font-semibold mt-4"
        >
          view info
        </button>
      </div>
    </div>
  );
};

export default ExerciseCard;
