import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";

import MyTabs from "./BtmTabNavi";
import Splash from "../Screens/Splash";
import Login from "../Screens/Login";
import Remainder from "../Screens/SmallBoxScr/Remainder";
import Register from "../Screens/Register";
import CustomLogout from "../Component/customLogout";

const Stack = createStackNavigator();

export function StackNavi() {
  //  const { token } = useContext(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        headerStyle: { height: 80 },
        ...TransitionPresets.FadeFromBottomAndroid,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
 <Stack.Screen
  name="Login"
  component={Login}
  options={{
    headerShown: true,
    headerTitleAlign: "center",
    headerLeft: () => null, // Removes the back button
    headerBackVisible: false, // Ensures back button is hidden
    ...TransitionPresets.ScaleFromCenterAndroid,
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
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
     options={{
    headerShown: true,
    headerTitleAlign: "center",
    headerLeft: () => null, // Removes the back button
    headerBackVisible: false, // Ensures back button is hidden
    ...TransitionPresets.ScaleFromCenterAndroid,
  }}
      />
  
    </Stack.Navigator>
  );
}
