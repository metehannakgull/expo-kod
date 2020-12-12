import React, {Component} from "react";
import { Text, View,StyleSheet,Image,Dimensions} from "react-native";
import {LinearGradient} from "expo-linear-gradient"
const {width: WIDTH} = Dimensions.get('window');

export class Header1 extends Component{
    
   
    render(){
      
        let{title} = this.props 
        return(
            <View style={styles.view1}> 
                 <Text>logo</Text>               
                 <Text style={styles.text1}>{title}</Text> 
                    <View> 
                      <Image
                        source={require("../../Images/onlienUser.png")}
                        style={styles.image}
                      />
                      <Text style={styles.text2}>24</Text>  
                      <Text style={styles.text3}>Active Users</Text>
                    </View>     
              </View>
         
        
           )}
}
const styles=StyleSheet.create({
  view1:{
    flexDirection:"row",
    justifyContent:'center',
    alignItems:'center',
    height:80,
    borderBottomWidth:0.2,
    borderBottomColor:"#DCDCDC",
    backgroundColor:"#f9efef"
  
  },
  text1:{ //text color : rgba (252,169,98)
    fontSize:32,
    textAlign: 'center',
    fontWeight:"bold",
    marginLeft:10,
    color: "rgb(255,192,166)"
  },
  text2:{
    fontSize:10,
    left:WIDTH-260,
    color:"blue",
    fontWeight:"bold"
  },
  text3:{
    fontSize:10,
    left:WIDTH-280,
    fontWeight:"bold"
  },
  image:{
    marginTop:5,
    width:53,
    height:35,
    left:WIDTH-280,
    
  }
})
/*
 <LinearGradient style={styles.linear1}       
                colors={['#fca944','#eb6ba2']}
                start={[0.2,0.6]}
                end={[0.8,0.9]}       
                > 
 </LinearGradient>
  
*/