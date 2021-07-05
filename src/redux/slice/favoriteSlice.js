import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  favorites: {},
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    favoritePending: state => {
      state.isLoading = true;
    },
    favoriteSuccess: (state, {payload}) => {
      state.isLoading = false;
      state.favorites = payload.favorites;
    },

    likeFavoritePending: state => {
      state.isLoading = true;
    },
    likeFavoriteSuccess: (state, {payload}) => {
      state.isLoading = false;
      if (payload.like) {
        state.favorites.push(payload.response.product);
      } else {
        state.favorites.splice(payload.response.index, 1);
      }
    },
  },
});

export const {
  favoritePending,
  favoriteSuccess,
  likeFavoritePending,
  likeFavoriteSuccess,
} = favoriteSlice.actions;
export default favoriteSlice.reducer;
