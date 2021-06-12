import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const Catalog = () => {
  const [acttive, setAccttive] = React.useState(1);
  return (
    <Container>
      <Item onPress={() => setAccttive(1)}>
        {acttive === 1 ? (
          <TextItemActtive>Mới nhất</TextItemActtive>
        ) : (
          <TextItem>Mới nhất</TextItem>
        )}
      </Item>

      <Item onPress={() => setAccttive(2)}>
        {acttive == 2 ? (
          <TextItemActtive>Quần áo</TextItemActtive>
        ) : (
          <TextItem>Quần áo</TextItem>
        )}
      </Item>

      <Item onPress={() => setAccttive(3)}>
        {acttive === 3 ? (
          <TextItemActtive>Giầy</TextItemActtive>
        ) : (
          <TextItem>Giầy</TextItem>
        )}
      </Item>

      <Item onPress={() => setAccttive(4)}>
        {acttive === 4 ? (
          <TextItemActtive>Túi xách</TextItemActtive>
        ) : (
          <TextItem>Túi xách</TextItem>
        )}
      </Item>

      <Item onPress={() => setAccttive(5)}>
        {acttive === 5 ? (
          <TextItemActtive>Thịnh hành</TextItemActtive>
        ) : (
          <TextItem>Thịnh hành</TextItem>
        )}
      </Item>
    </Container>
  );
};

export default Catalog;

const Container = styled.View`
  flex-direction: row;
  border-bottom-color: #afbac3;
  border-bottom-width: 1px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Item = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const TextItem = styled.Text`
  font-family: PTSans-Bold;
  color: #afbac3;
`;

const TextItemActtive = styled.Text`
  font-family: PTSans-Bold;
`;
