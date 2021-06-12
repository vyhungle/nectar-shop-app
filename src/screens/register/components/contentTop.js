import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const contentTop = () => {
  return (
    <Container>
      <Title>Create an Account</Title>
    </Container>
  );
};

export default contentTop;

const Container = styled.View`
  flex-direction: column;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 30px;
`;
