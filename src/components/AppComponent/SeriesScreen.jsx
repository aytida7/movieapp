import React from 'react'
import SeriesScreenOne from '../Items/SeriesScreenOne';
import SeriesScreenTwo from '../Items/SeriesScreenTwo';

import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();

const SeriesScreen = () => {
  
  return (
    <Stack.Navigator initialRouteName='SeriesScreenOne' screenOptions={{headerShown:false}}>
      <Stack.Screen name="SeriesScreenOne" component={SeriesScreenOne}/>
      <Stack.Screen name="SeriesScreenTwo" component={SeriesScreenTwo}/>
    </Stack.Navigator>
  )
}

export default SeriesScreen