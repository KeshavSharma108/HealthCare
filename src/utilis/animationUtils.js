import React, { useEffect } from "react";
import { View, Text, Animated } from "react-native";

const FadeInScreen = ({ route }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ flex: 1, opacity: fadeAnim, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Welcome to {route.name}!</Text>
    </Animated.View>
  );
};

export default FadeInScreen;