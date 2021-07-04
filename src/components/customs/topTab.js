import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ContentSheet from './contentSheetFilterCategory';
import BottomSheet from './bottomSheet';
import BackIcon from '../../assets/images/left.svg';
import FilterIcon from '../../assets/images/filter.svg';

export default function TopBar({title}) {
  const navigation = useNavigation();
  const refRBSheet = React.useRef();
  return (
    <View style={styles.Container}>
      <BottomSheet
        refRBSheet={refRBSheet}
        component={ContentSheet}
        height={450}
      />
      <TouchableOpacity
        style={styles.IconLeft}
        onPress={() => navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>
      <Text style={styles.Title}>{title}</Text>
      <TouchableOpacity
        style={styles.IconRight}
        onPress={() => refRBSheet.current.open()}>
        <FilterIcon />
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
    left: 0,
    height: 60,
    width: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconRight: {
    position: 'absolute',
    right: 0,
    height: 60,
    width: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
