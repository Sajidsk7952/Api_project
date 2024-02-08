import React, { Fragment, useEffect, useState } from "react";
import { FitnessOptions } from "../utils/useFetch"; // Assuming FitnessOptions is an API configuration
import useFetch from "../utils/useFetch";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";
const PrePlans = () => {
  const [bodyPartData, setBodyPartData] = useState([]);
  const [equipData, setEquipData] = useState([]);
  const [targetData, setTargetData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bodyPartList = async () => {
      try {
        const response = await useFetch(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList"
        );
        const equip = await useFetch(
          "https://exercisedb.p.rapidapi.com/exercises/equipmentList"
        );
        const targetList = await useFetch(
          "https://exercisedb.p.rapidapi.com/exercises/targetList"
        );
        setTargetData(targetList);
        setEquipData(equip);
        setBodyPartData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    bodyPartList();
  }, []);

  if (loading) {
    return (
      <Fragment>
        <h1 className="sm:text-[45px] text-[25px] font-semibold capitalize text-center mb-6">
          our pre-planned Workout Plans!!
        </h1>
        <p className="text-[20px] text-center ">Loading....</p>
      </Fragment>
    ); // Add loading indicator if needed
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Display error message
  }

  // console.log(equipData);

  return (
    <section className="sm:mt-5 mt-0 sm:p-10 p-4 relative">
      <h1 className="sm:text-[45px] text-[25px] font-semibold capitalize text-center mb-6">
        our pre-planned Workout Plans!!
      </h1>
      {/* Render your fetched data or perform further operations */}
      {/* <div className="absolute z-[0] bottom-0 left-0 red__gradient w-[30%] h-[50%]"></div> */}
      <div className="">
        {/* <h1>Checkout Body Part Workouts</h1> */}
        <Marquee pauseOnHover={true} gradientColor="white" gradientWidth="200">
          <ul className="flex ">
            {bodyPartData?.map((item,index) => (
              <li key={index} className="px-4 py-2 sm:text-[18px] text-[12px] bg-slate-500 mx-4 my-2 rounded-md text-white cursor-pointer hover:bg-orange-700 duration-700">
                <NavLink to={`exercises/search/:${item}`}>{item}</NavLink>
              </li>
            ))}
          </ul>
        </Marquee>

        {/* <h1>Checkout Equipments and their Workouts</h1> */}
        <Marquee pauseOnHover={true} direction="right">
          <ul className="flex ">
            {equipData?.map((item) => (
              <li className="px-4 py-2 sm:text-[18px] text-[12px] bg-slate-500 mx-4 my-2 rounded-md text-white cursor-pointer hover:bg-orange-700 duration-700">
                <NavLink to={`exercises/search/:${item}`}>{item}</NavLink>
              </li>
            ))}
          </ul>
        </Marquee>
        {/* <Marquee speed={30} direction="right" pauseOnHover='true'>
        <ul className="flex ">
            {equipData.map((item) => (
              <li className="px-4 py-2 text-[18px] bg-slate-500 mx-4 my-2 rounded-md text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </Marquee> */}
        {/* <h1>checkout our plans for specific targeted parts</h1> */}
        <Marquee pauseOnHover={true}>
          <ul className="flex ">
            {targetData?.map((item) => (
              <li className="px-4 py-2 sm:text-[18px] text-[12px] bg-slate-500 mx-4 my-2 rounded-md text-white cursor-pointer hover:bg-orange-700 duration-700">
                <NavLink to={`exercises/search/:${item}`}>{item}</NavLink>
              </li>
            ))}
          </ul>
        </Marquee>
        {/* <Marquee speed={30} direction="right" pauseOnHover='true'>
        <ul className="flex ">
            {targetData.map((item) => (
              <li className="px-4 py-2 text-[18px] bg-slate-500 mx-4 my-2 rounded-md text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </Marquee> */}
      </div>
      <div className="absolute top-0 right-0 pink__gradient z-[0] h-[40%] w-[40%]"></div>
    </section>
  );
};

export default PrePlans;
