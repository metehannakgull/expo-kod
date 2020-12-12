import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,
  SafeAreaView,ImageBackground,Dimensions,Image,ScrollView } from 'react-native';
import {Header2} from "../Headers/Header2";

const {width: WIDTH} = Dimensions.get('window');


export  class SalePage  extends React.Component{
  
  state = { sale1: 30, sale2:180000, sale3:100000 }; 

  render(){
    const { sale1 } = this.state;
    const { sale2}= this.state
    const { sale3}= this.state
  return (

    
    <SafeAreaView style={{flex:1}}>
      
    <Header2 title="Sales"/>
    <ScrollView 
      showsVerticalScrollIndicator={false}
    > 
    <ImageBackground 
       source={require("../../Images/background.png")}  
       style={styles.backgroundImage}
      >
      
      <View style={styles.view1}>
        <Image 
          source={require("../../Images/trademark/samsung.jpg")}
          style={styles.image1}
        />
        <View style={{paddingTop:10}}> 
        <Text style={styles.text1}>Marka İndirimi: % {sale1}</Text>            
        <Text style={styles.text2}>Etkinlik Katılım Sayısı: {sale2}</Text>  
        <Text style={styles.text3}>Alışveriş yapan kullanıcı sayısı: {sale3}</Text>
        </View>
       </View>
      
       <View style={styles.view1}>
        <Image 
          source={require("../../Images/trademark/zara.png")}
          style={styles.image1}
        />
        <View style={{paddingTop:10}}> 
        <Text style={styles.text1}>Marka İndirimi: % {sale1}</Text>            
        <Text style={styles.text2}>Etkinlik Katılım Sayısı: {sale2}</Text>  
        <Text style={styles.text3}>Alışveriş yapan kullanıcı sayısı: {sale3}</Text>
        </View>
       </View>
       <View style={styles.view1}>
        <Image 
          source={require("../../Images/trademark/gratis.jpg")}
          style={styles.image1}
        />
        <View style={{paddingTop:10}}> 
        <Text style={styles.text1}>Marka İndirimi: % {sale1}</Text>            
        <Text style={styles.text2}>Etkinlik Katılım Sayısı: {sale2}</Text>  
        <Text style={styles.text3}>Alışveriş yapan kullanıcı sayısı: {sale3}</Text>
        </View>
       </View>
       <View style={styles.view1}>
        <Image 
          source={require("../../Images/trademark/hm.jpg")}
          style={styles.image1}
        />
        <View style={{paddingTop:10}}> 
        <Text style={styles.text1}>Marka İndirimi: % {sale1}</Text>            
        <Text style={styles.text2}>Etkinlik Katılım Sayısı: {sale2}</Text>  
        <Text style={styles.text3}>Alışveriş yapan kullanıcı sayısı: {sale3}</Text>
        </View>
       </View>
       <View style={styles.view1}>
        <Image 
          source={require("../../Images/trademark/ikea.jpg")}
          style={styles.image1}
        />
        <View style={{paddingTop:10}}> 
        <Text style={styles.text1}>Marka İndirimi: % {sale1}</Text>            
        <Text style={styles.text2}>Etkinlik Katılım Sayısı: {sale2}</Text>  
        <Text style={styles.text3}>Alışveriş yapan kullanıcı sayısı: {sale3}</Text>
        </View>
       </View>
       <View style={styles.view1}>
        <Image 
          source={require("../../Images/trademark/polo.jpg")}
          style={styles.image1}
        />
        <View style={{paddingTop:10}}> 
        <Text style={styles.text1}>Marka İndirimi: % {sale1}</Text>            
        <Text style={styles.text2}>Etkinlik Katılım Sayısı: {sale2}</Text>  
        <Text style={styles.text3}>Alışveriş yapan kullanıcı sayısı: {sale3}</Text>
        </View>
       </View>
       <View style={styles.view1}>
        <Image 
          source={require("../../Images/trademark/instreet.jpg")}
          style={styles.image1}
        />
        <View style={{paddingTop:10}}> 
        <Text style={styles.text1}>Marka İndirimi: % {sale1}</Text>            
        <Text style={styles.text2}>Etkinlik Katılım Sayısı: {sale2}</Text>  
        <Text style={styles.text3}>Alışveriş yapan kullanıcı sayısı: {sale3}</Text>
        </View>
       </View>
       <View style={styles.view1}>
        <Image 
          source={require("../../Images/trademark/polo.jpg")}
          style={styles.image1}
        />
        <View style={{paddingTop:10}}> 
        <Text style={styles.text1}>Marka İndirimi: % {sale1}</Text>            
        <Text style={styles.text2}>Etkinlik Katılım Sayısı: {sale2}</Text>  
        <Text style={styles.text3}>Alışveriş yapan kullanıcı sayısı: {sale3}</Text>
        </View>
       </View>
       
      </ImageBackground>
      </ScrollView>
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
  view1:{
    height:80,
    width: WIDTH,
    borderBottomWidth:0.2,
    borderBottomColor:"#DCDCDC",
    marginTop:10,
    flexWrap:"wrap"
  },
  image1:{
    height:80,
    width:100,
  },
  text1:{
    marginLeft:50
  },
  text2:{
     marginLeft:30
  },
  text3:{
    marginLeft:10
  }
  });