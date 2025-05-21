import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";

import MyTabs from "./BtmTabNavi";
import Splash from "../Screens/Splash";
import Login from "../Screens/Login";
import Remainder from "../Screens/SmallBoxScr/Remainder";

const Stack = createStackNavigator();

export function StackNavi() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        headerStyle: { height: 80 },
        ...TransitionPresets.FadeFromBottomAndroid, // Add fade-in animation
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          ...TransitionPresets.ScaleFromCenterAndroid, // Custom animation
        }}
      />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen
        name="Remainder Box"
        component={Remainder}
        options={{
          title: "Remainder",
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            width: "100%",
            justifyContent: "center",
          },
          ...TransitionPresets.ModalSlideFromBottomIOS, // Slide animation
        }}
      />
    </Stack.Navigator>
  );
}