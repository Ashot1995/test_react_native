import React from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

export function AppInput({ state, changeInput, placeholder,secureTextEntry }) {

  return (
    <TextInput
      value={state}
      onChangeText={(e) => changeInput(e)}
      placeholder={placeholder}
      style={styles.input}
      placeholderTextColor={'black'}
      secureTextEntry={secureTextEntry}
    />
  );
}
