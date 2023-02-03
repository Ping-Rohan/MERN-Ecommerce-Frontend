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
    deleteItemFromCart(state, action) {
      const index = state.cartItem.findIndex(
        (item) => item.product._id === action.payload
      );
      if (state.cartItem[index].quantity > 1) {
        state.cartItem[index].quantity -= 1;
      } else {
        state.cartItem = state.cartItem.filter(
          (item) => item.product._id !== action.payload
        );
      }
    },
  },
});

export default cartSlice.reducer;
const { replaceCart, addItemToCart, deleteItemFromCart } = cartSlice.actions;

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

const deleteCart = (productId) => {
  return async (dispatch) => {
    const response = await privateInstance.delete(`/cart/${productId}`);
    dispatch(deleteItemFromCart(response.data.deletedCart));
  };
};

export { addCart, fetchCart, deleteCart };
