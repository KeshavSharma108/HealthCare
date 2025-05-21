import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import Mainlayout from "../Component/Mainlayout";
import CustomInput from "../Component/customInput";
import CustomTitle from "../Component/customTitle";
import { AuthSvg } from "../assests/imgs/svg";
import CustomButton from "../Component/customButton";
import { colors } from "../assests/color";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../api/authServices";



const Login = () => {
  const { replace , navigate } = useNavigation();
  const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

const handleLogin= async ()=>{
 
  try {
    const success = await login(email, password);
    if (success) {
      replace("MyTabs");
    } else {
      Alert.alert("Login Failed", "Invalid email or password. Please try again.");
    }
  } catch (error) {
    Alert.alert("Error", "Something went wrong. Please try again later.");
  }


}

  return (
    <Mainlayout style={styles.mainContainer}>
      <CustomTitle>Health Care</CustomTitle>
      <CustomInput
        title="Email id"
        svgIcon={<AuthSvg.msg />}
        placeholder="enter email address"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <CustomInput
        title="Password"
        svgIcon={<AuthSvg.lock />}
        placeholder="enter password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
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
        <Text
          onPress={() => replace("Register")}
          style={{ color: "blue", fontSize: 16, fontWeight: "500" }}
        >
          Click Here to register
        </Text>
      </View>
      <CustomButton
        backgroundColor={colors.primaryColor}
        title={"Login"}
        color={colors.white}
       onPress={handleLogin}
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
