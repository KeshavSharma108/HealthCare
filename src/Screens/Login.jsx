import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Mainlayout from "../Component/Mainlayout";
import CustomInput from "../Component/customInput";
import CustomTitle from "../Component/customTitle";
import { AuthSvg } from "../assests/imgs/svg";
import CustomButton from "../Component/customButton";
import { colors } from "../assests/color";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const {navigate} = useNavigation()
  return (
    <Mainlayout style={styles.mainContainer}>
      <CustomTitle>Health Care</CustomTitle>
      <CustomInput
        title="Email id"
        svgIcon={<AuthSvg.msg />}
        placeholder="enter email address"
      />
      <CustomInput
        title="Password"
        svgIcon={<AuthSvg.lock />}
        placeholder="enter password"
      />

      <View style={styles.forgotStyle}>
        <Text style={{ color: "blue", fontWeight: "500" }}>
          Forgot Password !
        </Text>
      </View>
      <View style={styles.registerStyle}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          Don't Have Any Account :{" "}
        </Text>
        <Text style={{ color: "blue", fontSize: 16, fontWeight: "500" }}>
          Click Here to register
        </Text>
      </View>
      <CustomButton
        backgroundColor={colors.primaryColor}
        title={"Login"}
        color={colors.white}
        onPress={()=>navigate('MyTabs')}
      />
    </Mainlayout>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    backgroundColor: "white",
  },
  forgotStyle: { width: "100%", alignItems: "flex-end" },
  registerStyle: {
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    marginVertical: 20,
  },
});
