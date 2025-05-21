import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import CustomInput from "../Component/customInput";
import Mainlayout from "../Component/Mainlayout";
import CustomTitle from "../Component/customTitle";
import CustomButton from "../Component/customButton";
import { colors } from "../assests/color";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../api/authServices";

const Register = () => {
  const { navigate } = useNavigation();
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
  if (!email.trim() || !password.trim()) {
    Alert.alert("Error", "Email and Password cannot be empty.");
    return; // Stop execution if fields are empty
  }

  try {
    const success = await register(email, password);
    if (success) {
      navigate("Login");
    } else {
      Alert.alert("Registration Failed", "Email already exists or invalid input.");
    }
  } catch (error) {
    Alert.alert("Error", "Something went wrong. Please try again later.");
  }
};


  return (
    <Mainlayout>
      <CustomTitle>Health Care</CustomTitle>

      <CustomInput
        title="Email"
        placeholder="Enter Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <CustomInput
        title="Password"
        placeholder="Enter Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <View style={{marginVertical:10}}>
    <Text>Already Registered {}<Text onPress={()=>navigate('Login')} style={{color:'blue'}}>Login</Text></Text>
      </View>
   
      <CustomButton
        backgroundColor={colors.primaryColor}
        title={"Register"}
        color={colors.white}
        onPress={handleRegister}
      />
     
    </Mainlayout>
  );
};

export default Register;

const styles = StyleSheet.create({});
