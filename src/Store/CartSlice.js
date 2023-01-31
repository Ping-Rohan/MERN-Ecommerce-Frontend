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
  },
});

const { replaceCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;

export { addToCart };
