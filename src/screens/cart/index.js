import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

import TopTab from '../../components/customs/topTab';
import Sheet from '../search/components/contentSheet';
export default function index() {
  return (
    <Container>
      <TopTab title="Giỏ hàng" />
      <Sheet />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 15px;
`;
