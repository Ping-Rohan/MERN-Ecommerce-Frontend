import { createSlice } from "@reduxjs/toolkit";
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

export default postSlice.reducer;
export { getAllProducts };
