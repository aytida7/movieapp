import React from 'react'
import MovieScreen from '../../components/AppComponent/MovieScreen';
import SeriesScreen from '../../components/AppComponent/SeriesScreen';
import HomeScreen from '../../components/AppComponent/HomeScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        tabBarStyle:{
            position:'absolute',
            bottom:25,
            left:20,
            right:20,
            height:70,
            backgroundColor:'#9a7aff',
            borderRadius:100,
            elevation:10,
            shadowColor:'#000000',
            shadowOffset:{
                width:20,
                height:10
            },
            shadowOpacity:1,
            shadowRadius:3.5,
            
        },
        tabBarActiveBackgroundColor:'#fff5cc',
        tabBarItemStyle:{
          borderRadius:100
        }
        
        
    }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{tabBarIcon:({focused})=>{
        {focused? iconColor='#000000':iconColor='#ffffff'}
        return (<Ionicons name="home" size={35} color="black" />)
      }}} />
      <Tab.Screen name="MovieScreen" component={MovieScreen} options={{tabBarIcon:({focused})=>{
        {focused? iconColor='#000000':iconColor='#ffffff'}
        return (<MaterialCommunityIcons name="movie-play" size={35} color="black" />)
      }}} />
      <Tab.Screen name="SeriesScreen" component={SeriesScreen} options={{tabBarIcon:({focused})=>{
        {focused? iconColor='#000000':iconColor='#ffffff'}
        return (<MaterialIcons name="live-tv" size={35} color="black" />)
      }}} />
      
    </Tab.Navigator>
  )
}

export default AppNavigation