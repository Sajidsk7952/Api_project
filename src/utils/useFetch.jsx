export const FitnessOptions = {
  method: "GET",
  parmas: {
    limit: "9",
  },
  headers: {
    'X-RapidAPI-Key': 'a1063abb0cmsh4be4308870d5799p1074b8jsn74316b3be456',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

const useFetch = async (url) => {
  try {
    const res = await fetch(url, FitnessOptions);
    const data = await res.json();
    if(res.ok){
      return data;
    }
    return [];
  } catch (error) {
    throw Error(error);
  }
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
