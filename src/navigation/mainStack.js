import React from "react";
import { Home, Login, Splash } from "../screens";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { SplashPageName, LoginPageName, HomePageName } from "../constants/navigationName";

const Stack = createNativeStackNavigator();

export function MainStack() {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SplashPageName} component={Splash} />
      <Stack.Screen name={LoginPageName} component={Login} />
      <Stack.Screen name={HomePageName} component={Home} />
    </Stack.Navigator>
  );
}
