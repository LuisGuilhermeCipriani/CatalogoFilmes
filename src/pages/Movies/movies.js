import React, { useState, useEffect, useContext, useMemo } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, Modal, TextInput, Pressable, Alert } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../../contexts/auth";
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash';
import RadioGroup from 'react-native-radio-buttons-group';

import Listagem from "../../components/listagem";

const opcoes = [
    {
        item: 'Ação',
        id: '1',
    },
    {
        item: 'Animação',
        id: '2',
    },
    {
        item: 'Aventura',
        id: '3',
    },
    {
        item: 'Comédia',
        id: '4',
    },
    {
        item: 'Dança',
        id: '5',
    },
    {
        item: 'Desenho',
        id: '6',
    },
    {
        item: 'Documentário',
        id: '7',
    },
    {
        item: 'Drama',
        id: '8',
    },
    {
        item: 'Fantasia',
        id: '9',
    },
    {
        item: 'Faroeste',
        id: '10',
    },
    {
        item: 'Ficção',
        id: '11',
    },
    {
        item: 'Guerra',
        id: '12',
    },
    {
        item: 'Musical',
        id: '13',
    },
    {
        item: 'Nacional',
        id: '14',
    },
    {
        item: 'Policial',
        id: '15',
    },
    {
        item: 'Romance',
        id: '16',
    },
    {
        item: 'Série',
        id: '17',
    },
    {
        item: 'Suspense',
        id: '18',
    },
    {
        item: 'Terror',
        id: '19',
    },
]

