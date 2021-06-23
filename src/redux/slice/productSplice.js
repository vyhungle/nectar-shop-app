import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  products: [],
  filter: {
    success: true,
    products: [],
    isLoading: false,
    categoriesId: [],
    isCheckList: [false, false, false, false, false, false],
    isSort: 0,
    priceZone: [0, 1000000],
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

    //check category
    checkCategory: (state, {payload}) => {
      state.filter.isCheckList[payload.data.index] = payload.data.value;
      var flag = 0;
      var i = -1;
      state.filter.categoriesId.map((x, index) => {
        if (x === payload.data.id) {
          flag = 1;
          i = index;
        }
      });
      flag === 0
        ? state.filter.categoriesId.push(payload.data.id)
        : state.filter.categoriesId.splice(i, 1);
    },
    setPriceZone: (state, {payload}) => {
      state.filter.priceZone = payload.value;
    },
    setSort: (state, {payload}) => {
      state.filter.isSort = payload.value;
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
  checkCategory,
  setPriceZone,
  setSort,
} = ProductSplice.actions;

export default ProductSplice.reducer;
