import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import StarRating from 'react-native-star-rating';

import {appColor} from '../../../assets/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const {width} = Dimensions.get('window');

export default function content({product}) {
  return (
    <View style={styles.Container}>
      <Text style={styles.TextName}>{product.name}</Text>
      <Text style={styles.TextUnit}>{product.uint}</Text>
      <TouchableOpacity style={styles.Heart}>
        <AntDesign name="hearto" size={24} color={appColor.hint} />
      </TouchableOpacity>

      <View style={styles.BoxPrice}>
        <View style={styles.BoxQuantity}>
          <TouchableOpacity style={styles.BoxIcon}>
            <Entypo name="minus" size={24} color={appColor.primary} />
          </TouchableOpacity>

          <View style={styles.Quantity}>
            <Text>1</Text>
          </View>
          <TouchableOpacity style={styles.BoxIcon}>
            <Entypo name="plus" size={24} color={appColor.primary} />
          </TouchableOpacity>
        </View>
        <Text style={styles.Price}>{product.price}đ</Text>
      </View>

      <View style={styles.BoxDetail}>
        <TouchableOpacity style={styles.BoxNav}>
          <Text style={styles.TextNav}>Chi tiết sản phẩm</Text>
          <View style={styles.IconNav}>
            <AntDesign name="down" size={20} color="black" />
          </View>
        </TouchableOpacity>
        <Text style={styles.TextBodyNav}>{product.detail}</Text>
      </View>

      <View style={styles.BoxDetail}>
        <TouchableOpacity style={styles.BoxNav}>
          <Text style={styles.TextNav}>Đánh giá</Text>
          <View style={styles.StartNav}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={product.review.start}
              fullStarColor={appColor.star}
              starSize={20}
            />
          </View>
          <View style={styles.IconNav}>
            <AntDesign name="right" size={20} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.ButtonAdd}>
        <Text style={styles.TextButton}>Thêm Vào Giỏ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: 20,
  },
  TextName: {
    fontSize: 24,
    fontFamily: 'SVN-Gilroy Bold',
  },
  TextUnit: {
    fontFamily: 'SVN-Gilroy Medium',
    fontSize: 16,
    color: appColor.hint,
  },
  Heart: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  BoxPrice: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  Price: {
    fontSize: 24,
    fontFamily: 'SVN-Gilroy Bold',
    position: 'absolute',
    right: 0,
  },
  BoxQuantity: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  BoxIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Quantity: {
    width: 45.67,
    height: 45.67,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
    borderWidth: 1,
    borderColor: appColor.border,
    marginHorizontal: 10,
  },

  BoxDetail: {
    paddingVertical: 20,
    borderTopColor: appColor.border,
    borderTopWidth: 1,
  },

  BoxNav: {
    display: 'flex',
    flexDirection: 'row',
  },
  IconNav: {
    position: 'absolute',
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextNav: {
    fontSize: 16,
    fontFamily: 'SVN-Gilroy Medium',
  },
  TextBodyNav: {
    fontSize: 13,
    fontFamily: 'SVN-Gilroy Medium',
    color: appColor.hint,
    marginTop: 10,
  },
  StartNav: {
    width: 100,
    position: 'absolute',
    right: 30,
  },

  ButtonAdd: {
    marginTop: 10,
    backgroundColor: appColor.primary,
    height: 67,
    width: width - 40,
    borderRadius: 19,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextButton: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'SVN-Gilroy Medium',
  },
});
