import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  products: [],
  filter: {
    products: [],
    isLoading: false,
  },
};

export const ProductSplice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsPending: state => {
      state.isLoading = true;
    },
    productsSuccess: (state, {payload}) => {
      state.isLoading = false;
      state.products = payload.products;
    },
    productsFail: state => {
      state.isLoading = false;
    },

    filterPending: state => {
      state.filter.isLoading = true;
    },
    filterSuccess: (state, {payload}) => {
      state.filter.isLoading = false;
      state.filter.products = payload.products;
    },
    sortPending: state => {
      state.filter.isLoading = true;
    },
  },
});

export const {
  productsSuccess,
  productsPending,
  productsFail,
  filterPending,
  filterSuccess,
  sortPending,
} = ProductSplice.actions;

export default ProductSplice.reducer;
