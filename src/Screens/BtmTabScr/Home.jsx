import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Mainlayout from '../../Component/Mainlayout'
import SmallBox from '../../Component/smallBox'
import {  SmallBoxSvg } from '../../assests/imgs/svg'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../api/authServices'
import CustomLogout from '../../Component/customLogout'

const Home = () => {
  const {navigate} = useNavigation()
 

  return (
<Mainlayout  >
  <View style={styles.smallBoxContainer}>
  <SmallBox title={'Question'} svgIcon={<SmallBoxSvg.Question/>}/>
    <SmallBox title={'Reminder'} svgIcon={<SmallBoxSvg.Remainder/>} onPress={()=>navigate('Remainder Box')}/>
  </View>
   <View style={styles.smallBoxContainer}>
  <SmallBox title={'Message'} svgIcon={<SmallBoxSvg.Message/>}/>
    <SmallBox title={'Calander'} svgIcon={<SmallBoxSvg.Calender/>}/>
  </View>
  <View style={{height:'80%', justifyContent:'flex-end' , width:'100%' , alignItems:'flex-end'}}>
<CustomLogout/>
  </View>

</Mainlayout>
  )
}

export default Home

const styles = StyleSheet.create({smallBoxContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginVertical:10
}})