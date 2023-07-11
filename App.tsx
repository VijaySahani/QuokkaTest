import 'react-native-gesture-handler'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation/Navigation';
import SplashScreen from './src/Screens/SplashScreen';
import thunkMiddleware from 'redux-thunk';
import reducer from './src/Redux/reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
