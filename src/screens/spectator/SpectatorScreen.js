import { View, Text,Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './SpectatorScreen.style'
import SelectDropdown from 'react-native-select-dropdown';

export default function SpectatorScreen() {
    const countries = ['Select class', 'Class B', 'Class C'];

    const renderInfoCard=()=>{
        return(
            <View style={styles.scndView}>
            <Image source={{uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/21231346-2019-alpine-a110-rally-1567699017.jpg'}} 
            style={styles.imgstyle}/>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%', padding:'5%'}}>
         <Text style={{fontSize:18, fontWeight:'800',color:'red'}}>SuperCar+</Text>
         <Text style={{fontSize:18,opacity:0.5}}>30 May 2022</Text>
       
         </View>
         <Text style={{fontSize:25, width:'90%'}}>Bryntesson and Kristoffersson claim RallyX spoils in action-packed Kouvola weekend</Text>
         <Text style={{fontSize:20,width:'90%', top:'2%'}}>Former RallyX title-winners Thomas Bryntesson and Johan Kritofferson claimed a victory each in a  double-header weekend of action...</Text>
         <View style={{alignSelf:'flex-end'}}>
         <Image source={require('../../../assets/icons/leftIcon.png')}/>
         </View>
            </View>
        )
    }
  return (
    <View style={styles.container}>
    <View style={styles.firstView}>
    <Text style={styles.NewsText} >News</Text>
    <View>
    <SelectDropdown
      data={countries}
     defaultValueByIndex={0}
      dropdownStyle={{
        backgroundColor:'white',
        borderRadius: 5,
      }}
      rowStyle={styles.dropdown1RowStyle}
      rowTextStyle={styles.dropdown1RowTxtStyle}
      dropdownOverlayColor={'transparent'}
      buttonTextStyle={{
        color: 'black',
        fontSize:14,
        backgroundColor:'white',
      }}
      buttonStyle={{
        backgroundColor:'white',
        width: '80%',
        justifyContent: 'center',
        alignSelf: 'center',
        height: '60%',
        left:'30%',
        borderRadius: 2,
        borderColor:'#9A9A9A',
        borderWidth:0.5,
      }}
      renderDropdownIcon={isOpened => {
        return (
          <Image
            source={
              !isOpened
                ? require('../../../assets/icons/arrowdownIcon.png')
                : require('../../../assets/icons/arrowUpIcon.png')
            }
            style={{width: 15, height: 15, left: '15%'}}
          />
        );
      }}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item;
      }}
    />
    </View>
    </View>
    <View style={styles.horizontalLine}/>
    <ScrollView contentContainerStyle={{flex:1}}>
{renderInfoCard()}
</ScrollView>
    </View>
  )
}