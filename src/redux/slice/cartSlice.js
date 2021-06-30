import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isPayment: false,
  isAdd: false,
  isRemove: false,
  cart: {
    products: [],
    total: 0,
  },
  error: '',
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCart: (state, {payload}) => {
      state.cart = payload.cart;
    },

    addPending: state => {
      state.isAdd = true;
    },
    addToCart: (state, {payload}) => {
      state.cart = payload.cart;
      state.isAdd = false;
    },

    clearItemPending: state => {
      state.isRemove = true;
    },

    removePending: state => {
      state.isRemove = true;
    },
    removeToCard: (state, {payload}) => {
      state.cart = payload.cart;
      state.isRemove = false;
    },

    paymentPending: state => {
      state.isPayment = true;
    },
    paymentSuccess: state => {
      state.isPayment = false;
      state.cart = {
        products: [],
        total: 0,
      };
    },
    paymentFail: (state, {payload}) => {
      state.isPayment = false;
      state.error = payload.error;
    },
  },
});

export const {
  getCart,
  addToCart,
  removeToCard,
  addPending,
  removePending,
  clearItemPending,
  paymentPending,
  paymentSuccess,
  paymentFail,
} = CartSlice.actions;
export default CartSlice.reducer;
