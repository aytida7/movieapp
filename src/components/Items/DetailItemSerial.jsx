import { View, Text, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';

const DetailItemSerial = (props) => {
    const Img =
    "https://image.tmdb.org/t/p/original" + props.itemInfo.backdrop_path;
  return (
    <View style={{ backgroundColor: "#FFC0CB", height: "100%" }}>
      <Image source={{ uri: Img }} style={{ width: "100%", height: 200 }} />
      <View style={{ padding: 10 }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              fontFamily: "sans-serif-condensed",
              fontSize: 30,
              fontWeight: "800",
            }}
          >
            {props.itemInfo.original_name}
          </Text>
        </View>
        <View
          style={{
            marginVertical: 15,
            marginBottom: 30,
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="crowd" size={28} color="black" style={{marginRight:5}} />
            <Text style={{ color: "black" ,fontSize:16,fontStyle:'italic',fontFamily:'monospace'}}>{props.itemInfo.popularity}</Text>
          </View>
          <View style={{flexDirection:"row"}}> 
          <Fontisto name="date" size={24} color="black" style={{marginRight:5}}/>
          <Text style={{fontFamily:'monospace',}}>{props.itemInfo.first_air_date}</Text>
          </View>
        </View>
        <View style={{alignItems:"center"}}>
        <View style={{backgroundColor:'white',height:50,justifyContent:"center",alignItems:"center",borderRadius:20,marginBottom:20,elevation:50}}>
         <Text style={{fontSize:20,fontFamily:'monospace',fontWeight:800}}>"Overview"</Text>   
         </View>
        <Text style={{ color: "#000080",fontFamily:'sans-serif-condensed',fontSize:18 }}>{props.itemInfo.overview.length > 300 ? props.itemInfo.overview.substring(0, 300) + '...' : props.itemInfo.overview}</Text>
        </View>
       
      </View>
    </View>
  );
}

export default DetailItemSerial