import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "../pages/Details";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import CreateBlog from "../components/CreateBlog";

const AppRoter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
    </>
  );
};

export default AppRoter;
