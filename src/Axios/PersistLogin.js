import React, { useEffect, useState } from "react";
import { setLogin, setAccessToken } from "../Store/UserSlice";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import privateInstance from "./PrivateInstance";

export default function PersistLogin() {
  const [isMounted, setIsMounted] = useState(true);
  const accessToken = useSelector((state) => state.User.accessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    async function persist() {
      if (isMounted) {
        const response = await privateInstance.post("/users/refresh", {
          withCredentials: true,
        });
        console.log(response);
        dispatch(setAccessToken(response.data.newAccessToken));
        dispatch(setLogin(true));
      }
      setIsMounted(false);
    }

    !accessToken ? persist() : setIsMounted(false);
  }, []);

  useEffect(() => {
    console.log(`isMounted : ${isMounted}`);
  }, [isMounted]);

  return <>{isMounted ? <p>Loading</p> : <Outlet />}</>;
}
