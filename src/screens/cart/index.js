import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

import TopTab from '../../components/customs/topTab';
export default function index() {
  return (
    <Container>
      <TopTab title="Giỏ hàng" />
      <Text></Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
