import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { MaterialIcons as Icon2 } from "@expo/vector-icons";
import { Ionicons as Icon3 } from "@expo/vector-icons";

import CameraStackNavigator from "./components/CameraStackNavigator";
import Profile from "./components/Profile";
import Leaderboard from "./components/Leaderboard";
import Friends from "./components/Friends";
import Home from "./components/Home";
// import FaceDetectionCamera from "./components/FaceDetectionCamera";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="eyeRide"
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            let IconComponent = Icon;
                            if (route.name === "eyeRide") {
                                iconName = focused ? "home" : "home-outline";
                            } else if (route.name === "Camera") {
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
                            } else if (route.name === "Profile") {
                                IconComponent = Icon3;
                                iconName = focused
                                    ? "person-circle"
                                    : "person-circle-outline";
                            }

                            return (
                                <IconComponent
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                        headerStyle: {
                            backgroundColor: "#838181",
                        },
                        headerTintColor: "white",
                        tabBarActiveTintColor: "white",
                        tabBarInactiveTintColor: "white",
                        tabBarStyle: { backgroundColor: "#838181" },
                        tabBarShowLabel: true,
                        headerShown: route.name === "eyeRide" ? false : true,
                    })}
                >
                    <Tab.Screen
                        name="Camera"
                        component={CameraStackNavigator}
                    />
                    <Tab.Screen name="Leaderboard" component={Leaderboard} />
                    <Tab.Screen name="eyeRide" component={Home} />
                    <Tab.Screen name="Friends" component={Friends} />
                    <Tab.Screen name="Profile" component={Profile} />
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
