import React from "react";
import {
    Text,
    TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

export function PostItem({ title, description, click }) {

    return (
        <TouchableOpacity style={styles.component} onPress={click}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </TouchableOpacity>
    );

}
