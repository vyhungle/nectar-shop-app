import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {appColor} from '../../assets/color';
import BackIcon from '../../assets/images/left.svg';

export default function TopBar({title}) {
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.IconLeft}
        onPress={() => navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>
      <Text style={styles.Title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: appColor.border,
    borderBottomWidth: 1,
  },

  Title: {
    fontFamily: 'SVN-Gilroy Bold',
    fontSize: 20,
    letterSpacing: 1.5,
    marginLeft: 60,
  },
  IconLeft: {
    position: 'absolute',
    height: 60,
    width: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
