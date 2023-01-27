import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";

export default function Layout() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const document = useSelector((state) => state.user.document);
  console.log(document);
  return (
    <>
      <Header />
      {isLoggedIn ? <Outlet /> : <Navigate to="/login" />}
    </>
  );
}
