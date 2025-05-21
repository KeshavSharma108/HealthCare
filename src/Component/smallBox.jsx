import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../assests/color'

const SmallBox = ({title , svgIcon , onPress}) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <Text style={{color:colors.fontColor}}>{title}</Text>
      {svgIcon}
    </TouchableOpacity>
  )
}

export default SmallBox

const styles = StyleSheet.create({mainContainer:{
  borderWidth:1,
  padding:10,
width:'45%',
flexDirection:'row',
justifyContent:'space-between',
borderRadius:10,
height:50,
alignItems:'center',
borderColor:colors.lightGrey,
}})