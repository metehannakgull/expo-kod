
import React from 'react';
import { StyleSheet,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Welcome  extends React.Component{ 
  render(){
  return (
      <TouchableOpacity  
       onPress={()=>this.props.navigation.navigate("Tab_Bar")}
       style={{marginTop:150,alignItems:"center",backgroundColor:"green"}}
       > 
         <Text style={{fontSize:30}}>Welcome</Text>
     </TouchableOpacity>
  )};
}

