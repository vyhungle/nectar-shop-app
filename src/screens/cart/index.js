import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {appColor} from '../../assets/color';
import {useSelector} from 'react-redux';

import TopTab from '../../components/customs/TopBarMain';
import ListItem from './components/listItem';
import ButtonCheckout from './components/buttonCheckout';
import Loading from '../../components/customs/loadingCover';

export default function Index() {
  const {isPayment} = useSelector(s => s.cart);

  return (
    <View style={styles.Container}>
      {isPayment && <Loading />}
      <TopTab title="Giỏ hàng" />
      <View style={styles.BoxContainer}>
        <ListItem />
        <ButtonCheckout />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    flex: 1,
  },
  BoxContainer: {
    borderTopColor: appColor.border,
    borderTopWidth: 1,
    flex: 1,
  },
});
