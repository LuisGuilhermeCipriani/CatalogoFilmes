import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import StackRoutes from "./stackRoutes";
import DVD from "../pages/DVD/dvd";
import Bluray from "../pages/Bluray/bluray";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){

    return(
        <Tab.Navigator
            screenOptions={{
                headerTintColor: '#000',
                headerStyle: {backgroundColor: '#ffc14d'},
                headerTitleStyle: {
                    fontSize: 23,
                    color: '#000'
                },
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#4d3200',
                tabBarActiveBackgroundColor: '#ffc14d',
                tabBarStyle: {
                    backgroundColor: '#ffd280',   // ALTERA A COR DE FUNDO DA BARRA DE TABS
                    borderTopWidth: 0   // ALTERA O TAMANHO DA BORDA SUPERIOR DA BARRA DE TABS
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginBottom: 5
                  },
            }}
        >
            <Tab.Screen 
                name="MoviesStack" 
                component={StackRoutes}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <Image style={styles.logo} source={{ uri: 'https://img.icons8.com/?size=512&id=20846&format=png' }} />
                      },
                    title: 'Filmes'                }}
            />
            <Tab.Screen 
                name="DVD" 
                component={DVD}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <Image style={styles.logo} source={{ uri: 'https://img.icons8.com/?size=512&id=13692&format=png' }} />
                    },
                    title: 'DVDs'
                }}
            />

            <Tab.Screen 
                name="Bluray" 
                component={Bluray}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <Image style={styles.logo} source={{ uri: 'https://img.icons8.com/?size=512&id=FYlfbemaxRoC&format=png' }} />
                    },
                    title: 'Blu-Rays'
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 35,
        height: 25,
        marginTop: 5,
        tintColor: '#805300',
    },
})