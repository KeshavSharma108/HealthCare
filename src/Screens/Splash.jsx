import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Mainlayout from '../Component/Mainlayout';
import { AuthSvg } from '../assests/imgs/svg';
import { colors } from '../assests/color';

const Splash = () => {
  const navigation = useNavigation();
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      navigation.replace('Login'); // Navigate after animation
    });
  }, []);

  return (
    <Mainlayout style={styles.mainContainer}>
      <Animated.View style={{ ...styles.textContainer, opacity: fadeAnim }}>
        <Text style={styles.textStyle}>Health Care</Text>
      </Animated.View>
      <AuthSvg.circleSvg />
    </Mainlayout>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.primary,
  },
  textContainer: {
    position: 'absolute',
    zIndex: 1,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
});