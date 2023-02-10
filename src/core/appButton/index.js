import React from "react";
import { styles } from "./styles";
import { Text, TouchableOpacity } from "react-native";

export function AppButton({ text, onPress, style }) {

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}
