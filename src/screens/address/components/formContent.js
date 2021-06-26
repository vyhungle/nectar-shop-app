import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {appColor} from '../../../assets/color';
import {cityPending} from '../../../redux/slice/addressSlice';
import CityPicker from './cityPicker';

const {width} = Dimensions.get('window');

export default function FormContent() {
  const {myAddress} = useSelector(s => s.address);
  const dispatch = useDispatch();

  const selectCity = () => {
    dispatch(cityPending());
    refCity.current.snapTo(0);
  };

  const refCity = React.useRef();
  return (
    <View style={{flex: 1}}>
      <CityPicker refRBSheet={refCity} />
      <View style={styles.Container}>
        <TouchableOpacity style={styles.Item} onPress={() => selectCity()}>
          <Text style={styles.Lable}>Tỉnh/Thành phố</Text>
          <TextInput
            style={styles.Field}
            editable={false}
            selectTextOnFocus={false}
            value={myAddress.city.name}
          />
          <AntDesign
            name="down"
            size={18}
            color={appColor.hint}
            style={styles.Icon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.Item}>
          <Text style={styles.Lable}>Quận/Huyện</Text>
          <TextInput
            style={styles.Field}
            editable={false}
            selectTextOnFocus={false}
            value={myAddress.city.name}
          />
          <AntDesign
            name="down"
            size={18}
            color={appColor.hint}
            style={styles.Icon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.Item}>
          <Text style={styles.Lable}>Phường/Xã</Text>
          <TextInput
            style={styles.Field}
            editable={false}
            selectTextOnFocus={false}
            value={myAddress.city.name}
          />
          <AntDesign
            name="down"
            size={18}
            color={appColor.hint}
            style={styles.Icon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.ButtonLogin}>
          <Text style={styles.TextButton}>Hoàn thành</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: 20,
  },
  Item: {
    width: width - 40,
  },
  Field: {
    color: 'black',
    borderBottomColor: appColor.hint,
    borderBottomWidth: 0.5,
  },
  Lable: {
    marginTop: 30,
    color: appColor.hint,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  Icon: {
    position: 'absolute',
    top: 70,
    right: 0,
  },
  ButtonLogin: {
    backgroundColor: appColor.primary,
    height: 67,
    borderRadius: 19,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  TextButton: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
  },
});
