import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import React from "react";


const CustomInput = ({
  style,
  placeholder = "Enter placeholder name...",
  title = "Enter Title",
  titleStyle,
  onchange,
  onChangeText,
  value,
  placeholderTextColor = "grey",
  svgIcon, // Pass an icon source as a prop
  ...props
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[{ fontSize: 13, fontWeight: "500" }, titleStyle]}>
          {title}
        </Text>
      </View>

      {/* Input Container with Icon */}
      <View style={styles.inputContainer}>
       {svgIcon}
        <TextInput
          onChange={onchange}
          onChangeText={onChangeText}
          value={value}
          style={[styles.input, style]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          {...props}
        />
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  titleContainer: {
    marginVertical: 10,
    top: 20,
    zIndex: 1,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderRadius: 7,
    backgroundColor: "white",
    borderColor: "grey",
    padding: 10,
  },
  icon: {
    width: 24, // Adjust size as needed
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
});