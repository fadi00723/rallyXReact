import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF',
    paddingTop:'12%',
    paddingHorizontal:'5%'
  },
  firstView:{
    flexDirection:'row',
    justifyContent:'space-between',
    height:'8%'
  },
  NewsText:{
    fontSize:31,
   color:'red',
   fontWeight:'300'
  },
  horizontalLine:{
    borderBottomColor: '#9A9A9A',
    borderBottomWidth: 0.5 ,
  },
  
  dropdown1RowStyle: {
    borderBottomColor: 'red',
    width: '100%',
   
  },
  mainHiding: {
    color: 'red',
    fontSize: 23,
    fontFamily: 'Montserrat-Medium',
  },
  dropdown1RowTxtStyle: {
    color: 'black',
    textAlign: 'center',
   fontSize:18
  },
  innerView: {
    backgroundColor: 'red',
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scndView:{ 
   alignItems:'center',
marginTop:'5%',
   height:'69.5%',
   backgroundColor:'#D3D3D3'
},
imgstyle:{
    width:'100%',
     height:'50%', 
   resizeMode:'cover'
    }

});