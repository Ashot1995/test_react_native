import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { CheckToken } from "../../utils/checkToken";
import { HomePageName, LoginPageName } from "../../constants/navigationName";

export function Splash({ navigation }) {

  useEffect(() => {
    handle();
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
      <Text>Splash</Text>
    </View>
  );
}
