import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import BottomTab from './bottom';
import Login from '../screens/login';
import Register from '../screens/register';
import Detail from '../screens/detail';

export default function AppNavigator() {
  const RootStack = createStackNavigator();
  const {isAuth} = useSelector(s => s.auth);
  return (
    <NavigationContainer>
      {isAuth ? (
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
            // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          <RootStack.Screen name="BottomTab" component={BottomTab} />
          <RootStack.Screen name="Detail" component={Detail} />
        </RootStack.Navigator>
      ) : (
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          <RootStack.Screen name="LoginScreen" component={Login} />
          <RootStack.Screen name="RegisterScreen" component={Register} />
        </RootStack.Navigator>
      )}
    </NavigationContainer>
  );
}
