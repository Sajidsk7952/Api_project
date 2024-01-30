import React from "react";
import { useNavigate } from "react-router-dom";

const ExerciseCard = ({ data }) => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col px-2 py-4 rounded-md border-[2px] border-red-200 mb-1">
      <div className="w-[350px]">
        <img src={data.gifUrl} alt={data.namr} />
      </div>
      <div>
        <h3 className="text-center font-semibold text-[18px] capitalize underline">{data.name}</h3>
        <p className="text-[16px]">target: {data.target}</p>
        <p>equipment: {data.equipment}</p>
        <button onClick={()=>(navigate(`exercise/${data.name}`))} className="px-4 py-2 bg-orange-300 rounded-sm font-semibold mt-4">view info</button>
      </div>
    </div>
  );
};

export default ExerciseCard;
