import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

const win = Dimensions.get('window');
const topTab = ({title}) => {
  return (
    <Container>
      <BoxIcon>
        <Icon name="keyboard-arrow-left" size={30} />
      </BoxIcon>
      <BoxMid>
        <Title>{title}</Title>
      </BoxMid>
    </Container>
  );
};

export default topTab;

export const Container = styled.View`
  flex-direction: row;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom-color: #afbac3;
  border-bottom-width: 1px;
`;

const BoxIcon = styled.TouchableOpacity`
  margin-left: 10px;
  background: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
`;
const BoxMid = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${win.width - 90}px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-family: PTSans-BoldItalic;
`;
