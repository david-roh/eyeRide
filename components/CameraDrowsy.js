import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CameraDrowsy() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.closeButton}
                onPress={() => navigation.navigate("Leaderboard")}
            >
                <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    closeButton: {
        position: "absolute",
        top: 20,
        right: 20,
        zIndex: 10,
    },
    closeButtonText: {
        fontSize: 24,
        color: "black",
    },
});
