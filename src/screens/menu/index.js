import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {logout} from '../../redux/slice/authSlice';
import Info from './components/info';
import ListItemMenu from './components/listItemMenu';

export default function Index() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onPressLogin = () => {
    dispatch(logout());
  };
  return (
    <Container>
      <Info />
      <ListItemMenu />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const MenuItem = styled.TouchableOpacity``;

const TextMenuItem = styled.Text``;
