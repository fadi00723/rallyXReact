import { View, Text, ImageBackground,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './HomeScreen.style'
import GlobalStyles from '../../utlis/GlobalStyles'
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/backgroundImg.png')} style={styles.bgImg} resizeMode={'cover'}>
        <View style={{marginTop:'25%'}}>
        <Text style={styles.chooseTxt}>choose mode</Text>
        <Image source={require('../../../assets/icons/arrowIcon.png')} style={styles.arrowIcon}/>
        <View style={[GlobalStyles.flexRow,{top:'14%'}]}>
          <View>
          <TouchableOpacity onPress={()=> navigation.navigate("MyTabs", { screen: "SpectatorScreen" })}>
          <Image source={require('../../../assets/icons/spectatorIcon.png')} style={styles.imgMode}/>
          </TouchableOpacity>
          <Text style={styles.typeText}>spectator</Text>
          </View>
          <View style={{width:'15%'}}/>
          <View>
          <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
          <Image source={require('../../../assets/icons/competitorIcon.png')} style={styles.imgMode}/>
          </TouchableOpacity>
          <Text style={styles.typeText}>competitor</Text>
          </View>
        </View>
        </View>
        <Image source={require('../../../assets/icons/rallyIcon.png')} style={styles.rallyIcon}/>
        </ImageBackground> 
    </View>
  )
}
