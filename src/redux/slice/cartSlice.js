import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isPayment: false,
  isAdd: false,
  isRemove: false,
  isBills: false,
  cart: {
    products: [],
    total: 0,
  },
  bills: [],
  error: '',
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCart: (state, {payload}) => {
      console.log('get cart success');
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

    billsPending: state => {
      state.isBills = true;
    },
    billsSuccess: (state, {payload}) => {
      state.isBills = false;
      state.bills = payload.bills;
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
  billsPending,
  billsSuccess,
} = CartSlice.actions;
export default CartSlice.reducer;
