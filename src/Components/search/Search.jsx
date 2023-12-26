import React, { useCallback, useEffect } from "react";
import { useFetchContext } from "../../Context/Fectchcontext";
import { fetchData, exerciseOptions, options } from "../../Utils/fetchData";

const Search = () => {
  const {
    searchTerm,
    setSearchTerm,
    exercises,
    setExercises,
    handleSearch,
    setAllExercises,
  } = useFetchContext();

  useEffect(() => {
    const fetching = async () => {
      try {
        const Allexercises = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=1000",
          exerciseOptions
        );
        setAllExercises(Allexercises);
        // console.log("not render", allExercises);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetching(); // Initial render call
  }, []);

  
  return (
    <main>
      <div className="search">
        <div className="content">
          <h1>Search For Awesome Exercises </h1>
          <h1>To Make Your Shape Good</h1>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={()=>handleSearch(searchTerm)}>search</button>
        </div>
      </div>
    </main>
  );
};

export default React.memo(Search);
