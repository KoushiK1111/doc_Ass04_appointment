import React from 'react';
import { Provider } from 'react-redux';
import MainStackNavigation from './src/navigation/MainStackNavigation';
import store from './src/redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <MainStackNavigation />
    </Provider>

  );
}

export default App;