import { setLogin, setAccessToken, setDocument } from "./UserSlice";
import privateInstance from "../Axios/PrivateInstance";
import axios from "../Axios/Axios";
import toast from "react-hot-toast";

const getProfile = () => {
  return async (dispatch) => {
    const response = await privateInstance.get("/users/profile");
    dispatch(setDocument(response.data.profile));
  };
};

const login = (form, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/users/login", form, {
        withCredentials: true,
      });
      toast.success(response.data.message);
      console.log(response);
      dispatch(setAccessToken(response.data.accessToken));
      dispatch(setLogin(true));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
};

const signup = (form) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/users/signup", form, {
        withCredentials: true,
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
};

export { login, signup, getProfile };
