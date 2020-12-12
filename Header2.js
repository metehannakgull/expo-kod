import React, {Component} from "react";
import { Text, View,StyleSheet} from "react-native";
export class Header2 extends Component{
  
    render(){
      
        let{title ,navigation} = this.props 
        return(
            <View style={styles.view1}>                                           
                 <Text style={styles.text1}>{title}</Text>                  
              </View>
    
           )}
}
const styles=StyleSheet.create({
    view1:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
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
  
})