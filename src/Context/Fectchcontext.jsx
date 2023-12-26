import { createContext, useContext, useState } from "react";
import { fetchData,exerciseOptions } from "../Utils/fetchData";

export const FetchContext = createContext();



export const FetchContextProivider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [bodylistCategory, setBodyListCategory] = useState([]);
  const [searchTerm,setSearchTerm] = useState("")
  const [allExercises,setAllExercises] = useState([])
  const [currentPage,setCurrentPage] = useState(1)

  const handleSearch = async (searchTerm) => {
    if (searchTerm) {
      let exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=1000",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searchTerm) ||
          exercise.target.toLowerCase().includes(searchTerm) ||
          exercise.equipment.toLowerCase().includes(searchTerm) ||
          exercise.bodyPart.toLowerCase().includes(searchTerm)
      );
      setSearchTerm("");
      setExercises(searchedExercises);
      window.scrollTo({top:1600,behavior:'smooth'})
    }
};

  return (
    <FetchContext.Provider
      value={{ exercises, setExercises, bodylistCategory, setBodyListCategory,searchTerm,setSearchTerm,allExercises,setAllExercises,handleSearch,currentPage,setCurrentPage}}
    >
      {children}
    </FetchContext.Provider>
  );
};

export const useFetchContext = () => {
  return useContext(FetchContext);
};
