import React, { useState } from "react";
import { Alert, View } from "react-native";
import { AppButton, AppInput } from "@core";
import { SaveToken } from "@utils/saveToken";
import { HomePageName } from "@constants/navigationName";
import { styles } from "./styles";


export function Login({ navigation }) {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const validateFunc = async () => {
    if (login.length >= 5 && password.length >= 5) {
      const date = Math.random().toString(36).substr(2);
      await SaveToken(date);
      navigation.replace(HomePageName);
    } else {
      Alert.alert("Failed");
    }
  };

    let changeInput = (e, name) => {
        name(e)
    }

  return (
    <View style={styles.container}>
      <AppInput
        placeholder={"Login"}
        state={login}
        changeInput={(e) => changeInput(e, setLogin)}
      />
      <AppInput
        placeholder={"Password"}
        state={password}
        secureTextEntry

        changeInput={(e) => changeInput(e, setPassword)}
      />
      <AppButton
          style={styles.lg_btn}
        onPress={validateFunc}
        text={"Login"}
      />
    </View>
  );
}

