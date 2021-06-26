import AsyncStorage from '@react-native-async-storage/async-storage';

export let getAccessToken = async () => {
  let token = await AsyncStorage.getItem('jwtToken');
  return token;
};

export const setAccessToken = async token => {
  await AsyncStorage.setItem('jwtToken', token);
};

export const deleteAccessToken = async () => {
  await AsyncStorage.removeItem('jwtToken');
};

//cart
export const getAccessCart = async () => {
  let cart = await AsyncStorage.getItem('cart');
  return JSON.parse(cart);
};

export const setAccessCart = async cart => {
  await AsyncStorage.setItem('cart', JSON.stringify(cart));
};

export const deleteAccessCart = async () => {
  await AsyncStorage.removeItem('cart');
};
