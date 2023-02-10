import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import {
  SplashPageName,
  LoginPageName,
  HomePageName,
  AddTaskName
} from "@constants/navigationName";
import {
  Home,
  Login,
  Splash,
  AddTask
} from "@screens";

const Stack = createStackNavigator();

export function MainStack() {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SplashPageName} component={Splash} />
      <Stack.Screen name={LoginPageName} component={Login} />
      <Stack.Screen name={HomePageName} component={Home} />
      <Stack.Screen name={AddTaskName} component={AddTask} />
    </Stack.Navigator>
  );
}
