import { createSlice } from "@reduxjs/toolkit";

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
    addToCart(state, action) {
      const cart = action.payload;
      const index = state.cartItem.findIndex((item) => item._id === cart._id);

      if (index > -1) {
        state.cartItem[index].quantity =
          state.cartItem[index].quantity + cart.quantity;
        state.cartItem[index].total =
          state.cartItem[index].price * state.cartItem[index].quantity;
      } else {
        state.cartItem.push(cart);
      }
    },
    deleteCartItemAmount(state, action) {
      const index = state.cartItem.findIndex(
        (item) => item._id === action.payload
      );
      if (state.cartItem[index].quantity > 1) {
        console.log("hello");
        state.cartItem[index].quantity -= 1;
      } else {
        state.cartItem = state.cartItem.filter(
          (item) => item._id !== action.payload
        );
      }
    },
  },
});

const { replaceCart, addToCart, deleteCartItemAmount } = cartSlice.actions;
export default cartSlice.reducer;

export { addToCart, deleteCartItemAmount };
