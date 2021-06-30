import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {appColor} from '../../../assets/color';

export default function Info() {
  const {user} = useSelector(s => s.auth);

  return (
    <View style={styles.Container}>
      <Image
        style={styles.Avatar}
        source={require('../../../assets/images/user.jpg')}
      />
      <View style={styles.BoxBody}>
        <Text style={styles.Name}>
          {user.fullName ? user.fullName : user.username}
        </Text>
        <Text style={styles.Email}>{user.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: 20,
    borderBottomColor: appColor.border,
    borderBottomWidth: 0.7,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  Avatar: {
    width: 63,
    height: 63,
    borderRadius: 27,
  },
  BoxBody: {
    marginLeft: 15,
  },
  Name: {
    fontSize: 20,
    fontFamily: 'SVN-Gilroy Bold',
    color: 'black',
  },
  Email: {
    fontFamily: 'SVN-Gilroy Medium',
    fontSize: 16,
    color: appColor.hint,
  },
});
