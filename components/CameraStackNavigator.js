import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CameraDrowsy from "./CameraDrowsy";

const Stack = createStackNavigator();

export default function CameraStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                presentation: "modal", // This applies the modal presentation style
                headerShown: false,
            }}
        >
            <Stack.Screen name="CameraDrowsy" component={CameraDrowsy} />
        </Stack.Navigator>
    );
}
