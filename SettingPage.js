import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,
  SafeAreaView,ImageBackground,Switch } from 'react-native';
import {Header2} from "../Headers/Header2";



export  class SettingPage  extends React.Component{
  state = {
    switchValue: true,
  };

  _handleToggleSwitch = () =>
    this.setState(state => ({
      switchValue: !state.switchValue,
    }));

  render(){
  return (
    <SafeAreaView style={{flex:1}}>
      
    <Header2 title="Setting"/>
    <ImageBackground 
    source={require("../../Images/background.png")}  
       style={styles.backgroundImage}
      >
      <Switch
          onValueChange={this._handleToggleSwitch}
          value={this.state.switchValue}
          onTintColor={'orange'}
          tintColor={'grey'}
          style={styles.switch}
        />
      </ImageBackground>
      </SafeAreaView>
    
  )};
}
const styles = StyleSheet.create({
    container: {
      marginTop:30,
      backgroundColor: 'green',
    },
    backgroundImage:{
      flex:1,
  },
  });