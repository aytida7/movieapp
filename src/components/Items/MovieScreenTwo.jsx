import { View, Text } from 'react-native'
import React from 'react'
import DetailItem from './DetailItem'

const MovieScreenTwo = ({route}) => {
    const {item} = route.params ?? {};
    
  return (
    <View style={{flex:1}}>
      <DetailItem itemInfo={item}/>
    </View>
  )
}

export default MovieScreenTwo