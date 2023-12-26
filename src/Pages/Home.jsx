import React from "react";
import Hero from "../Components/Hero/Hero";
import Search from "../Components/search/Search";
import Exercise from "../Components/Exercise/Exercise";
import Category from "../Components/Category/Category";

const Home = () => {
  return (
    <>
      <Hero />
      <Search />
      <Category />
      <section id="All">
        <Exercise />
      </section>
    </>
  );
};

export default Home;
