import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

import Home from '../screens/home';
import Profile from '../screens/menu';
import Cart from '../screens/cart';
import Search from '../screens/search';
import {appColor} from '../assets/color';
import StoreIcon from '../assets/images/storeBar.svg';
import StoreIconFocused from '../assets/images/storeBar2.svg';
import SearchIcon from '../assets/images/searchBar.svg';
import SearchIconFocused from '../assets/images/searchBar2.svg';
import CartIcon from '../assets/images/cartBar.svg';
import CartIconFocused from '../assets/images/cartBar2.svg';
import LikeIcon from '../assets/images/likeBar.svg';
import LikeIconFocused from '../assets/images/likeBar2.svg';
import UserIcon from '../assets/images/userBar.svg';
import UserIconFocused from '../assets/images/userBar2.svg';

const Bottom = () => {
  const {cart} = useSelector(s => s.cart);
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return focused ? (
              <StoreIconFocused width={30} height={30} />
            ) : (
              <StoreIcon width={30} height={30} />
            );
          } else if (route.name === 'Search') {
            return focused ? (
              <SearchIconFocused width={30} height={30} />
            ) : (
              <SearchIcon width={30} height={30} />
            );
          } else if (route.name === 'Like') {
            return focused ? (
              <LikeIconFocused width={30} height={30} />
            ) : (
              <LikeIcon width={30} height={30} />
            );
          } else if (route.name === 'Account') {
            return focused ? (
              <UserIconFocused width={30} height={30} />
            ) : (
              <UserIcon width={30} height={30} />
            );
          } else {
            return focused ? (
              <CartIconFocused width={30} height={30} />
            ) : (
              <CartIcon width={30} height={30} />
            );
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: appColor.primary,
        inactiveTintColor: 'black',
        style: {
          height: 70,
          borderRadius: 10,
          margin: 5,
          position: 'absolute',
          ...styles.shadow,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarBadge: cart.products ? cart.products.length : 0,
          tabBarBadgeStyle: {
            position: 'absolute',
            top: 15,
            left: 15,
            fontFamily: 'SVN-Gilroy Bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      />
      <Tab.Screen name="Like" component={Cart} />
      <Tab.Screen name="Account" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
});

export default Bottom;
