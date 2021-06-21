import React from 'react';
import styled from 'styled-components';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import FormLogin from './components/formSignUp';
import ContentTop from './components/contentTop';

function login() {
  const LoginMain = () => {
    return (
      <View style={styles.Container}>
        <ImageBackground
          style={styles.BG}
          source={require('../../assets/images/bgLogin.png')}>
          <ScrollView>
            <ContentTop />
            <FormLogin />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  };

  return LoginMain();
}

export default login;

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 30px;
`;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FBFCFC',
  },
  BG: {
    flex: 1,
  },
});
