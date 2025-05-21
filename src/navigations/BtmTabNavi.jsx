import { View, TouchableOpacity, Animated } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/BtmTabScr/Home";
import NearByPhrmcy from "../Screens/BtmTabScr/NearByPhrmcy";
import { BtmTabSvg, ExtraIcons } from "../assests/imgs/svg";
import { colors } from "../assests/color";
import { useNavigation } from "@react-navigation/native";
import React, { useRef, useEffect } from "react";


const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  const scales = useRef(state.routes.map(() => new Animated.Value(1))).current;

  useEffect(() => {
    scales.forEach((animValue, index) => {
      Animated.spring(animValue, {
        toValue: state.index === index ? 1.2 : 1,
        useNativeDriver: true,
        speed: 20,
        bounciness: 10,
      }).start();
    });
  }, [state.index]);

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: colors.lightGrey,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: "6%",
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: "center",
              padding: 10,
            }}
          >
            <Animated.View style={{ transform: [{ scale: scales[index] }] }}>
              {route.name === "Home" ? (
                isFocused ? (
                  <BtmTabSvg.homeActive />
                ) : (
                  <BtmTabSvg.homeInactive />
                )
              ) : isFocused ? (
                <BtmTabSvg.nearByActive />
              ) : (
                <BtmTabSvg.nearByInactive />
              )}
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


export default function MyTabs() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{ headerStyle: {
      borderBottomWidth: 0, 
      elevation: 0, 
      shadowOpacity: 0, 
    },
}}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="NearByPhrmcy"
        component={NearByPhrmcy}
        options={{
          headerTitle: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("MyTabs", { screen: "Home" })}
            >
              <ExtraIcons.LeftArrow width={30} />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
