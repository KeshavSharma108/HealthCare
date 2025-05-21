import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {
            const res = await axios.post("http://192.168.29.77:5001/auth/login", { email, password });
            await AsyncStorage.setItem("token", res.data.token);
            setUser(email);
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    const register = async (email, password) => {
        try {
            await axios.post("http://192.168.29.77:5001/auth/register", { email, password });
        } catch (error) {
            console.error("Registration failed", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, register }}>
            {children}
        </AuthContext.Provider>
    );
};