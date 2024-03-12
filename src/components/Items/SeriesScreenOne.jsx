import { View, Text, FlatList, Image, TouchableOpacity,ActivityIndicator } from 'react-native'
import React from 'react'
import { useGetDataSeriesQuery } from '../../redux/Api/Api';

const SeriesScreenOne = ({navigation}) => {
    const {data,isError,isFetching,isLoading,isSuccess}=useGetDataSeriesQuery();
    
    const renderItem = ({ item }) => {
      const Img='https://image.tmdb.org/t/p/original'+item.poster_path;
      return(
      <TouchableOpacity style={{ flex:1,alignItems:'center',justifyContent:'center',margin:10,borderBottomLeftRadius:5,borderBottomRightRadius:5,elevation:1,shadowColor:'#000000',backgroundColor:'white'}} onPress={()=>navigation.navigate('SeriesScreenTwo',{item})}>
        <Image source={{uri:Img}} style={{width:'100%',height:300}}/>
        <Text style={{color:'#000000',fontWeight:'800',fontSize:18,fontFamily:'sans-serif-condensed'}}>{item.name}</Text>
        <Text style={{color:'#000000',fontFamily:'monospace',marginVertical:10}}>{item.first_air_date}</Text>
      </TouchableOpacity>
    )};
  return (
    <View style={{flex:1,backgroundColor:'#000000'}}>
    <View style={{alignItems:'center',justifyContent:'center',marginVertical:10,backgroundColor:'#9a7aff',borderRadius:100,marginHorizontal:10}}>
        <Text style={{fontFamily:'sans-serif-condensed',fontSize:25,fontWeight:'800'}}>Series</Text>
    </View>
    {isLoading?<ActivityIndicator size="200px" color="green"  style={{justifyContent:'center',alignItems:'center',height:'100%'}}/>:<FlatList 
    data={data?.results}
    renderItem={renderItem}
    keyExtractor={item => "_" + item.id}
    numColumns={2}
    style={{top:10,padding:10}}
    contentContainerStyle={{ paddingBottom: 130 }}
  />
}
</View>
  )
}

export default SeriesScreenOne