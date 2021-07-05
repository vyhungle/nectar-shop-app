import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import StarRating from 'react-native-star-rating';
import {appColor} from '../../../assets/color';
import moment from 'moment';
import 'moment/locale/vi';
moment.locale('vi');

export default function singleReview({content}) {
  return (
    <View style={styles.Container}>
      <View style={styles.BoxTop}>
        <Image
          source={require('../../../assets/images/user.jpg')}
          style={styles.Avatar}
        />
        <View style={styles.BoxName}>
          <Text style={styles.Name}>
            {content.user.fullName
              ? content.user.fullName
              : content.user.username}
          </Text>
          <View style={styles.BoxStar}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={content.star}
              fullStarColor={appColor.star}
              starSize={10}
            />
          </View>
        </View>
      </View>

      <View style={styles.BoxBody}>
        <Text style={styles.TextBody}>{content.body}</Text>
        <Text style={styles.TextTime}>
          {moment(content.createdAt).add('days').calendar()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    borderBottomColor: appColor.border,
    borderBottomWidth: 1,
    padding: 10,
  },
  BoxTop: {
    flexDirection: 'row',
  },
  Avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  BoxName: {
    marginLeft: 10,
  },
  Name: {},
  BoxStar: {
    paddingVertical: 5,
    width: 50,
  },

  BoxBody: {
    paddingLeft: 50,
  },
  TextBody: {
    fontFamily: 'SVN-Gilroy Medium',
    fontSize: 14,
  },
  TextTime: {
    fontFamily: 'SVN-Gilroy Medium',
    fontSize: 14,
    color: appColor.hint,
  },
});
