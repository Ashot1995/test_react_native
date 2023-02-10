import React from "react";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

export async function SaveToken(tok) {
  try {
    const token = await asyncStorage.setItem("token",tok);
    return token;
  } catch (e) {
    console.log(e);
  }
}
