import { configureStore } from "@reduxjs/toolkit";
import User from "./UserSlice";
import Post from "./ProductSlice";

const store = configureStore({
  reducer: {
    User,
    Post,
  },
});

export default store;
