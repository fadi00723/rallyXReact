import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/home/HomeScreen'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/LoginScreen';
import SpectatorScreen from '../screens/spectator/SpectatorScreen';


const Stack = createNativeStackNavigator();

export default function StackNavigations() {
  return (
    <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}>

<Stack.Screen name="HomeScreen" component={HomeScreen} />
<Stack.Screen name="LoginScreen" component={LoginScreen} />
<Stack.Screen name="SpectatorScreen" component={SpectatorScreen} />
   </Stack.Navigator>
  )
}