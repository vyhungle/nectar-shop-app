import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

import ContentTop from './components/contentTop';
import FormLogin from './components/formLogin';

export default function index() {
  return (
    <View style={styles.Container}>
      <ImageBackground
        style={styles.BG}
        source={require('../../assets/images/bgLogin.png')}>
        <ContentTop />
        <FormLogin />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FBFCFC',
  },
  BG: {
    flex: 1,
  },
});
