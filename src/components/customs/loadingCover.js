import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {appColor} from '../../assets/color';

const {width, height} = Dimensions.get('window');
export default function loadingCover() {
  return (
    <View style={styles.Container}>
      <ActivityIndicator size="large" color={appColor.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width,
    height: height + 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,.1)',
  },
});
