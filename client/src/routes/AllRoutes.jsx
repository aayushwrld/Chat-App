import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element= {<Signup />} />
    </Routes>
  );
}

export default AllRoutes;
