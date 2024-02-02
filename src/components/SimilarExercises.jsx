import React, { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import SimilarCard from "./SimilarCard";

const SimilarExercises = ({ bodyPart, target, equipment }) => {
  const [bodypartex,setBodyPart] = useState(null);
  const [targetex,setTarget] = useState(null);
  const [equipmentex,setEquipment] = useState(null);
  useEffect(()=>{
    const dataFetcher = async () => {
      try {
        const bodypartData = await useFetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`);
        const targetData = await useFetch(`https://exercisedb.p.rapidapi.com/exercises/target/${target}`);
        const equipData = await useFetch(`https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`);
    
        if (bodypartData.length > 5) {
          setBodyPart(bodypartData.slice(0, 5));
        } else {
          setBodyPart(bodypartData);
        }
    
        if (targetData.length > 5) {
          setTarget(targetData.slice(0, 5));
        } else {
          setTarget(targetData);
        }
    
        if (equipData.length > 5) {
          setEquipment(equipData.slice(0, 5));
        } else {
          setEquipment(equipData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors as needed
      }
    };    
    dataFetcher();
  },[]);
  // console.log(targetex,bodypartex,equipmentex);
  return (
    <section>
      <div>
        <h1>similar exercises on {bodyPart}</h1>
        <ul className="flex justify-start items-center gap-4 mt-2 mx-4 overflow-x-scroll">
          {bodypartex.map((part,index)=>(
            <li key={index}><SimilarCard data={part}/></li>
          ))}
        </ul>
      </div>
      <div>
        <h1>similar exercises for {target}</h1>
      </div>
      <div>
        <h1>similar exercises using {equipment}</h1>
      </div>
    </section>
  );
};

export default SimilarExercises;
