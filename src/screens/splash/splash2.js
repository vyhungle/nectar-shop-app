import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import {appColor} from '../../assets/color';
import IconLogo from '../../assets/images/iconLogWhite.svg';

export default function splash2({navigation}) {
  return (
    <View style={styles.Container}>
      <ImageBackground
        style={styles.BG}
        source={require('../../assets/images/bgSplash.png')}>
        <View style={{flex: 1}} />
        <View style={styles.Main}>
          <IconLogo />
          <View style={styles.BoxTitle}>
            <Text style={styles.Title}>Welcome</Text>
            <Text style={styles.Title}>to our store</Text>
            <Text style={styles.Cap}>
              Ger your groceries in as fast as one hour
            </Text>
            <TouchableOpacity
              style={styles.ButtonContinue}
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.TextButtonContinue}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  BG: {
    flex: 1,
  },
  Main: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  BoxTitle: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  Title: {
    fontSize: 48,
    color: 'white',
  },
  Cap: {
    color: 'white',
    fontSize: 16,
  },
  ButtonContinue: {
    height: 67,
    width: 353,
    backgroundColor: appColor.primary,
    borderRadius: 19,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
  },
  TextButtonContinue: {
    color: 'white',
  },
});
