import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import productReducer from './slice/productSplice';
import authReducer from './slice/authSlice';
import categoryReducer from './slice/categorySlice';
import cartReducer from './slice/cartSlice';
import addressReducer from './slice/addressSlice';
import favoriteReducer from './slice/favoriteSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    categories: categoryReducer,
    cart: cartReducer,
    address: addressReducer,
    favorite: favoriteReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
