import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import CameraDrowsy from "./components/CameraDrowsy";
import SettingScreen from "./components/SettingScreen";
import Leaderboard from "./components/Leaderboard";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === "Camera") {
                                iconName = focused
                                    ? "camera"
                                    : "camera-outline";
                            } else if (route.name === "Leaderboard") {
                                iconName = focused
                                    ? "trophy"
                                    : "trophy-outline";
                            } else if (route.name === "Settings") {
                                iconName = focused ? "cog" : "cog-outline";
                            }
                            return (
                                <Icon
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                        tabBarActiveTintColor: "tomato",
                        tabBarInactiveTintColor: "gray",
                        tabBarStyle: { backgroundColor: "#25292e" },
                    })}
                >
                    <Tab.Screen name="Camera" component={CameraDrowsy} />
                    <Tab.Screen name="Leaderboard" component={Leaderboard} />
                    <Tab.Screen name="Settings" component={SettingScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: "center",
    },
    optionsContainer: {
        position: "absolute",
        bottom: 80,
    },
    optionsRow: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
});
