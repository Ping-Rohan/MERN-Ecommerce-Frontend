import { createSlice } from "@reduxjs/toolkit";
import axios from "../Axios/Axios";
import toast from "react-hot-toast";

const userSlice = createSlice({
  name: "user",
  initialState: {
    accessToken: "",
    isLoggedIn: false,
    document: null,
  },
  reducers: {
    setLogin(state, action) {
      state.isLoggedIn = action.payload;
    },
    setDocument(state, action) {
      state.document = action.payload;
    },
    updateDocument(state, action) {
      state.document[`${action.payload.fieldName}`] = action.payload.value;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
  },
});

const { setAccessToken, setDocument, setLogin } = userSlice.actions;

const login = (form, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/users/login", form);
      toast.success(response.data.message);
      dispatch(setAccessToken(response.data.accessToken));
      dispatch(setDocument(response.data.document));
      dispatch(setLogin(true));
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
};

export default userSlice.reducer;
export { login };
