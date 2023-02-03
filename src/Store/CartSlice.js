import { createSlice } from "@reduxjs/toolkit";
import privateInstance from "../Axios/PrivateInstance";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
    totalPrice: undefined,
  },
  reducers: {
    replaceCart(state, action) {
      state.cartItem = action.payload;
    },
    addItemToCart(state, action) {
      state.cartItem.push(action.payload);
    },
  },
});

export default cartSlice.reducer;
const { replaceCart, addItemToCart } = cartSlice.actions;

const addCart = (product) => {
  console.log(product);
  return async (dispatch) => {
    const response = await privateInstance.post("/cart", {
      product: product._id,
      quantity: product.quantity,
    });
    console.log(response);
    dispatch(addItemToCart(response.data.cart));
  };
};

const fetchCart = () => {
  return async (dispatch) => {
    const response = await privateInstance.get("/cart");
    dispatch(replaceCart(response.data.carts));
  };
};

export { addCart, fetchCart };
