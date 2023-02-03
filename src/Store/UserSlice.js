import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    accessToken: null,
    isLoggedIn: false,
    document: [],
  },
  reducers: {
    setLogin(state, action) {
      state.isLoggedIn = action.payload;
    },
    setDocument(state, action) {
      state.document = action.payload;
    },
    updateDocument(state, action) {
      state.document[`${action.payload.fieldName}`] = action.payload.value;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
  },
});

const { setAccessToken, setDocument, setLogin } = userSlice.actions;

export default userSlice.reducer;

export { setLogin, setAccessToken, setDocument };
