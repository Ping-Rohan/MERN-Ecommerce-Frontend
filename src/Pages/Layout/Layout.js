import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function Layout() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log(isLoggedIn);
  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/login" />}</>;
}
