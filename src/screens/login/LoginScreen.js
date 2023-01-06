import { View, Text , ImageBackground, Image, TouchableOpacity, TextInput, Pressable} from 'react-native'
import React from 'react'
import styles from './LoginScreen.style'
import GlobalStyles from '../../utlis/GlobalStyles'
import GlobalColors from '../../utlis/GlobalColors'
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../../../assets/backgroundImg.png')} style={styles.bgImg} resizeMode={'cover'}>
      <View style={{marginTop:'25%'}}>
      <Text style={styles.chooseTxt}>enter password</Text>
      <View style={[GlobalStyles.flexRow,{top:'25%', justifyContent:'center'}]}>
        <View style={{borderWidth:3,borderColor:'white', borderRadius:15,width:'90%'  }}>
        <View style={{backgroundColor:'#2C2C2C', opacity:0.50,borderRadius:10,}}>
       <TextInput placeholder='Type your password here' placeholderTextColor={GlobalColors.lightGrey}  style={{alignSelf:'center',color:'white'}}/>
       </View>
       </View>
   </View>
   </View>
   <TouchableOpacity style={{width:'35%', height:'6%', borderColor:'white', borderRadius:9,borderWidth:2, backgroundColor:GlobalColors.red, justifyContent:'center',top:'18%'}}>
    <Text style={{color:'white', alignSelf:'center',fontSize:24 }}>Login</Text>
   </TouchableOpacity>
   <Pressable style={{top:'27%'}}><Text style={{color:'white', alignSelf:'center',fontSize:20 }}>Contact admin</Text></Pressable>
 <TouchableOpacity style={{top:'58%'}} onPress={()=>navigation.goBack()}>
   <Image source={require('../../../assets/icons/backIcon.png')} style={{width:90,height:90}}/>
 </TouchableOpacity>
      </ImageBackground> 
  </View>
  )
}