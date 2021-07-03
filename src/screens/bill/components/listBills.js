import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {appColor} from '../../../assets/color';
import moment from 'moment';
import 'moment/locale/vi';
moment.locale('vi');

import SingleBill from './singleBill';

const ListBills = () => {
  const {bills} = useSelector(s => s.cart);
  const renderStatus = value => {
    if (value === -1) {
      return <Text style={styles.Status2}>Đã hủy</Text>;
    }
    if (value === 1) {
      return <Text style={styles.Status1}>Đã giao</Text>;
    } else {
      return <Text style={styles.Status0}>Đang chờ xử lý</Text>;
    }
  };
  const total = e => {
    const parse = e.total;
    return parseInt(parse, 10);
  };
  return (
    <View style={styles.Container}>
      {bills.map((e, index) => (
        <View style={styles.BoxContainer} key={index}>
          <View style={styles.BoxItem}>
            <SingleBill products={e.products} />
          </View>

          <View style={styles.BoxTotal}>
            <Text style={styles.QuantityText}>
              Số lượng: {e.products.length}
            </Text>
            <Text style={styles.TotalText}>
              Thành tiền:{' '}
              {total(e)
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
              đ
            </Text>
          </View>

          <View style={styles.StatusBox}>
            <Text style={styles.DateText}>
              Ngày đặt: {moment(e.createdAt).add('days').calendar()}
            </Text>
            {renderStatus(e.status)}
          </View>
        </View>
      ))}

      <View style={styles.BoxTotal}></View>
    </View>
  );
};

export default ListBills;

const styles = StyleSheet.create({
  Container: {},
  BoxContainer: {
    borderBottomWidth: 5,
    borderBottomColor: appColor.border,
  },
  BoxItem: {},
  BoxTotal: {
    flexDirection: 'row',
    borderBottomColor: appColor.border,
    borderBottomWidth: 0.7,
    height: 30,
    display: 'flex',
    alignItems: 'center',
  },
  QuantityText: {
    fontFamily: 'SVN-Gilroy Medium',
    fontSize: 16,
    marginLeft: 5,
  },
  TotalText: {
    fontFamily: 'SVN-Gilroy Medium',
    fontSize: 16,
    position: 'absolute',
    right: 5,
  },
  StatusBox: {
    flexDirection: 'row',
    borderBottomColor: appColor.border,
    borderBottomWidth: 0.7,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  DateText: {
    fontFamily: 'SVN-Gilroy Medium',
    fontSize: 16,
  },
  Status1: {
    color: '#4BB543',
    fontFamily: 'SVN-Gilroy Bold',
    fontSize: 16,
    position: 'absolute',
    right: 5,
  },
  Status2: {
    color: appColor.star,
    fontFamily: 'SVN-Gilroy Bold',
    fontSize: 16,
    position: 'absolute',
    right: 5,
  },
  Status0: {
    color: '#1E90FF',
    fontFamily: 'SVN-Gilroy Bold',
    fontSize: 16,
    position: 'absolute',
    right: 5,
  },
});
