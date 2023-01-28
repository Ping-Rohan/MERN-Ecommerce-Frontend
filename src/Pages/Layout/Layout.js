import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";

export default function Layout() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <>
      <Header />
      {isLoggedIn ? <Outlet /> : <Navigate to="/login" />}
    </>
  );
}
