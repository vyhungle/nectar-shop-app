import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isAuth: false,
  errors: [],
  registerErrors: [],
  updateErrors: [],
  user: {},
};

export const LoginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUser: (state, {payload}) => {
      state.user = payload.user;
      state.isAuth = true;
    },
    //logout
    logout: state => {
      state.isAuth = false;
      state.user = {};
    },
    //login
    loginPending: state => {
      state.isLoading = true;
    },
    loginSuccess: state => {
      state.isLoading = false;
      state.isAuth = true;
      state.errors = [];
      state.registerErrors = [];
    },
    loginFail: (state, {payload}) => {
      state.isLoading = false;
      state.isAuth = false;
      state.errors = payload.errors;
      state.user = {};
    },
    //register
    registerPending: state => {
      state.isLoading = true;
    },
    registerSuccess: state => {
      state.isLoading = false;
      state.isAuth = true;
      state.registerErrors = [];
      state.errors = [];
    },
    registerFail: (state, {payload}) => {
      state.isLoading = false;
      state.isAuth = false;
      state.registerErrors = payload.errors;
      state.user = {};
    },

    updatePending: state => {
      state.isLoading = true;
    },
    updateSuccess: (state, {payload}) => {
      state.isLoading = false;
      state.user = payload.user;
      state.updateErrors = [];
    },
    updateFalse: (state, {payload}) => {
      state.isLoading = false;
      state.updateErrors = payload.errors;
    },
  },
});

export const {
  loginPending,
  loginSuccess,
  loginFail,
  authUser,
  registerPending,
  registerSuccess,
  registerFail,
  logout,
  updatePending,
  updateSuccess,
  updateFalse,
} = LoginSlice.actions;

export default LoginSlice.reducer;
