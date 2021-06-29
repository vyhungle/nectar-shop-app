import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
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
      state.myAddress.city.id = payload.value.ID;
      state.myAddress.city.name = payload.value.Title;
    },

    districtPending: state => {
      state.isLoadingDistrict = true;
    },
    districtSuccess: (state, {payload}) => {
      state.isLoadingDistrict = false;
      state.district = payload.district;
    },
    chooseDistrict: (state, {payload}) => {
      state.myAddress.district.id = payload.value.ID;
      state.myAddress.district.name = payload.value.Title;
    },

    wardPending: state => {
      state.isLoadingWard = true;
    },
    wardSuccess: (state, {payload}) => {
      state.isLoadingWard = false;
      state.ward = payload.ward;
    },
    chooseWard: (state, {payload}) => {
      state.myAddress.ward.id = payload.value.ID;
      state.myAddress.ward.name = payload.value.Title;
    },

    clearAddress: state => {
      state.myAddress.district = {
        id: 0,
        name: '',
      };
      state.myAddress.ward = {
        id: 0,
        name: '',
      };
    },
    clearWard: state => {
      state.myAddress.ward = {
        id: 0,
        name: '',
      };
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
  clearAddress,
  clearWard,
} = addressSlice.actions;

export default addressSlice.reducer;
