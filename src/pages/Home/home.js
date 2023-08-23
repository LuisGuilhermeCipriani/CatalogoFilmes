import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity 
                style={[styles.card, style = { backgroundColor: '#595959' }]}
                onPress={() => navigation.navigate('DVD')}
            >
                <View style={styles.leftSide}>
                    <Image style={styles.logo} source={{ uri: 'https://img.icons8.com/?size=512&id=13692&format=png' }} />
                    <Text style={styles.midia}>DVDs</Text>
                </View>
                <View style={styles.rightSide}>
                    <Text style={styles.registros}>Nenhum registro</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.card, style = { backgroundColor: '#2d5986' }]}
                onPress={() => navigation.navigate('Bluray')}
            >
                <View style={styles.leftSide}>
                    <Image style={styles.logo} source={{ uri: 'https://img.icons8.com/?size=512&id=FYlfbemaxRoC&format=png' }} />
                    <Text style={styles.midia}>Blu-Rays</Text>
                </View>
                <View style={styles.rightSide}>
                    <Text style={styles.registros}>Nenhum registro</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        width: '95%',
        height: 100,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        margin: 20
    },
    leftSide: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '50%',
    },
    logo: {
        width: 60,
        height: 60,
        tintColor: '#FFF',
    },
    midia: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#f2f2f2',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
        marginLeft: 20
    },
    rightSide: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    registros: {
        fontSize: 18,
        color: '#cccccc',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
    }
})