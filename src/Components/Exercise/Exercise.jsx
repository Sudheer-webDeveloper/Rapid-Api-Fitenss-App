import React, { useState } from "react";
import { useFetchContext } from "../../Context/Fectchcontext";
import ExerciseCard from "./ExerciseCard";

const Exercise = () => {
  const { allExercises, exercises,currentPage,setCurrentPage } = useFetchContext();
  const [exercisePerPage, setExercisePerPage] = useState(8);
  const numberOfPages =
    exercises.length === 0
      ? Math.ceil(allExercises.length / exercisePerPage)
      :Math.ceil(exercises.length / exercisePerPage);

  // console.log("number of pages", numberOfPages);
  const pagesArray = Array(numberOfPages)
    .fill(0)
    .map((item, index) => index + 1);
  // console.log(pagesArray);

  let lastIndex = currentPage * exercisePerPage;
  let firstIndex = lastIndex - exercisePerPage;
  const actualItems =
    exercises.length === 0
      ? allExercises.slice(firstIndex, lastIndex)
      : exercises.slice(firstIndex, lastIndex);

  return (
    <main className="main-exercise">
      <h1>Showing Results</h1>
      {exercises.length > 0 ? (
        <ExerciseCard actualItems={actualItems} currentPage={currentPage} setCurentPage={setCurrentPage} pagesArray={pagesArray} />
      ) : (
        <ExerciseCard actualItems={actualItems} currentPage={currentPage} setCurentPage={setCurrentPage} pagesArray={pagesArray} />
      )}
    </main>
  );
};

export default Exercise;
