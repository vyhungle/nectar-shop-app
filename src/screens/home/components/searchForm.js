import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchIcon from '../../../assets/images/search.svg';

import {appColor} from '../../../assets/color';

const {width, height} = Dimensions.get('window');

export default function SearchForm(props) {
  const myTextInput = React.createRef();
  const clearText = () => {
    myTextInput.current.clear();
  };

  return (
    <View style={styles.Container}>
      <View style={styles.IconField}>
        <SearchIcon />
      </View>
      <TextInput
        style={styles.Field}
        placeholder="Tìm kiếm.."
        placeholderTextColor={appColor.hint}
        ref={myTextInput}
      />
      <TouchableOpacity style={styles.IconClear} onPress={() => clearText()}>
        <AntDesign name="closecircle" size={20} color={appColor.buttonX} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: width,
    height: 51.57,
    display: 'flex',
    alignContent: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 5,
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
  IconClear: {
    position: 'absolute',
    right: 35,
    top: 15,
  },
});
