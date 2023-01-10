import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/home/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/LoginScreen';
import SpectatorScreen from '../screens/spectator/SpectatorScreen';
import Home_Compitator from '../screens/Competitor/Home_Compitator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomTabBar} from '../../Components/CustomTabBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
    {/* <Stack.Screen name="Home_Compitator" component={Home_Compitator} /> */}
    <Stack.Screen name="MyTabs" component={BottomTabNavigation} />
  </Stack.Navigator>
);
}
export const BottomTabNavigation = ({navigation, route}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home_Compitator"
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        gestureEnabled: false,
        tabBarStyle: {border: 'none'},
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home_Compitator" component={Home_Compitator} />
      <Tab.Screen name="SpectatorScreen" component={SpectatorScreen} />
    </Tab.Navigator>
  );
};
