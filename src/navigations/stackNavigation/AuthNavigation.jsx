import React from 'react'
import AuthScreen from '../../components/AuthComponent/AuthScreen';

import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigation

