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
