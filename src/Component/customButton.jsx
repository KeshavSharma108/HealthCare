import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({ title, backgroundColor, style, color, onPress, size ='large' ,ref}) => {
  // Determine the button size and text style based on the "size" prop
  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return { width: '20%', height: 40, textStyle: { fontSize: 12 } };
      case 'medium':
        return { width: '50%', height: 40, textStyle: { fontSize: 16 } };
      case 'large':
        return { width: '100%', height: 40, textStyle: { fontSize: 17 } };
      default:
        return { textStyle: { fontSize: 16 } }; // Default font size
    }
  };

  const sizeStyle = getSizeStyle();

  return (
    <TouchableOpacity
    ref={ref}
      onPress={onPress}
      style={[styles.buttonContainer, style, { backgroundColor }, { width: sizeStyle.width, height: sizeStyle.height }]}
    >
      <Text style={[styles.text, { color }, sizeStyle.textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 5,
    borderRadius: 8,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '400',
  },
});