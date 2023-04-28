import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "../pages/Details";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import CreateBlog from "../components/CreateBlog";
import Footer from "../components/Footer";
import Toggle from "../components/toggle/Toggle";

const AppRoter = () => {
  return (
    <>
      <Navbar />
      <Toggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoter;
