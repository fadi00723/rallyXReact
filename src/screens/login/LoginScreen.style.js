import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImg:{
    height:'100%',
    width:'100%', 
    alignItems:'center',
    alignSelf:'center'
},
chooseTxt:{
    color:'white',
     fontSize:35,  
     fontWeight:'600',
     textAlign:'center'
    },
    arrowIcon:{
        width:220,
        height:140, 
        top:'10%', 
        alignSelf:'center'
    },
    typeText:{
        color:'white', 
        fontSize:30, 
        fontWeight:'400', 
        textAlign:'center'
    },
    imgMode:{
        width:120,
        height:120,
        marginBottom:'5%'
    },
    rallyIcon:{
        width:'68%',
        height:'11%',
        top:'25%'
    },
    textInput: {
      height: 40,
      width: '80%',
      borderColor: 'gray',
      borderWidth: 1,
    },
});