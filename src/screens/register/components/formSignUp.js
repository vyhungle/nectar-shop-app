import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {appColor} from '../../../assets/color';
import {Formik} from 'formik';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import {loginPending} from '../../../redux/slice/authSlice';

import {VIE} from '../../../assets/language';

export default function FormSignUp() {
  const {registerErrors, isLoading} = useSelector(state => state.auth);
  const errors = registerErrors;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView>
      <Formik
        initialValues={{
          username: '',
          password: '',
          confirmPassword: '',
          email: '',
        }}
        onSubmit={values => {
          // console.log(values);
          dispatch(loginPending({values}));
        }}>
        {formProps => (
          <View style={styles.Container}>
            <Text style={styles.Lable}>{VIE.login.username}</Text>
            <TextInput
              style={styles.Field}
              onChangeText={formProps.handleChange('username')}
              value={formProps.values.username}
            />
            {errors.username && (
              <Text style={styles.Error}>{errors.username}</Text>
            )}
            <Text style={styles.Lable}>{VIE.signup.email}</Text>
            <TextInput
              style={styles.Field}
              secureTextEntry={true}
              onChangeText={formProps.handleChange('email')}
              value={formProps.values.email}
            />
            {errors.email && <Text style={styles.Error}>{errors.email}</Text>}

            <Text style={styles.Lable}>{VIE.signup.password}</Text>
            <TextInput
              style={styles.Field}
              onChangeText={formProps.handleChange('password')}
              value={formProps.values.password}
            />
            {errors.password && (
              <Text style={styles.Error}>{errors.password}</Text>
            )}

            <Text style={styles.Lable}>{VIE.signup.confirm}</Text>
            <TextInput
              style={styles.Field}
              onChangeText={formProps.handleChange('confirmPassword')}
              value={formProps.values.confirmPassword}
            />
            {errors.confirmPassword && (
              <Text style={styles.Error}>{errors.confirmPassword}</Text>
            )}

            <TouchableOpacity
              style={styles.ButtonLogin}
              onPress={() => formProps.handleSubmit()}>
              <Text style={styles.TextButton}>
                {isLoading ? (
                  <ActivityIndicator size="large" color="white" />
                ) : (
                  VIE.signup.textButton
                )}
              </Text>
            </TouchableOpacity>
            <View style={styles.BoxBottom}>
              <Text style={styles.TextBottom}>{VIE.signup.textBottom}</Text>
              <TouchableOpacity
                style={styles.BoxTextSU}
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.TextSignup}> {VIE.signup.login}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
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
