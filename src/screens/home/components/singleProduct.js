import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const win = Dimensions.get('window');
const widthImage = win.width / 2 - 4;
export default function SingleProduct({product}) {
  const navigation = useNavigation();
  return (
    <Container
      onPress={() =>
        navigation.navigate('Detail', {
          product: product,
        })
      }>
      <Image
        source={{
          uri: product.image[0],
        }}
      />
      <BoxBody>
        <Price>{product.price}</Price>
        <Name>{product.name}</Name>
      </BoxBody>
      <IconLike>
        <Icon name="md-bookmark-outline" size={27} />
        {/* md-bookmark */}
      </IconLike>
      <IconAdd>
        <TextIconAdd>+</TextIconAdd>
      </IconAdd>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  width: ${win.width / 2}px;
  height: 270px;
  border-color: #afbac3;
  border-width: 0.5px;
  padding: 1px;
`;

const Image = styled.Image`
  width: ${widthImage}px;
  height: 200px;
`;

const BoxBody = styled.View`
  padding: 10px;
`;

const Name = styled.Text`
  font-family: 'PTSans-Regular';
`;

const Price = styled.Text`
  font-family: 'PTSans-Bold';
  font-size: 18px;
`;

const IconAdd = styled.TouchableOpacity`
  background-color: #2c2e33;
  border-top-left-radius: 15px;
  width: 35px;
  height: 35px;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextIconAdd = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 20px;
`;

const IconLike = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
`;
