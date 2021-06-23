import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from 'react-native-check-box';
import {useSelector, useDispatch} from 'react-redux';

import {appColor} from '../../assets/color';
import {checkCategory} from '../../redux/slice/productSplice';

export default function ListCategories() {
  const {filter} = useSelector(s => s.products);
  const {categories} = useSelector(s => s.categories);
  const dispatch = useDispatch();

  return (
    <View style={styles.BoxInput}>
      {categories.map((x, index) => (
        <CheckBox
          key={index}
          style={{paddingVertical: 2.5}}
          rightTextStyle={styles.TextInput}
          checkedCheckBoxColor={appColor.primary}
          uncheckedCheckBoxColor={appColor.hint}
          onClick={() => {
            var data = {
              index: index,
              value: !filter.isCheckList[index],
              id: x._id,
            };
            dispatch(checkCategory({data}));
          }}
          isChecked={filter.isCheckList[index]}
          rightText={x.name}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  BoxTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
