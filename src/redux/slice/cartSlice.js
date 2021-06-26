import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAdd: false,
  isRemove: false,
  cart: {
    products: [],
    total: 0,
  },
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
  },
});

export const {
  getCart,
  addToCart,
  removeToCard,
  addPending,
  removePending,
  clearItemPending,
} = CartSlice.actions;
export default CartSlice.reducer;
