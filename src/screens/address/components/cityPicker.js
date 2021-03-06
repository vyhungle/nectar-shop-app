import React from 'react';
import {StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {districtPending} from '../../../redux/slice/addressSlice';

const CityPicker = props => {
  const {city} = useSelector(s => s.address);
  const dispatch = useDispatch();

  const render = item => {
    return (
      <TouchableOpacity style={styles.Item} onPress={() => picker(item)}>
        <Text style={styles.TextItem}>{item.Title}</Text>
      </TouchableOpacity>
    );
  };
  const picker = value => {
    props.current.close();
    dispatch(districtPending({value}));
  };

  return (
    <FlatList
      data={city}
      keyExtractor={(item, index) => index}
      renderItem={item => render(item.item)}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CityPicker;

const styles = StyleSheet.create({
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
