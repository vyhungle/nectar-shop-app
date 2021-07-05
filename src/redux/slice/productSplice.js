import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  products: [],
  bestSeller: [],
  offer: [],
  product: {},
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
  isReview: false,
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
      state.offer = payload.products.filter(x => x.discount > 0);
      state.bestSeller = payload.products.filter(x => x.sellNumber > 5);
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

    //review
    reviewPending: state => {
      state.isReview = true;
    },
    reviewSuccess: (state, {payload}) => {
      state.isReview = false;
      const index = state.products.findIndex(
        x => x._id === payload.response.id,
      );
      if (index !== -1) {
        state.products[index].review = payload.response.review;
      }
    },

    //singleProduct
    singleProduct: (state, {payload}) => {
      let index = state.products.findIndex(x => x._id === payload.id);
      state.product = state.products[index];
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
  reviewPending,
  reviewSuccess,
  singleProduct,
} = ProductSplice.actions;

export default ProductSplice.reducer;
