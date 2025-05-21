import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomTitle = ({ style, children = 'Enter Title' , textStyle }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </View>
  );
};

export default CustomTitle;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "500",
    color: "black",
    textAlign: "center",
  },
});