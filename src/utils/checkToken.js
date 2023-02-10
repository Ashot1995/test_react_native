import React from "react";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";


export async function CheckToken() {
  try {
    const token = await asyncStorage.getItem("token");
    return token;
  } catch (e) {
    console.log(e);
  }
}
