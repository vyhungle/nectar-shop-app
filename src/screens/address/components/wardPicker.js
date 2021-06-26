import React from 'react';
import {StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {chooseWard} from '../../../redux/slice/addressSlice';

const WardPicker = props => {
  const {ward} = useSelector(s => s.address);
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
    dispatch(chooseWard({value}));
  };

  return (
    <FlatList
      data={ward}
      keyExtractor={(item, index) => index}
      renderItem={item => render(item.item)}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default WardPicker;

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
