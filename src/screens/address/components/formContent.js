import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Formik} from 'formik';

import {appColor} from '../../../assets/color';
import {cityPending} from '../../../redux/slice/addressSlice';
import BottomSheet from '../../../components/customs/bottomSheet';
import CityPicker from './cityPicker';
import DistrictPicker from './districtPicker';
import WardPicker from './wardPicker';
import {updatePending} from '../../../redux/slice/authSlice';

const {width} = Dimensions.get('window');

export default function FormContent() {
  const {myAddress} = useSelector(s => s.address);
  const {user, updateErrors, isLoading} = useSelector(s => s.auth);
  const dispatch = useDispatch();
  function address() {
    let value = '';
    if (myAddress.city.name !== '') value = myAddress.city.name;
    if (myAddress.district.name !== '')
      value = value + ',' + myAddress.district.name;
    if (myAddress.ward.name !== '') value = value + ',' + myAddress.ward.name;
    return value;
  }

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
      <Formik
        initialValues={{
          fullName: user.fullName ? user.fullName : '',
          phoneNumber: user.phoneNumber ? user.phoneNumber : '',
        }}
        onSubmit={values => {
          values.address = address();
          dispatch(updatePending({values}));
        }}>
        {formProps => (
          <View>
            <View style={styles.Item}>
              <Text style={styles.Lable}>Họ tên người nhận</Text>
              <TextInput
                style={styles.Field}
                placeholder="Aa.."
                onChangeText={formProps.handleChange('fullName')}
                value={formProps.values.fullName}
              />
            </View>
            {updateErrors.fullName && (
              <Text style={styles.Error}>{updateErrors.fullName}</Text>
            )}

            <View style={styles.Item}>
              <Text style={styles.Lable}>Số điện thoại</Text>
              <TextInput
                style={styles.Field}
                placeholder="84+"
                onChangeText={formProps.handleChange('phoneNumber')}
                value={formProps.values.phoneNumber}
              />
            </View>
            {updateErrors.phoneNumber && (
              <Text style={styles.Error}>{updateErrors.phoneNumber}</Text>
            )}

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
              {updateErrors.city && (
                <Text style={styles.Error}>{updateErrors.city}</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.Item}
              onPress={() => selectDistrict()}>
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
              {updateErrors.district && (
                <Text style={styles.Error}>{updateErrors.district}</Text>
              )}
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
              {updateErrors.ward && (
                <Text style={styles.Error}>{updateErrors.ward}</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.ButtonLogin}
              onPress={() => formProps.handleSubmit()}>
              <Text style={styles.TextButton}>
                {isLoading ? (
                  <ActivityIndicator color="white" size="large" />
                ) : (
                  'Hoàn thành'
                )}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 20,
  },
  Item: {
    width: width - 40,
    borderBottomColor: appColor.hint,
    borderBottomWidth: 0.6,
    marginBottom: 30,
  },
  Field: {
    color: 'black',
  },
  Lable: {
    color: appColor.hint,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  Icon: {
    position: 'absolute',
    top: 35,
    right: 0,
  },
  ButtonLogin: {
    backgroundColor: appColor.primary,
    height: 67,
    borderRadius: 19,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  TextButton: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
  },
  Error: {
    letterSpacing: 1.5,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#ff3333',
    marginTop: 5,
  },
});
