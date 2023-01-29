import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: [],
  },
  reducers: {
    updatePost(state, action) {
      state.post = action.payload;
    },
  },
});

export default postSlice.reducer;
