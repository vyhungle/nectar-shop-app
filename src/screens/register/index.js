import React from 'react';
import styled from 'styled-components';

import FormLogin from './components/form';
import ContentTop from './components/contentTop';

function login() {
  const LoginMain = () => {
    return (
      <Container>
        <ContentTop />
        <FormLogin />
      </Container>
    );
  };

  return LoginMain();
}

export default login;

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 30px;
`;
