import { View, Text, StyleSheet, FlatList } from "react-native";
import { Image } from "expo-image";

const listofUsers = [
    {
        name: "Nathan",
        profilePic:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        region: "USA",
    },
    {
        name: "John",
        profilePic: "https://avatar.iran.liara.run/public/boy?username=Ash",
        region: "USA",
    },
    {
        name: "Sally",
        profilePic:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        region: "USA",
    },
    {
        name: "Jane",
        profilePic: "https://avatar.iran.liara.run/public/boy?username=Ash",
        region: "USA",
    },
    {
        name: "Sue",
        profilePic:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        region: "Mexico",
    },
    {
        name: "Bob",
        profilePic: "https://avatar.iran.liara.run/public/boy?username=Ash",
        region: "Mexico",
    },
];

export default function Friends() {
    return (
        <FlatList
            data={listofUsers}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source={{ uri: item.profilePic }}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.region}>
                            {item.region || "Unknown"}
                        </Text>
                    </View>
                </View>
            )}
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 8,
        marginHorizontal: 20,
    },
    textContainer: {
        marginLeft: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    region: {
        fontSize: 14,
        color: "#666",
        marginTop: 4,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
});
