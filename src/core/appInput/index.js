import React from "react";
import { TextInput } from "react-native";

export function AppInput({ state, setState,placeholder }) {

  return (
    <TextInput
      value={state}
      onChangeText={(e) => setState(e)}
      placeholder={placeholder}
    />
  );
}
