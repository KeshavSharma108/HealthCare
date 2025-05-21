import React from 'react';
import { View, StyleSheet } from 'react-native';


const SvgLoader = ({ svgIcon }) => {
  return (
    <View style={styles.container}>
     {svgIcon}
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
});

export default SvgLoader;