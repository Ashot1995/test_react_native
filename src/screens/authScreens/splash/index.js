import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { CheckToken } from "@utils/checkToken";
import { HomePageName, LoginPageName } from "@constants/navigationName";

export function Splash({ navigation }) {

  useEffect(() => {
    let time = setTimeout(async () => {
    await  handle();
    }, 1000)
    return () => clearTimeout(time)
  }, []);

  const handle = async () => {
    const token = await CheckToken();
    if (token) {
      navigation.replace(HomePageName);
    } else {
      navigation.replace(LoginPageName);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.splashText}>Splash</Text>
    </View>
  );
}
