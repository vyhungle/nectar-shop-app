import React from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';

import Catalog from './components/catalog';
import TopTab from '../../components/customs/topTab';
import Products from './components/products';

export default function Home() {
  const auth = useSelector(s => s.auth);
  return (
    <Container>
      <TopTab title="Shop" />
      <Catalog />
      <Products />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
