import React from 'react';
import{
    createSwitchNavigator,
    createAppContainer,
   
}from 'react-navigation';

//Navigation 

import Tab_Bar from "../Pages/TabBar/Tab_Bar"
import Welcome from "./Welcome";

const AppSwitchNavigator = createSwitchNavigator(
    {      
        Welcome:{
            screen:Welcome
        },
        Tab_Bar:{
            screen:Tab_Bar
        }
       
    },
    {
        initialRouteName: 'Welcome' 
    }  
)
export default createAppContainer(AppSwitchNavigator);