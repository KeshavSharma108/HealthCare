import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://192.168.29.77:5001/auth/login", {
        email,
        password,
      });

      if (res.data.token) {
        await AsyncStorage.setItem("token", res.data.token);
        console.log("Token----------", res.data.token);
        setUser(email);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  const register = async (email, password) => {
    try {
      const res = await axios.post("http://192.168.29.77:5001/auth/register", {
        email,
        password,
      });
      if (res.data.message === "User registered successfully") {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

const logout = async (navigation) => {
    try {
        await AsyncStorage.removeItem("token"); // Remove stored token
        setUser(null); // Clear user state
        console.log("Token successfully removed"); // Log confirmation
        navigation.navigate("Login"); // Navigate to login screen
    } catch (error) {
        console.error("Logout failed", error);
    }
};
  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
