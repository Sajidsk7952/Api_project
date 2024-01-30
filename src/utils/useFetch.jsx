export const FitnessOptions = {
  method: "GET",
  parmas: {
    limit: "10",
  },
  headers: {
    "X-RapidAPI-Key": "23fb80631emshbe5c515dc2261eap12d1a7jsn422289619dac",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
const useFetch = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};

export default useFetch;

// useEffect(() => {
//   const fetchExercises = async () => {
//     const response = await useFetch(
//       "https://exercisedb.p.rapidapi.com/exercises",
//       FitnessOptions
//     );
//     // const data = await response.json();
//     console.log(response);
//   };
//   fetchExercises();
// }, []);
