import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { StackNavi } from "./src/navigations/StackNavi";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/api/authServices";

export default function App() {
  return (
    <AuthProvider>

 
    <NavigationContainer>
      <View style={styles.container}>
        <StackNavi />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
       </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
