import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Formik} from 'formik';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {loginPending} from '../../../redux/slice/authSlice';

function FormLogin() {
  const {errors, isLoading} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <Container>
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
            <Field
              placeholder="Tài khoản"
              placeholderTextColor="gray"
              onChangeText={formProps.handleChange('username')}
              value={formProps.values.username}
            />
            {errors.username ? <Error>{errors.username}</Error> : null}
            <Field
              placeholder="Mật khẩu"
              placeholderTextColor="gray"
              onChangeText={formProps.handleChange('password')}
              value={formProps.values.password}
            />
            {errors.password ? <Error>{errors.password}</Error> : null}
            <BoxSubmit>
              <TextForgot>Quên mật khẩu?</TextForgot>
              <ButtonSubmit onPress={() => formProps.handleSubmit()}>
                <TextSubmit>
                  {isLoading ? (
                    <ActivityIndicator size="large" color="white" />
                  ) : (
                    'Đăng nhập'
                  )}
                </TextSubmit>
              </ButtonSubmit>
            </BoxSubmit>
          </View>
        )}
      </Formik>

      <BoxBottom>
        <TextTitle>Nếu bạn chưa có tài khoản? </TextTitle>
        <Register>
          <TextRegister onPress={() => navigation.navigate('RegisterScreen')}>
            Đăng Ký
          </TextRegister>
        </Register>
      </BoxBottom>
    </Container>
  );
}

export default FormLogin;

const Container = styled.View`
  flex: 1;
`;

const Field = styled.TextInput`
  height: 74px;
  background-color: #e8e8e8;
  border-color: gainsboro;
  border-width: 0.5px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  padding: 10px;
`;

const BoxSubmit = styled.View`
  flex-direction: column;
`;

const TextForgot = styled.Text`
  color: #3c3c43;
  align-self: flex-end;
  margin: 10px;
`;

const ButtonSubmit = styled.TouchableOpacity`
  height: 74px;
  background-color: #3ab091;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

const TextSubmit = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 17px;
`;

const Error = styled.Text`
  color: #ff3333;
`;

const BoxBottom = styled.View`
  margin-top: 40px;
  flex-direction: row;
  display: flex;
  justify-content: center;
`;

const TextTitle = styled.Text`
  font-size: 16px;
`;
const Register = styled.TouchableOpacity``;

const TextRegister = styled.Text`
  font-size: 16px;
  color: #3ab091;
`;
