import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ContentSheet from '../../../components/customs/contentSheetFilterMain';
import BottomSheet from '../../../components/customs/bottomSheet';
import BackIcon from '../../../assets/images/left.svg';
import FilterIcon from '../../../assets/images/filter.svg';

const {height} = Dimensions.get('window');
export default function TopBar({title}) {
  const navigation = useNavigation();
  const refRBSheet = React.useRef();
  return (
    <View style={styles.Container}>
      <BottomSheet
        refRBSheet={refRBSheet}
        component={ContentSheet}
        height={height}
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
