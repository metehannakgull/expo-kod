
import React, {useState} from 'react';
import { StyleSheet, Text, View,
     TouchableOpacity,SafeAreaView,ImageBackground,Image,
       Dimensions,ScrollView } from 'react-native';
import {Header1} from "../Headers/Header1";
const {width: WIDTH} = Dimensions.get('window');
import {LinearGradient} from "expo-linear-gradient"

export  class HomePage  extends React.Component{
 
  state = { count: 0 };

  setCount = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count + 1 })
  )
 
 
  render(){
     
    const { count } = this.state;
 
 
    return (
       
    <SafeAreaView style={{flex:1}}>     
      <Header1 title="SİBA"/>
     
      
      <ImageBackground source={require("../../Images/background.png")}  
       style={styles.backgroundImage}
      >
       
       <View style={{flexDirection:"row"}}> 
       <ScrollView 
         horizontal={true}
         showsHorizontalScrollIndicator={false} 
         
         > 
       <TouchableOpacity> 
      <Image  source={require("../../Images/image1.jpg")} 
        style={styles.image1}
      />
      <Text style={{position:"absolute"}}>dmaskldmlas</Text>
      
      </TouchableOpacity>
      <TouchableOpacity> 
      <Image 
        source={require("../../Images/image2.jpg")}
        style={styles.image1}
      />
      </TouchableOpacity>
      </ScrollView>
      </View>
     
      <View style={styles.view2}> 
      
       <LinearGradient style={styles.linear1}       
                colors={['#fca944','#eb6ba2']}
                start={[0.2,0.6]}
                end={[0.8,0.9]}       
                > 
                <Text
          style={styles.text1}> Activity of the week</Text>
       </LinearGradient>
         <Text style={styles.text2}>Which trademark's discounted code you prefer?</Text>
         <TouchableOpacity style={styles.touchable1}>
         <Text style={{fontSize:16}}>Koton</Text>
         </TouchableOpacity>
         
         <TouchableOpacity style={styles.touchable1}>
         <Text style={{fontSize:16}}>Zara</Text>
         </TouchableOpacity>
         
         <TouchableOpacity style={styles.touchable1}>
         <Text style={{fontSize:16}}>Defacto</Text>
         </TouchableOpacity>
        
        <View style={styles.view3}>
        <Text>{count} Voted</Text>
        </View>
       <View style={styles.view4}> 
      
          <TouchableOpacity style={styles.touchable2} onPress={this.setCount}>
            <Image source={require("../../Images/icons/heart2.png")}
              style={styles.image2}
            />
          </TouchableOpacity>           
            <Text>{count} Like</Text>
          
        </View>
       </View>
      
    </ImageBackground>
     
      </SafeAreaView>
      
    
  )};
}

const styles = StyleSheet.create({
  view1: {
    marginTop:15,
    flexDirection:"row"
  },
  view2:{
     height:250,
     
     
  },
  view3:{
   flexDirection:"row",
   marginLeft:38,
   marginTop:15

  },
  view4:{
  height:30,
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"center",
  marginTop:15
  },
  backgroundImage:{
      flex:1,
  },
  image1:{
    height:200,
    width: WIDTH
  },
  image2:{
      height:20,
      width:20
  },
  text1:{
    backgroundColor: 'transparent',
    fontSize: 16,
    color: '#fff',
    paddingTop:7,
    paddingLeft:8,
    fontWeight:"bold"
  },
  text2:{
  textAlign:"center",
  marginTop:8
  },
  linear1:{
    marginTop:10,
    borderRadius:5,
    height:40
  },
  touchable1:{
   marginLeft:38,
   marginRight:80,
   marginTop:20,
  },
  touchable2:{
    
  }
   
});
/*

state = { count: 0 };

  setCount = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count + 1 })
  )

   const { count } = this.state;

 <View style={styles.bg}>
        <View style={{ height: 100 }}>
          <Text style={count < 5 ? styles.less : styles.greater}>You clicked {count} times</Text>
        </View>
        <View style={{ height: 100 }}>
          <TouchableOpacity style={styles.button} onPress={this.setCount}>
            <Text style={styles.buttonText}>Click</Text>
          </TouchableOpacity>
        </View>
      </View>


      bg: {  marginTop: 50, alignItems: 'center' },
  less: { fontSize: 25, color: '#4d3398', fontWeight: 'bold' },
  greater: { fontSize: 25, color: '#f3845c', fontWeight: 'bold' },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',  
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor: '#3498db'
  },
  buttonText: {
    fontSize: 25,
    color: '#fff'
  }

*/