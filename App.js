import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {store}  from './src/redux/store'
import { Provider } from 'react-redux'
import MainNavigation from './src/navigations/MainNavigation';

export default function App() {
  
  return (
  <Provider store={store}>
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
  </Provider>
  );
}

