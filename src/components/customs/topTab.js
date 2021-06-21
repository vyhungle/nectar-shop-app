import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export default function TopBar({title}) {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.IconLeft}
        onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={25} />
      </TouchableOpacity>
      <Text style={styles.Title}>{title}</Text>
      <TouchableOpacity style={styles.IconRight}>
        <AntDesign name="filter" size={25} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  Title: {
    fontFamily: 'SVN-Gilroy Bold',
    fontSize: 20,
    letterSpacing: 1.5,
  },
  IconLeft: {
    position: 'absolute',
    left: 20,
  },
  IconRight: {
    position: 'absolute',
    right: 20,
  },
});
