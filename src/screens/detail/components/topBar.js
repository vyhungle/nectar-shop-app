import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconLike from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {likeFavoritePending} from '../../../redux/slice/favoriteSlice';
import LikeIcon from '../../../assets/images/likeBar.svg';
import LikeIcon2 from '../../../assets/images/likeBar2.svg';

const {width} = Dimensions.get('window');

const TopBar = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {product} = useSelector(s => s.products);
  const {favorites} = useSelector(s => s.favorite);
  const like = () => {
    dispatch(likeFavoritePending({id: product._id}));
  };
  const IsLike = () => {
    const index = favorites.products.findIndex(
      x => x.product._id === product._id,
    );

    if (index === -1) {
      return <LikeIcon />;
    } else {
      return <LikeIcon2 />;
    }
  };
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.goBack()}>
        <Icon name="keyboard-arrow-left" size={35} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButtonLike} onPress={() => like()}>
        <IsLike />
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
