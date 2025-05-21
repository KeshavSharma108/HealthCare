import { StyleSheet, Text, View } from "react-native";
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
      <CustomButton
        backgroundColor={colors.primaryColor}
        title={"Register"}
        color={colors.white}
       onPress={() => {register(email, password); navigate('Login')}}
      />
    </Mainlayout>
  );
};

export default Register;

const styles = StyleSheet.create({});
