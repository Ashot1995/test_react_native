import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export function AppButton({text,onPress}){

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}
