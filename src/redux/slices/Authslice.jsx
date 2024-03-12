import { createSlice } from '@reduxjs/toolkit'

initialState = {
  isAuthenticated: false,
  user: null,
}

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
})


export const { login, logout } = AuthSlice.actions

export default AuthSlice.reducer