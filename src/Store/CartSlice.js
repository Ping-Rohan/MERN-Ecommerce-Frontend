import { createSlice } from "@reduxjs/toolkit";
import privateInstance from "../Axios/PrivateInstance";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
    totalPrice: undefined,
  },
});

export default cartSlice.reducer;

const addCart = (product) => {
  console.log(product);
  return async (dispatch) => {
    const response = await privateInstance.post("/cart", {
      product: product._id,
      quantity: product.quantity,
    });
    console.log(response);
  };
};

export { addCart };
