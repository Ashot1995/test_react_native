import React from "react";
import { Dimensions, StyleSheet } from "react-native";

let width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    header_cont: {
        width: width-40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 15,
    },
    add_btn:{
        width: 60,
        marginBottom: 10,
    },
    cont: {
        paddingHorizontal: 20,
    },
    scrollView: {
        width: width - 40,
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    more_btn: {
        width: width - 40,
        marginBottom: 10,
    }
});
