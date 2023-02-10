import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { AppButton, AppInput } from "../../core";
import { SaveToken } from "../../utils/saveToken";
import { CheckToken } from "../../utils/checkToken";
import { HomePageName } from "../../constants/navigationName";

export function Login({ navigation }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const validateFunc = async () => {
    if (login.length >= 5 && password.length >= 5) {
      const date = new Date().getMilliseconds;
      await SaveToken(date);
      const token = await CheckToken();
      if (token) {
        navigation.replace(HomePageName);
      } else {
        Alert.alert("Failed");
      }
    } else {
      Alert.alert("Failed");
    }
  };

  return (
    <View>
      <AppInput
        placeholder={"Login"}
        state={login}
        setState={setLogin}
      />
      <AppInput
        placeholder={"Password"}
        state={password}
        setState={setPassword}
      />
      <AppButton
        onPress={validateFunc}
      />
    </View>
  );
}

