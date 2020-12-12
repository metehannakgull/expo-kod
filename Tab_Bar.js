import React from 'react';
import {
 
  Image  
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import{createStackNavigator} from '@react-navigation/stack' ;

import { IMAGE } from '../icons.js';

import {HomePage} from "../HomePage/HomePage";
import {SalePage} from "../SalePage/SalePage";
import {NotificationPage} from "../NotificationPage/NotificationPage";
import {ProfilePage} from "../ProfilePage/ProfilePage";




const Tab = createBottomTabNavigator();// Tab.navigator and Tab.Screen used
const Stack= createStackNavigator(); // Stack.Navigator and Stack.Screen used

const navigationOptionHandler = ()=>({ // Removed header 
  headerShown : false                 
})

function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} options={navigationOptionHandler}></Stack.Screen>
        </Stack.Navigator>
    )
}

function SaleStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Sale" component={SalePage} options={navigationOptionHandler}></Stack.Screen>
        </Stack.Navigator>
    )
}
function NotificationStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Notification" component={NotificationPage} options={navigationOptionHandler}></Stack.Screen>
        </Stack.Navigator>
    )
}
function ProfileStack(){
    return(
        <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfilePage} options={navigationOptionHandler}></Stack.Screen>
    </Stack.Navigator>
    )
}

export default function Tab_Bar(){
  
        return(
            <NavigationContainer> 
            <Tab.Navigator 
             screenOptions = {({route}) => ({
              tabBarIcon : ({focused, color ,size}) => {
                
                let IconName

                 if(route.name == "Home")  //changed icons
                 {
                   IconName =focused
                   ? IMAGE.ICON_HOME2
                   : IMAGE.ICON_HOME1
                 }
                 else if(route.name == "Sale"){//changed icons
                     IconName = focused
                   ? IMAGE.ICON_SETTING2
                   : IMAGE.ICON_SETTING1
                 }
                 else if (route.name == "Notification"){//changed icons
                  IconName = focused
                   ? IMAGE.ICON_NOTIFICATION2
                   : IMAGE.ICON_NOTIFICATION1
                 }
                 else if ( route.name =="Profile"){//changed icons
                  IconName = focused
                   ? IMAGE.ICON_PROFILE2
                   : IMAGE.ICON_PROFILE1
                 }
                 return <Image source={IconName}  style ={{width:30, height:30}}/>
              }
            })}
            tabBarOptions= {{
              showLabel : false
            }}> 
            <Tab.Screen  name="Home" component={HomeStack}/>
            <Tab.Screen name="Sale" component={SaleStack}/>
            <Tab.Screen name="Notification" component = {NotificationStack}/>
            <Tab.Screen name="Profile" component={ProfileStack}/>
                       
            </Tab.Navigator>
            </NavigationContainer>
        )
          
}