import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const contentTop = () => {
  return (
    <Container>
      {/* <Logo>
                <TextLogo>Logo</TextLogo>
            </Logo> */}
      <Title>Hey, Welcome Back!</Title>
    </Container>
  );
};

export default contentTop;

const Container = styled.View`
  flex-direction: column;
`;
const Logo = styled.View`
  background-color: #f9bd73;
  width: 70px;
  height: 70px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextLogo = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 20px;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 30px;
`;
