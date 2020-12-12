import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView,ImageBackground } from 'react-native';
import {Header1} from "../Headers/Header1";


export  class NotificationPage  extends React.Component{
  
  render(){
  return (
    <SafeAreaView style={{flex:1}}>
      
    <Header1 title="SİBA"/>
    

      <View style={styles.container}>
       <Text>Deneme</Text>
        
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