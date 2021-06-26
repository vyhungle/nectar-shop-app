import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {logout} from '../../redux/slice/authSlice';
import TopTab from '../../components/customs/topTab';

export default function Index() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onPressLogin = () => {
    dispatch(logout());
  };
  return (
    <Container>
      <TopTab title="Thông tin cá nhân" />
      <MenuItem onPress={() => onPressLogin()}>
        <TextMenuItem>Đăng nhập</TextMenuItem>
      </MenuItem>
      <MenuItem onPress={() => navigation.navigate('Address')}>
        <TextMenuItem>address</TextMenuItem>
      </MenuItem>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const MenuItem = styled.TouchableOpacity``;

const TextMenuItem = styled.Text``;
