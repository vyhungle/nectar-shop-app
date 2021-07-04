import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {appColor} from '../../../assets/color';
import PlusIcon from '../../../assets/images/plus.svg';

const {width} = Dimensions.get('window');

export default function ButtonReview() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.Container}
      onPress={() => navigation.navigate('AddReview')}>
      <PlusIcon width={25} height={25} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    height: 60,
    width: 60,
    backgroundColor: appColor.primary,
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