export default function Movies() {

    const { loadMovies, addMovies, movies } = useContext(AuthContext);

    const [modalVisible, setModalVisible] = useState(false);

    const [title, setTitle] = useState('');
    const [generos, setGeneros] = useState([])
    const [year, setYear] = useState('');
    const [type, setType] = useState('Não Definido');
    const [studio, setStudio] = useState('');
    const [director, setDirector] = useState('');

    const [selectedId, setSelectedId] = useState();

    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: (
                <Text style={{color: '#FFF'}}>{'DVD'}</Text>
              ),
            value: 'dvd',
            color: '#ffc14d',
        },
        {
            id: '2',
            label: (
                <Text style={{color: '#FFF'}}>{'BD'}</Text>
              ),
            value: 'bd',
            color: '#ffc14d'
        },
        {
            id: '3',
            label: (
                <Text style={{color: '#FFF'}}>{'BD-3D'}</Text>
              ),
            value: 'bd-3d',
            color: '#ffc14d'
        },
    ]), []);

    useEffect(() => {

        loadMovies();
    }, []);

    useEffect(() => {

        if(selectedId === '1'){
            setType('DVD');
        }

        if(selectedId === '2'){
            setType('Blu-Ray');
        }

        if(selectedId === '3'){
            setType('Blu-Ray 3D');
        }
    }, [selectedId]);

    function handleAdd() {
        if (title === '' || year == '' || generos === null || studio === '' || director === '') {
            Alert.alert('Por favor, preencha todos os campos!');
            return;
        }

        Alert.alert('Atenção!', 'Tem certeza que deseja cadastrar este título?', [
            {
                text: 'Sim',
                onPress: () => {
                    addMovies(title, generos, year, type, studio, director);
                    setModalVisible(!modalVisible);
                    setTitle('');
                    setYear('');
                    setType('');
                    setGeneros([]);
                    setStudio('');
                    setDirector('');
                },
            },
            {
                text: 'Não',
                onPress: () => {
                },
            },
        ]);
    }

    function handleExit() {
        setModalVisible(!modalVisible);
        setTitle('');
        setYear('');
        setType('');
        setGeneros([]);
        setStudio('');
        setDirector('');
    }

    function onMultiChange() {
        return (item) => setGeneros(xorBy(generos, [item], 'id'))
    }

    function onChange() {
        return (val) => setSelectedTeam(val)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Modal
                style={styles.modal}
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.insideModal}>

                    <View style={styles.fieldModal}>

                        <View style={styles.buttonCancel}>
                            <TouchableOpacity
                                style={styles.cancel}
                                onPress={handleExit}>
                                <View 
                                    style={{
                                        backgroundColor: '#FFF', 
                                        borderRadius: 50, 
                                        width: 30,
                                        height: 30, 
                                        alignItems: 'center', 
                                        justifyContent: 'center'}}>
                                <MaterialIcons
                                    name='cancel'
                                    size={30}
                                    color='#ff4d4d'
                                />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.field}>
                            <View style={styles.inputField}>
                                <TextInput
                                    placeholderTextColor="#FFF"
                                    placeholder="Título"
                                    value={title}
                                    onChangeText={(item) => setTitle(item)}
                                    style={styles.input1}
                                />
                                <TextInput
                                    placeholderTextColor="#FFF"
                                    placeholder="Ano"
                                    value={year}
                                    onChangeText={(item) => setYear(item)}
                                    style={styles.input2}
                                />
                            </View>
                            <View style={styles.inputField}>
                                <TextInput
                                    placeholderTextColor="#FFF"
                                    placeholder="Estúdio"
                                    value={studio}
                                    onChangeText={(item) => setStudio(item)}
                                    style={styles.input3}
                                />
                                <TextInput
                                    placeholderTextColor="#FFF"
                                    placeholder="Diretor"
                                    value={director}
                                    onChangeText={(item) => setDirector(item)}
                                    style={styles.input4}
                                />
                            </View>

                            <RadioGroup
                                radioButtons={radioButtons}
                                onPress={setSelectedId}
                                selectedId={selectedId}
                                layout="row"                               
                            />

                            <SelectBox
                                label={null}
                                options={opcoes}
                                selectedValues={generos}
                                onMultiSelect={onMultiChange()}
                                onTapClose={onMultiChange()}
                                isMulti
                                inputPlaceholder="Selecionar Gênero(s)"
                                width="90%"
                                multiOptionContainerStyle={{ backgroundColor: '#ffaf1a' }}
                                multiOptionsLabelStyle={{ color: '#000', fontSize: 15 }}
                                optionsLabelStyle={{ color: '#FFF' }}
                                arrowIconColor="#ffaf1a"
                                searchIconColor="#ffaf1a"
                                toggleIconColor="#ffaf1a"
                                containerStyle={{borderBottomWidth: 3, borderColor: '#FFF'}}
                                inputFilterStyle={{fontSize: 15}}
                                multiListEmptyLabelStyle={{color: '#FFF'}}
                            />

                        </View>

                        <View style={{ flex: 0 }}>
                            <TouchableOpacity style={styles.cadastrar} onPress={handleAdd}>
                                <Text style={styles.textCadastrar}>CADASTRAR</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

            </Modal>

            <View style={styles.content}>

                <FlatList
                    data={movies}
                    key={item => item.key}
                    renderItem={({ item }) => (
                        <Listagem movies={item}/>
                    )}
                />

            </View>

            <View style={styles.registers}>
                <Text style={styles.registersText}>Registros: {movies.length}</Text>

                <Pressable
                    onPress={() => {
                        setModalVisible(!modalVisible)
                    }}
                >
                    {({ pressed }) => (
                        <MaterialIcons
                            style={[
                                {
                                    color: pressed ? '#D6D6D6' : '#ffc966',
                                },
                            ]}
                            name="add-circle"
                            size={60}
                        />
                    )}
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: 10,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    registros: {
        fontSize: 18,
        color: '#cccccc',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
    },
    add: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: '#ffc966',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 320,
        marginTop: 520,
    },
    textAdd: {
        fontSize: 35,
    },
    buttonCancel: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,

    },
    cancel: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: '#000',
        flex: 1
    },
    insideModal: {
        paddingRight: 6,
        flex: 1,
    },
    fieldModal: {
        backgroundColor: '#737373',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingBottom: 10,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#FFF',
        width: '90%',
        height: 540,
        marginTop: 65,
    },
    field: {
        flex: 15,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10,
        width: '90%',
        height: 500,
    },
    input1: {
        width: '63%',
        borderBottomWidth: 3,
        color: '#FFF',
        borderColor: '#FFF',
        borderRadius: 2,
        marginVertical: 8,
        marginHorizontal: 6,
        padding: 5,
    },
    input2: {
        width: '23%',
        borderBottomWidth: 3,
        color: '#FFF',
        borderColor: '#FFF',
        borderRadius: 2,
        marginVertical: 8,
        marginHorizontal: 6,
        padding: 5,
    },
    input3: {
        width: '33%',
        borderBottomWidth: 3,
        color: '#FFF',
        borderColor: '#FFF',
        borderRadius: 2,
        marginVertical: 8,
        marginHorizontal: 6,
        padding: 5,
    },
    input4: {
        width: '53%',
        borderBottomWidth: 3,
        color: '#FFF',
        borderColor: '#FFF',
        borderRadius: 2,
        marginVertical: 8,
        marginHorizontal: 6,
        padding: 5,
    },
    inputField: {
        flexDirection: 'row'
    },
    registers: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        width: '100%'
    },
    registersText: {
        color: '#cccccc',
        fontSize: 20,
    },
    cadastrar: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 10,
        padding: 10,
        backgroundColor: '#ffc14d'
    },
    textCadastrar: {
        color: '#000',
        textShadowColor: '#FFF',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 5,
        fontWeight: 'bold',
        fontSize: 16
    },
})