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
      state.user = action.payload.user;
      state.token = action.payload.token;
      // console.log(state)
      console.log(JSON.parse(JSON.stringify(state)));
    },
    logoutUser: (state, action) => {
      state.isLoggedIn = false;
      state.user = false;
      state.token = false;
    },
  },
});

export default authSlice.reducer;
export const { loginUser, logoutUser } = authSlice.actions;

export const manageUserLogin = (credentials) => async (dispatch) => {
  const response = await loginService.login(credentials);
  dispatch(
    loginUser({
      user: response.user,
      token: response.token,
    })
  );
  // console.log(response);
  console.log(response)
  localStorage.setItem("userData", JSON.stringify(response));
};

export const manageUserLogout = () => (dispatch) => {
  dispatch(logoutUser());
  localStorage.removeItem("userData");
};
