import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import {useSelector, useDispatch} from 'react-redux';
import {Formik} from 'formik';

import {appColor} from '../../assets/color';
import TopBar from '../../components/customs/topBarBack';
import {reviewPending} from '../../redux/slice/productSplice';

export default function AddReview() {
  const {user} = useSelector(s => s.auth);
  const {product, isReview} = useSelector(s => s.products);
  const dispatch = useDispatch();
  const [star, setStar] = React.useState(5);
  return (
    <Formik
      initialValues={{
        id: product._id,
        body: '',
        star: star,
      }}
      onSubmit={values => {
        values.star = star;
        dispatch(reviewPending({values}));
      }}>
      {formProps => (
        <View style={styles.Container}>
          <TopBar title="Viết bài đánh giá" />
          <View style={styles.Info}>
            <Image
              source={require('../../assets/images/user.jpg')}
              style={styles.Avatar}
            />
            <View style={styles.BoxName}>
              <Text style={styles.Name}>
                {user.fullName ? user.fullName : user.username}
              </Text>
              <Text style={styles.Email}>@{user.email}</Text>
              <View style={styles.BoxStart}>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  rating={star}
                  fullStarColor={appColor.star}
                  starSize={20}
                  selectedStar={rating => setStar(rating)}
                />
              </View>
            </View>
          </View>

          <View style={styles.BoxField}>
            <TextInput
              placeholder="Aa.."
              style={styles.Field}
              placeholderTextColor={appColor.hint}
              numberOfLines={15}
              onChangeText={formProps.handleChange('body')}
              value={formProps.values.body}
            />
          </View>

          <TouchableOpacity
            style={styles.ButtonAdd}
            onPress={() => formProps.handleSubmit()}>
            <Text style={styles.TextAdd}>
              {isReview ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                'Đăng bài'
              )}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Info: {
    flexDirection: 'row',
    padding: 10,
  },
  Avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  BoxName: {
    marginLeft: 10,
  },
  BoxStart: {
    width: 100,
    marginTop: 5,
  },
  Name: {
    fontSize: 16,
    fontFamily: 'SVN-Gilroy Bold',
    color: 'black',
  },
  Email: {
    fontFamily: 'SVN-Gilroy Medium',
    fontSize: 14,
    color: appColor.hint,
  },

  BoxField: {
    paddingHorizontal: 10,
  },
  Field: {
    color: 'black',
    fontFamily: 'SVN-Gilroy Medium',
    borderColor: appColor.border,
    borderWidth: 1,
    textAlignVertical: 'top',
    padding: 10,
    borderRadius: 12,
  },
  ButtonAdd: {
    backgroundColor: appColor.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 80,
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 10,
  },
  TextAdd: {
    fontFamily: 'SVN-Gilroy Bold',
    fontSize: 14,
    color: 'white',
  },
});
