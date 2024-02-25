import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";

const listofUsers = [
    {
        name: "Nathan",
        points: 100,
    },
    {
        name: "John",
        points: 90,
    },
    {
        name: "Sally",
        points: 80,
    },
    {
        name: "Jane",
        points: 70,
    },
    {
        name: "Sue",
        points: 60,
    },
    {
        name: "Bob",
        points: 50,
    },
];

export default function Leaderboard() {
    return (
        <View style={styles.parentContainer}>
            <View style={styles.trophyContainer}>
                <Icon name="trophy" size={100} color="#bfa75d" />
            </View>
            <FlatList
                data={listofUsers}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.listItem}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.points}>{item.points} pts</Text>
                    </View>
                )}
                // ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20, // Adjusted for padding from the top of the screen
    },
    trophyContainer: {
        alignItems: "center",
        marginBottom: 20, // Spacing between the trophy icon and the list
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: "#c9c9c9",
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 20,
        elevation: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    name: {
        fontSize: 18,
    },
    points: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#838181",
    },
    separator: {
        height: 1,
        backgroundColor: "#e0e0e0",
        marginHorizontal: 20,
    },
});
