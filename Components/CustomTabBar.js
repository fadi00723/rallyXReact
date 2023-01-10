import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/routers';
import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
export const CustomTabBar = ({ route}) => {
  const navigation = useNavigation();

  const curvedViewStyle = {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'red',
   
  };

    return (
      <View style={styles.container}>
<View style={styles.innerView}>
<Image source={require('../assets/icons/liveTiming.png')} style={{width:'13.5%',height:34, marginHorizontal:'1%',alignSelf:'center'}}/>
<Image source={require('../assets/icons/leadearBoard.png')} style={{width:'15%',height:34, marginHorizontal:'1%', alignSelf:'center'}}/>
<View style={{ 
   width: 120,
  height: 120,
  borderRadius: 60,
}}/>
<Image source={require('../assets/icons/messageBoard.png')} style={{width:'16%',height:29, marginHorizontal:'1%', alignSelf:'center'}}/>
<Image source={require('../assets/icons/settingIcon.png')} style={{width:'8.5%',height:30, marginHorizontal:'1%', alignSelf:'center'}}/>
</View>
      <View style={[styles.curvedView, curvedViewStyle]}>
      <Pressable onPress={()=>navigation.navigate('HomeScreen')}>
      <Image source={require('../assets/icons/xbtn.png')} style={styles.xbtn}/>
      </Pressable>
      </View>
    </View>
  );
};
  const styles = StyleSheet.create({
    mainContainer:{
      width:'100%',
      height:'8%'
    },

    shadowbox: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-around",
      backgroundColor: "red",
      
    },
    badgeStyle: {
      position: "absolute",
      top: -8,
      right: -12,
    },
    childContainer: {
      marginTop: "2%",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    },
    TabBarIcon: {
      height: 19.72,
      width: 19.72,

    },
    container: {
      width:'100%',
      height:'10%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'red',
      flexDirection:'row',
      paddingBottom:'5%'
    },
    curvedView: {
      position: 'absolute',
    },
    innerView:{
      flexDirection:'row', 
      justifyContent:'space-between'
    },
    xbtn:{width:80,
      height:80, 
      alignSelf:'center', 
      justifyContent:'center'
    }
  });
  
