import { configureStore } from "@reduxjs/toolkit";
import User from "./UserSlice";
import Product from "./ProductSlice";
import Cart from "./CartSlice";

const store = configureStore({
  reducer: {
    User,
    Product,
    Cart,
  },
});

export default store;
