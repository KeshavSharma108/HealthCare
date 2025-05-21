import { StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import CustomButton from "./customButton";
import { colors } from "../assests/color";
import { AuthContext } from "../api/authServices";

import { useNavigation } from "@react-navigation/native";

const CustomLogout = () => {
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);

  return (
    <View>
      <CustomButton
        onPress={() => logout(navigation)}
        title={"Logout"}
        size="small"
        style={{width:200, padding:12,}}
        backgroundColor={colors.primaryColor}
        color={colors.white}
      />
    </View>
  );
};

export default CustomLogout;

const styles = StyleSheet.create({});
