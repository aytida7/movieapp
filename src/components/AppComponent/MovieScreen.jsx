import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();
import MovieScreenOne from '../Items/MovieScreenOne';
import MovieScreenTwo from '../Items/MovieScreenTwo';
const MovieScreen = () => {
  return (
    <Stack.Navigator initialRouteName='MovieScreenOne' screenOptions={{headerShown:false}}>
      <Stack.Screen name="MovieScreenOne" component={MovieScreenOne}/>
      <Stack.Screen name="MovieScreenTwo" component={MovieScreenTwo} />
    </Stack.Navigator>
  )
}

export default MovieScreen











