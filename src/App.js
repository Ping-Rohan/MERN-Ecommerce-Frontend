import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import PersistLogin from "./Axios/PersistLogin";
import CreateProduct from "./Pages/Admin/CreateProduct";
import Homepage from "./Pages/Homepage/Homepage";
import Layout from "./Pages/Layout/Layout";
import Login from "./Pages/Login/Login";
import NormalProfile from "./Pages/Profile/NormalProfile";
import Signup from "./Pages/Signup/Signup";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import { BrowserRouter } from "react-router-dom";
import CreateCategory from "./Pages/CreateCategory/CreateCategory";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="bottom-center" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PersistLogin />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/profile/" element={<NormalProfile />} />
            <Route path="/admin" element={<CreateProduct />} />
            <Route path="/create-category" element={<CreateCategory />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
