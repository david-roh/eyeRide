import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { MaterialIcons as Icon2 } from "@expo/vector-icons";
import { Ionicons as Icon3 } from "@expo/vector-icons";

import CameraStackNavigator from "./components/CameraStackNavigator";
import SettingScreen from "./components/SettingScreen";
import Leaderboard from "./components/Leaderboard";
import Friends from "./components/Friends";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            let IconComponent = Icon;

                            if (route.name === "Camera") {
                                iconName = focused
                                    ? "camera"
                                    : "camera-outline";
                            } else if (route.name === "Leaderboard") {
                                iconName = focused
                                    ? "trophy"
                                    : "trophy-outline";
                            } else if (route.name === "Friends") {
                                IconComponent = Icon2;
                                iconName = focused
                                    ? "people"
                                    : "people-outline";
                            } else if (route.name === "Settings") {
                                IconComponent = Icon3;
                                iconName = focused
                                    ? "settings"
                                    : "settings-outline";
                            }

                            return (
                                <IconComponent
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                        tabBarActiveTintColor: "white",
                        tabBarInactiveTintColor: "white",
                        tabBarStyle: { backgroundColor: "gray" },
                    })}
                >
                    <Tab.Screen
                        name="Camera"
                        component={CameraStackNavigator}
                    />
                    <Tab.Screen name="Leaderboard" component={Leaderboard} />
                    <Tab.Screen name="Friends" component={Friends} />
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
