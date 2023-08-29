import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/login";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: null,
  },

  reducers: {
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logoutUser: (state, action) => {
      state.isLoggedIn = false;
      state.user = false;
    },
  },
});

export default authSlice.reducer;
export const { loginUser, logoutUser } = authSlice.actions;

export const manageUserLogin = (credentials) => async (dispatch) => {
  const response = await loginService.login(credentials);
  dispatch(loginUser(response.name));
  console.log(response);
};
