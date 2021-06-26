import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {useSelector, useDispatch} from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import {appColor} from '../../../assets/color';

const {width, height} = Dimensions.get('window');

const CityPicker = props => {
  const sheetRef = props.refRBSheet;
  const {city} = useSelector(s => s.address);
  const render = item => {
    return (
      <TouchableOpacity
        style={styles.Item}
        onPress={() => sheetRef.current.snapTo(1)}>
        <Text style={styles.TextItem}>{item.Title}</Text>
      </TouchableOpacity>
    );
  };
  const renderContent = () => (
    <View style={styles.Container}>
      <View style={styles.BoxLine}>
        <View style={styles.Line} />
      </View>
      <FlatList
        data={city}
        keyExtractor={(item, index) => index}
        renderItem={item => render(item.item)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[height / 1.5, height / 1.5, 0]}
      borderRadius={10}
      renderContent={renderContent}
      enableBottomInitialAnimation={true}
    />
  );
};

export default CityPicker;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FAFAF8',
    width: width,
  },
  BoxLine: {
    height: 30,
    width: width,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Line: {
    backgroundColor: appColor.primary,
    borderRadius: 5,
    height: 10,
    width: 50,
  },
  Item: {
    height: 30,
    display: 'flex',
    paddingLeft: 20,
    justifyContent: 'center',
  },
  TextItem: {
    fontSize: 18,
    fontFamily: 'SVN-Gilroy Medium',
    color: 'black',
  },
});
