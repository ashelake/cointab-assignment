import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "../Pages/HomePage";
import UserDetails from "../Pages/UserDetails";

const Allroutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navbar />}></Route> */}
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/user" element={<UserDetails />}></Route>
    </Routes>
  );
};

export default Allroutes;
