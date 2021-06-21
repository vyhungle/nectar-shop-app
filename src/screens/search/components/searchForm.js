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
import {useDispatch, useSelector} from 'react-redux';

import {appColor} from '../../../assets/color';
import {findPending} from '../../../redux/slice/productSplice';
import BottomSheet from '../../../components/customs/bottomSheet';
import ContentSheet from './contentSheet';

const {width} = Dimensions.get('window');

export default function SearchForm(props) {
  const {products} = useSelector(state => state.products);
  const dispatch = useDispatch();
  const changeKey = value => {
    props.searchForKey(value);
    var key = value;
    dispatch(findPending({products, key}));
  };
  const myTextInput = React.createRef();
  const clearText = () => {
    myTextInput.current.clear();
    changeKey('');
    refRBSheet.current.open();
  };
  const refRBSheet = React.useRef();
  return (
    <View style={styles.Container}>
      <BottomSheet
        refRBSheet={refRBSheet}
        component={ContentSheet}
        height={550}
      />
      <View style={styles.IconField}>
        <AntDesign name="search1" size={20} />
      </View>
      <TextInput
        style={styles.Field}
        placeholder="Tìm kiếm.."
        placeholderTextColor={appColor.hint}
        onChangeText={value => changeKey(value)}
        ref={myTextInput}
      />
      <TouchableOpacity style={styles.IconClear} onPress={() => clearText()}>
        <AntDesign name="closecircle" size={20} color={appColor.buttonX} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.IconFilter} onPress={() => clearText()}>
        <AntDesign name="filter" size={20} color="black" />
      </TouchableOpacity>
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
    width: width - 145,
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
    right: 50,
    top: 15,
  },
  IconFilter: {
    position: 'absolute',
    right: -20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 51.57,
    backgroundColor: appColor.field,
    borderRadius: 15,
  },
});
