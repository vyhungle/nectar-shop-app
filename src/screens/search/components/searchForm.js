import React from 'react';
import {StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {appColor} from '../../../assets/color';

const {width} = Dimensions.get('window');

export default function searchForm() {
  return (
    <View style={styles.Container}>
      <View style={styles.IconField}>
        <AntDesign name="search1" size={20} />
      </View>
      <TextInput
        style={styles.Field}
        placeholder="Tìm kiếm.."
        placeholderTextColor={appColor.hint}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: width - 40,
    height: 51.57,
    display: 'flex',
    alignContent: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  Field: {
    width: width - 90,
    height: 51.57,
    backgroundColor: appColor.field,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    color: 'black',
    fontFamily: 'SVN-Gilroy Medium',
  },
  IconField: {
    width: 50,
    height: 51.57,
    backgroundColor: appColor.field,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
});
