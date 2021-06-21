import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  categories: [],
};

export const LoginSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    categoryPending: state => {
      state.isLoading = true;
    },
    categorySuccess: (state, {payload}) => {
      state.isLoading = false;
      state.categories = payload.categories;
    },
  },
});

export const {categoryPending, categorySuccess} = LoginSlice.actions;

export default LoginSlice.reducer;
