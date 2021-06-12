import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/home';
import Profile from '../screens/profile';
import Cart from '../screens/cart';
import Search from '../screens/search';

const bottom = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'storefront' : 'storefront-outline';
            return (
              <IconMaterialCommunityIcons
                name={iconName}
                size={30}
                color={color}
              />
            );
          } else if (route.name === 'Search') {
            iconName = focused ? 'ios-search-sharp' : 'ios-search-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'ios-cart' : 'ios-cart-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'md-person' : 'md-person-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        style: {
          height: 70,
          paddingTop: 10,
          borderRadius: 10,
          margin: 10,
          position: 'absolute',
        },
      }}>
      <Tab.Screen name="Home" component={Home} options={{tabBarLabel: ''}} />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{tabBarLabel: ''}}
      />
      <Tab.Screen name="Cart" component={Cart} options={{tabBarLabel: ''}} />
      <Tab.Screen
        name="Account"
        component={Profile}
        options={{tabBarLabel: ''}}
      />
    </Tab.Navigator>
  );
};

export default bottom;
