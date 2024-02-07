import React, { useState } from "react";
// import useFetch from "../utils/useFetch";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [inputVal, setInputVal] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(inputVal);
    if (inputVal) {
      navigate(`/exercises/search/:${inputVal}`);
    }
    setInputVal('');
  };
  return (
    <section className="w-full my-5 mx-6 text-center text-[18px] ">
      <form
        action=""
        className="flex overflow-hidden justify-end items-center border-[2px] border-orange-500 w-[95%] rounded-md p-0"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          value={inputVal}
          placeholder="search any exercise"
          className="px-4 py-2 border-none outline-none w-[95%]"
          onChange={(e) => {
            setInputVal(e.target.value);
            console.log(inputVal);
          }}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-orange-500 text-dimWhite hover:text-white"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default Search;
