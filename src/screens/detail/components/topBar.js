import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconLike from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const TopBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.goBack()}>
        <Icon name="keyboard-arrow-left" size={35} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButtonLike}>
        <IconLike name="hearto" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  Container: {
    width: width,
    position: 'absolute',
    zIndex: 1,
    padding: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  Button: {
    width: 45,
    height: 45,
    borderRadius: 40,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonLike: {
    width: 45,
    height: 45,
    borderRadius: 40,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 25,
    top: 15,
  },
});
