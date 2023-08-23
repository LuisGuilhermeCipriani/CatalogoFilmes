import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Movies from "../pages/Movies/movies";
import DVD from "../pages/DVD/dvd";
import Bluray from "../pages/Bluray/bluray";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#ffc966'},
                
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontSize: 23,
                    color: '#000'
                },
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Movies"
                component={Movies}
            />
            <Stack.Screen
                name="DVD"
                component={DVD}
            />
            <Stack.Screen
                name="Bluray"
                component={Bluray}
            />
        </Stack.Navigator>
    )
}