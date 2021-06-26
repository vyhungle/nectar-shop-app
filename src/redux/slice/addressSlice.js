import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoadingCity: false,
  isLoadingDistrict: false,
  isLoadingWard: false,
  city: [],
  district: [],
  ward: [],
  myAddress: {
    city: {
      id: 0,
      name: '',
    },
    district: {
      id: 0,
      name: '',
    },
    ward: {
      id: 0,
      name: '',
    },
  },
};

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    cityPending: state => {
      state.isLoadingCity = true;
    },
    citySuccess: (state, {payload}) => {
      state.isLoadingCity = false;
      state.city = payload.city;
    },
    chooseCity: (state, {payload}) => {
      state.myAddress.city = payload.city;
    },

    districtPending: state => {
      state.isLoadingDistrict = true;
    },
    districtSuccess: (state, {payload}) => {
      state.isLoadingDistrict = false;
      state.district = payload.district;
    },
    chooseDistrict: (state, {payload}) => {
      state.myAddress.district = payload.district;
    },

    wardPending: state => {
      state.isLoadingWard = true;
    },
    wardSuccess: (state, {payload}) => {
      state.isLoadingWard = false;
      state.ward = payload.ward;
    },
    chooseWard: (state, {payload}) => {
      state.myAddress.ward = payload.ward;
    },
  },
});

export const {
  cityPending,
  citySuccess,
  districtPending,
  districtSuccess,
  wardPending,
  wardSuccess,
  chooseCity,
  chooseDistrict,
  chooseWard,
} = addressSlice.actions;

export default addressSlice.reducer;
