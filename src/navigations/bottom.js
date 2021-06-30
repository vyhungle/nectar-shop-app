import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

import Home from '../screens/home';
import Profile from '../screens/profile';
import Cart from '../screens/cart';
import Search from '../screens/search';
import OrderAccepted from '../screens/payment/components/orderAccepted';
import {appColor} from '../assets/color';

const Bottom = () => {
  const {cart} = useSelector(s => s.cart);
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'storefront' : 'storefront-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'shopping-search' : 'shopping-search';
          } else if (route.name === 'Like') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
          } else {
            iconName = focused ? 'shopping' : 'shopping-outline';
          }

          return (
            <IconMaterialCommunityIcons
              name={iconName}
              size={30}
              color={color}
            />
          );
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
            left: 11,
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
