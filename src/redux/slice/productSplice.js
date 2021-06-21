import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  products: [],
  filter: {
    success: true,
    products: [],
    isLoading: false,
  },
  find: {
    success: true,
    products: [],
    isLoading: false,
  },
};

export const ProductSplice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    //load product
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

    //filter product
    filterPending: state => {
      state.filter.isLoading = true;
    },
    filterSuccess: (state, {payload}) => {
      state.filter.isLoading = false;
      state.filter.products = payload.products;
      state.filter.success = true;
    },
    filterFail: state => {
      state.filter.isLoading = false;
      state.filter.success = false;
    },

    //search product
    findPending: state => {
      state.find.isLoading = true;
    },
    findSuccess: (state, {payload}) => {
      state.find.isLoading = false;
      state.find.products = payload.products;
      state.find.success = true;
    },
    findFail: state => {
      state.find.isLoading = false;
      state.find.success = false;
    },

    // sort product
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
  filterFail,
  findPending,
  findSuccess,
  findFail,
} = ProductSplice.actions;

export default ProductSplice.reducer;
