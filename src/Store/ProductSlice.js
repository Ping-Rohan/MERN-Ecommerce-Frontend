import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import privateInstance from "../Axios/PrivateInstance";

const postSlice = createSlice({
  name: "post",
  initialState: {
    products: [],
  },
  reducers: {
    updatePost(state, action) {
      state.products = action.payload;
    },
  },
});

const { updatePost } = postSlice.actions;

const getAllProducts = () => {
  return async (dispatch) => {
    const response = await privateInstance.get("/product");
    dispatch(updatePost(response.data.products));
  };
};

const createCategory = async (name) => {
  try {
    const response = await privateInstance.post("/category", name);
    toast.success(response.data.message);
  } catch (error) {
    toast.error(error.message);
  }
};

export default postSlice.reducer;
export { getAllProducts, createCategory };
