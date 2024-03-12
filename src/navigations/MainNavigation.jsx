import {SafeAreaView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import AppNavigation from './bottomTabNavigation/AppNavigation';
import AuthNavigation from './stackNavigation/AuthNavigation'

const MainNavigation = () => {
    const isAuthenticated=useSelector(state=>state.Auth.isAuthenticated);
  return (
    <SafeAreaView style={{flex: 1}}>
      {isAuthenticated?<AppNavigation/>:<AuthNavigation/>}
    </SafeAreaView>
  )
}

export default MainNavigation