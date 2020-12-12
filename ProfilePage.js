import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView,ImageBackground } from 'react-native';
import {Header2} from "../Headers/Header2";


export  class ProfilePage  extends React.Component{
  
  render(){
  return (
    <SafeAreaView style={{flex:1}}>
      
    <Header2 title="My Profile"/>
    

      <View style={styles.container}>
      
        
      </View>
      </SafeAreaView>
    
  )};
}
const styles = StyleSheet.create({
    container: {
      marginTop:30,
      backgroundColor: 'green',
    },
  });