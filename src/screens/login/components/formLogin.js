import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Formik} from 'formik';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {loginPending} from '../../../redux/slice/authSlice';
import {appColor} from '../../../assets/color';
import {VIE} from '../../../assets/language';

export default function FormLogin() {
  const {errors, isLoading} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={values => {
          dispatch(loginPending({values}));
        }}>
        {formProps => (
          <View>
            <Text style={styles.Lable}>{VIE.login.username}</Text>
            <TextInput
              style={styles.Field}
              onChangeText={formProps.handleChange('username')}
              value={formProps.values.username}
            />
            {errors.username && (
              <Text style={styles.Error}>{errors.username}</Text>
            )}
            <Text style={styles.Lable}>{VIE.login.password}</Text>
            <TextInput
              style={styles.Field}
              secureTextEntry={true}
              onChangeText={formProps.handleChange('password')}
              value={formProps.values.password}
            />
            {errors.password && (
              <Text style={styles.Error}>{errors.password}</Text>
            )}
            <Text style={styles.TextForgot}>{VIE.login.forgot}</Text>
            <TouchableOpacity
              style={styles.ButtonLogin}
              onPress={() => formProps.handleSubmit()}>
              <Text style={styles.TextButton}>
                {isLoading ? (
                  <ActivityIndicator size="large" color="white" />
                ) : (
                  VIE.login.textButton
                )}
              </Text>
            </TouchableOpacity>
            <View style={styles.BoxBottom}>
              <Text style={styles.TextBottom}>{VIE.login.textBottom}</Text>
              <TouchableOpacity
                style={styles.BoxTextSU}
                onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={styles.TextSignup}> {VIE.login.signup}</Text>
              </TouchableOpacity>
            </View>
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
  Lable: {
    marginTop: 30,
    color: appColor.hint,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  Field: {
    color: 'black',
    borderBottomColor: appColor.hint,
    borderBottomWidth: 0.5,
  },
  TextForgot: {
    fontSize: 14,
    letterSpacing: 1.3,
    alignSelf: 'flex-end',
    marginTop: 15,
    fontFamily: 'Roboto-Regular',
  },
  ButtonLogin: {
    backgroundColor: appColor.primary,
    height: 67,
    borderRadius: 19,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  TextButton: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
  },
  BoxBottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    flexDirection: 'row',
  },
  TextBottom: {
    letterSpacing: 1.5,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
  BoxTextSU: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  TextSignup: {
    letterSpacing: 1.5,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: appColor.primary,
  },
  Error: {
    letterSpacing: 1.5,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#ff3333',
    marginTop: 5,
  },
});
