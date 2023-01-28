import React, { useEffect, useState } from "react";
import { setLogin, setAccessToken } from "../Store/UserSlice";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PersistLogin() {
  const [isMounted, setIsMounted] = useState(true);
  const accessToken = useSelector((state) => state.user.accessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    function persist() {
      if (isMounted) {
        dispatch(setLogin(true));
        dispatch(setAccessToken("asdfsaotot"));
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
