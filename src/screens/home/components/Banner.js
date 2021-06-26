import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import {appColor} from '../../../assets/color/index';

const {width} = Dimensions.get('window');

export default function sliderImage() {
  const slides = [
    {
      key: 1,
      image:
        'https://res.cloudinary.com/web-img/image/upload/v1624540900/samples/banner2_celtii.png',
    },
    {
      key: 2,
      image:
        'https://res.cloudinary.com/web-img/image/upload/v1624540919/samples/banner1_ia6bvi.png',
    },
    {
      key: 3,
      image:
        'https://res.cloudinary.com/web-img/image/upload/v1624540926/samples/banner3_sgjwge.png',
    },
  ];

  function renderImage({item}) {
    return (
      <View style={styles.Container}>
        <Image source={{uri: item.image}} style={styles.IMG} />
        {/* <View style={styles.BoxCover} /> */}
      </View>
    );
  }
  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderImage}
      nextLabel={false}
      showDoneButton={false}
      dotStyle={{backgroundColor: appColor.bannerDot,marginTop:50}}
      activeDotStyle={{backgroundColor: appColor.primary,marginTop:50,width:30}}
    />
  );
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 20,
    width: width,
    height: 140,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BoxCover: {
    width: width - 40,
    height: 120,
    backgroundColor: 'rgba(0,0,0,.05)',
    zIndex: 10,
    position: 'absolute',
  },
  IMG: {
    width: width - 40,
    height: 140,
    borderWidth: 1,
    borderColor: appColor.border,
    borderRadius: 18,
    overflow: 'hidden',
  },
});
