import React, { useContext, useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "../../Utils/fetchData";
import { icons } from "../../images";
import { useFetchContext } from "../../Context/Fectchcontext";

const Category = () => {
  const {
    bodylistCategory,
    setBodyListCategory,
    searchTerm,
    setSearchTerm,
    handleSearch,
    setCurrentPage,
  } = useFetchContext();

  useEffect(() => {
    const fetchingBodyList = async () => {
      try {
        const bodyPartsLists = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        );
        setBodyListCategory(["all", ...bodyPartsLists]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchingBodyList();
  }, []);

  return (
    <main className="main-card">
      {bodylistCategory?.map((item, index) => {
        return (
          <div
            className="card"
            key={item}
            onClick={() => {
              handleSearch(item);
              setCurrentPage(1);
            }}
          >
            <div className="image">
              <img src={icons[index]} alt="category-image" />
            </div>
            <div className="content">
              <h4>{item}</h4>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Category;
