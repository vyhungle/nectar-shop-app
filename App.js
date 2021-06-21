import React from 'react';
import AppNavigator from './src/navigations/appNavigator';
import {useSelector} from 'react-redux';

import Loading from './src/screens/splash/splash';

const App = () => {
  const {isLoading} = useSelector(s => s.products);

  if (isLoading) {
    return <Loading />;
  }
  return <AppNavigator />;
};

export default App;
