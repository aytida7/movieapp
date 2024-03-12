import { View } from 'react-native'
import React from 'react'
import DetailItemSerial from './DetailItemSerial';

const SeriesScreenTwo = ({route}) => {
  const {item} = route.params ?? {};
  return (
    <View style={{flex:1}}>
    <DetailItemSerial itemInfo={item}/>
  </View>
  )
}

export default SeriesScreenTwo