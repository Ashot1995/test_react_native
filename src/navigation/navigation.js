import React from "react";




import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./mainStack";


export function Navigation() {

  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  )
}
