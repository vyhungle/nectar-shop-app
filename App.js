import React from 'react';
import AppNavigator from './src/navigations/appNavigator';
import {useSelector} from 'react-redux';

import Loading from './src/screens/splash/splash';

const App = () => {
  const {isAuthLoading} = useSelector(s => s.auth);

  if (isAuthLoading) {
    return <Loading />;
  }
  return <AppNavigator />;
};

export default App;
