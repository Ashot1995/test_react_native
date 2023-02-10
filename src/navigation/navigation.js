import React from "react";
import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { MainStack } from "./mainStack";

export function Navigation() {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <MainStack/>
    </NavigationContainer>
  )
}
