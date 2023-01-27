import React from "react";
import Login from "./Pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import { Toaster } from "react-hot-toast";
import Layout from "./Pages/Layout/Layout";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Signup from "./Pages/Signup/Signup";

export default function App() {
  return (
    <>
      <Toaster position="bottom-center" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<SingleProduct />} />
        </Route>
      </Routes>
    </>
  );
}
