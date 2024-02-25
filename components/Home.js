import React from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";

const image = require("../assets/images/eyeRidebg.jpeg");

export default function Home() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                style={styles.image}
                resizeMode="cover"
            >
                <Text style={styles.text}>Welcome to eyeRide</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#FFFFFF",
        fontSize: 32,
        fontWeight: "300",
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: 2,
        backgroundColor: "#000000a0",
        padding: 10,
        width: "70%",
        borderRadius: 16,
    },
});
