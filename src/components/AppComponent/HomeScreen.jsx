import { View, Text, Button, TouchableOpacity,FlatList,Image ,ActivityIndicator} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { logout } from "../../redux/slices/Authslice";
import { useGetDataMovieQuery } from '../../redux/Api/Api';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const user=useSelector(state=>state.Auth.user);
  const {data,isError,isFetching,isLoading,isSuccess}=useGetDataMovieQuery();
  const logoutHandle = () => {
    dispatch(logout());
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
  };

  const renderItem = ({ item }) => {
    const Img='https://image.tmdb.org/t/p/original'+item.poster_path;
    return(
    <View style={{ flex:1,alignItems:'center',justifyContent:'center',margin:10,borderBottomLeftRadius:5,borderBottomRightRadius:5,elevation:1,shadowColor:'#000000',backgroundColor:'white',width:'70%',height:230,marginLeft:0}} >
      <Image source={{uri:Img}} style={{width:'100%',height:200}}/>
      <Text style={{color:'#000000',fontWeight:'800',fontSize:18,fontFamily:'sans-serif-condensed',marginVertical:5}}>{item.title}</Text>
    </View>
  )};

  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <TouchableOpacity
        style={{
          width: 130,
          height: 40,
          backgroundColor: "#9a7aff",
          justifyContent: "center",
          alignItems: "center",
          elevation: 3, 
          borderRadius: 10, 
          shadowColor:'#000000',
          position:"absolute",
          right:10,
          top:10
        }}
        onPress={logoutHandle}
      >
        <Text style={{ color: "black", fontSize: 16,fontWeight:'800' }}>Logout</Text>
      </TouchableOpacity>
      <View style={{marginTop:150,padding:5}}>
      <Text style={{fontSize:18,color:'white',fontFamily:'monospace'}}>Hey "{user.givenName}"! Welcome to Inkle</Text>
      <View style={{backgroundColor:'white',elevation:10,shadowColor:'#000000',borderRadius:10,marginHorizontal:20,marginTop:20}}>
      <Text style={{fontSize:22,alignSelf:"center",fontWeight:'800'}}>Top picks for you!</Text>
      </View>

     {isLoading?<ActivityIndicator size="200px" color="#0000ff"  style={{justifyContent:'center',alignItems:'center',height:'100%'}}/>: <FlatList 
        data={data?.results.slice(0,7)}
        renderItem={renderItem}
        keyExtractor={item => "_" + item.id}
        style={{top:10,padding:10}}
        contentContainerStyle={{ paddingBottom: 130 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
}
      </View>
    </View>
  );
};

export default HomeScreen;
