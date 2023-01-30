import { configureStore } from "@reduxjs/toolkit";
import User from "./UserSlice";
import Product from "./ProductSlice";

const store = configureStore({
  reducer: {
    User,
    Product,
  },
});

export default store;
