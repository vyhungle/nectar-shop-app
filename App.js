import React from 'react';
import {ActivityIndicator} from 'react-native';
import AppNavigator from './src/navigations/appNavigator';
import styled from 'styled-components';

const App = () => {
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <ContainerLoading>
        <ActivityIndicator size="large" color="#3AB091" />
      </ContainerLoading>
    );
  }
  return <AppNavigator />;
};

export default App;

const ContainerLoading = styled.View`
  flex: 1;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
