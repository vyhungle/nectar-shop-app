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
import BottomSheet from '../../../components/customs/bottomSheet';
import CityPicker from './cityPicker';
import DistrictPicker from './districtPicker';
import WardPicker from './wardPicker';

const {width} = Dimensions.get('window');

export default function FormContent() {
  const {myAddress} = useSelector(s => s.address);
  const dispatch = useDispatch();

  const selectCity = () => {
    refRBSheet.current.open();
  };
  const selectDistrict = () => {
    refRBSheetDistrict.current.open();
  };
  const selectWord = () => {
    refRBSheetWard.current.open();
  };

  const refRBSheet = React.useRef();
  const refRBSheetDistrict = React.useRef();
  const refRBSheetWard = React.useRef();
  return (
    <View style={styles.Container}>
      <BottomSheet
        refRBSheet={refRBSheet}
        component={CityPicker}
        height={500}
      />
      <BottomSheet
        refRBSheet={refRBSheetDistrict}
        component={DistrictPicker}
        height={500}
      />
      <BottomSheet
        refRBSheet={refRBSheetWard}
        component={WardPicker}
        height={500}
      />
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

      <TouchableOpacity style={styles.Item} onPress={() => selectDistrict()}>
        <Text style={styles.Lable}>Quận/Huyện</Text>
        <TextInput
          style={styles.Field}
          editable={false}
          selectTextOnFocus={false}
          value={myAddress.district.name}
        />
        <AntDesign
          name="down"
          size={18}
          color={appColor.hint}
          style={styles.Icon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.Item} onPress={() => selectWord()}>
        <Text style={styles.Lable}>Phường/Xã</Text>
        <TextInput
          style={styles.Field}
          editable={false}
          selectTextOnFocus={false}
          value={myAddress.ward.name}
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
