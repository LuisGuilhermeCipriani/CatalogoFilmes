import React, {useContext} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../contexts/auth";

export default function Listagem({ movies }) {

    const {editMovie, removeMovie} = useContext(AuthContext);

    function handleRemove() {

        Alert.alert('Atenção!', 'Tem certeza que deseja remover este título?', [
            {
                text: 'Sim',
                onPress: () => {
                    removeMovie(movies)
                },
            },
            {
                text: 'Não',
                onPress: () => {
                },
            },
        ]);
    }

    return (
        <View style={styles.container}>
            <View
                style={[styles.card, (movies.tipo === 'DVD') ? { backgroundColor: '#595959' } : { backgroundColor: '#2d5986' }]}
            >
                <View style={styles.leftSide}>
                    <Text style={styles.titulo}>{movies.titulo}</Text>
                    <View style={styles.generos}>
                        {
                            movies.genero.map((item, index) => {
                                return <Text key={index} style={styles.genero}>{item.item}</Text>
                            })
                        }
                    </View>
                </View>
                <View style={styles.rightSide}>
                    <Text style={styles.ano}>{movies.ano}</Text>
                    {
                        (movies.tipo === 'DVD') ?
                            <Image style={styles.logo} source={{ uri: 'https://img.icons8.com/?size=512&id=13692&format=png' }} />
                            :
                            (movies.tipo === 'Blu-Ray') ?
                                <Image style={styles.logo} source={{ uri: 'https://img.icons8.com/?size=512&id=FYlfbemaxRoC&format=png' }} />
                                :
                                <Image style={styles.logo} source={{ uri: 'https://img.icons8.com/?size=512&id=BEa3DoPM5tos&format=png' }} />
                    }
                </View>
            </View>
            <View style={[styles.rodape, (movies.tipo === 'DVD') ? { backgroundColor: '#595959' } : { backgroundColor: '#2d5986' }]}>
                <View style={styles.fieldRodape}>
                    {/* <TouchableOpacity style={styles.edit}>
                        <MaterialIcons
                            name="edit"
                            size={20}
                            style={styles.icon}
                        />
                        <Text 
                            style={styles.textIcon}
                            onPress={() => {editMovie(movies)}}
                        >Editar</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.cancel}>
                        <MaterialIcons
                            name="delete"
                            size={20}
                            style={styles.icon}
                        />
                        <Text 
                            style={styles.textIcon}
                            onPress={handleRemove}
                        >Excluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    card: {
        width: '95%',
        height: 100,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#FFF',
    },
    leftSide: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        padding: 10,
    },
    logo: {
        width: 45,
        height: 45,
        tintColor: '#FFF',
        marginRight: 10,
        marginTop: 5,
    },
    ano: {
        color: '#FFFFFF',
        marginRight: 10,
        fontSize: 15,
    },
    rightSide: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 5,
        width: '15%',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
    },
    generos: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    genero: {
        fontSize: 15,
        color: '#cccccc',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
        marginHorizontal: 5
    },
    rodape: {
        width: '95%',
        height: 30,
        flexDirection: 'column',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#FFF',
        marginBottom: 10,
    },
    fieldRodape: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        width: '100%',
        height: 30,
        borderBottomWidth: 1,
        borderColor: '#FFF',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderLeftWidth: 1,
        borderRightWidth: 1
    },
    edit: {
        flexDirection: 'row',
        backgroundColor: '#009900',
        width: '50%',
        height: 30,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 5,
    },
    cancel: {
        flexDirection: 'row',
        backgroundColor: '#b30000',
        width: '100%',
        height: 30,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 5,
    },
    icon: {
        color: '#000',
    },
    textIcon: {
        color: '#FFF',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
        margin: 5
    }
})