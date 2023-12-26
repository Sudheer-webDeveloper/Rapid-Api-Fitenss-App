import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Outlet } from 'react-router-dom'
import Loader from "./Components/Loader/Loader";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
// import Home from "./Pages/Home";
// import ExerciseDetail from "./Pages/ExerciseDetail";
// import No from "./Pages/No";

import { lazy, Suspense } from "react";

// const Navbar = lazy(()=>import('./Components/Navbar/Navbar'))
// const Footer = lazy(()=>import ("./Components/Footer/Footer"))
const Home = lazy(() => import("./Pages/Home"));
const ExerciseDetail = lazy(() => import("./Pages/ExerciseDetail"));
const No = lazy(() => import("./Pages/No"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContentWrapper />}>
          <Route index element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="*" element={<No />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const ContentWrapper = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
