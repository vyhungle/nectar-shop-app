import React from 'react';
import {StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {wardPending} from '../../../redux/slice/addressSlice';

const DistrictPicker = props => {
  const {district} = useSelector(s => s.address);
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
    dispatch(wardPending({value}));
  };

  return (
    <FlatList
      data={district}
      keyExtractor={(item, index) => index}
      renderItem={item => render(item.item)}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default DistrictPicker;

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
