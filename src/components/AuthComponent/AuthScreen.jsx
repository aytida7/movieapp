import { StatusBar } from "expo-status-bar";
import { View, Alert, Image } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import {GoogleSignin,GoogleSigninButton} from '@react-native-google-signin/google-signin'
import { useEffect, useState } from "react";
import { login} from "../../redux/slices/Authslice";

const AuthScreen = () => {

  const [error, setError] = useState();
  const dispatch=useDispatch();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "357587531006-g081ttc9b5iiotfccbo3ifhioibnkdqt.apps.googleusercontent.com",
    });
  }, []);

  const signin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      dispatch(login(userInfo.user));
      setError();
    } catch (e) {
      setError(e);
      Alert.alert(e.message);
    }
  }

  return (
    <View style={{justifyContent:"center",alignItems:"center",height:'100%',backgroundColor:'#ffffff'}}>

      <Image source={require('../../../assets/inkle_logo.jpeg')} style={{width:130,height:130}}/>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          onPress={signin}
        />
      <StatusBar style="auto" />
    </View>
  )
}

export default AuthScreen