import React, { useState, createContext } from "react";
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [movies, setMovies] = useState([]);
    const [moviesDVD, setMoviesDVD] = useState([]);
    const [moviesBD, setMoviesBD] = useState([]);

    async function loadMovies() {

        await firebase.database().ref('filmes').on('value', (snapshot) => {
            setMovies([]);

            snapshot?.forEach((childrenItem) => {
                let data = {
                    key: childrenItem.key,
                    titulo: childrenItem.val().titulo,
                    genero: childrenItem.val().genero,
                    ano: childrenItem.val().ano,
                    tipo: childrenItem.val().tipo,
                    estudio: childrenItem.val().estudio,
                    diretor: childrenItem.val().diretor
                }
                setMovies(oldMovies => [...oldMovies, data]);
            })
        })
    }

    async function loadMoviesDVD() {

        await firebase.database().ref('filmes').on('value', (snapshot) => {
            setMoviesDVD([]);

            snapshot?.forEach((childrenItem) => {
                let data = {
                    key: childrenItem.key,
                    titulo: childrenItem.val().titulo,
                    genero: childrenItem.val().genero,
                    ano: childrenItem.val().ano,
                    tipo: childrenItem.val().tipo,
                    estudio: childrenItem.val().estudio,
                    diretor: childrenItem.val().diretor
                }

                if (data.tipo === "DVD") {
                    setMoviesDVD(oldMovies => [...oldMovies, data]);
                }
            })
        })
    }

    async function loadMoviesBD() {

        await firebase.database().ref('filmes').on('value', (snapshot) => {
            setMoviesBD([]);

            snapshot?.forEach((childrenItem) => {
                let data = {
                    key: childrenItem.key,
                    titulo: childrenItem.val().titulo,
                    genero: childrenItem.val().genero,
                    ano: childrenItem.val().ano,
                    tipo: childrenItem.val().tipo,
                    estudio: childrenItem.val().estudio,
                    diretor: childrenItem.val().diretor
                }

                if ((data.tipo === "Blu-Ray") || (data.tipo === "Blu-Ray 3D")) {
                    setMoviesBD(oldMovies => [...oldMovies, data]);
                }
            })
        })
    }

    async function addMovies(title, genre, year, type, studio, director) {

        const dates = await firebase.database().ref('filmes');
        const randomKey = dates.push().key;

        dates.child(randomKey).set({
            titulo: title,
            genero: genre,
            ano: year,
            tipo: type,
            estudio: studio,
            diretor: director
        })
            .then(() => {
                alert("Título adicionado com sucesso!");
            })
            .catch(() => {
                alert("Não foi possível adicionar o título");
            })
    }

    async function editMovie(movies) {

        await firebase.database().ref('filmes').child(movies.key).update(
            {
                title: movies.title,
                genre: movies.genre,
                year: movies.year,
                type: movies.type,
                studio: movies.studio,
                director: movies.director
            }.then(() => {
                alert("Título editado com sucesso!");
            })
                .catch(() => {
                    alert("Não foi possível editar o título!");
                })
        )
    }

    async function removeMovie(registers) {
        await firebase.database().ref('filmes').child(registers.key).remove()
            .then(() => {
                (alert("Título " + registers.titulo.toUpperCase() + " excluído com sucesso!"));
            })
            .catch(() => {
                alert("Não foi possível excluir o título " + registers.titulo);
            })
    }

    return (
        <AuthContext.Provider
            value={{ movies, loadMovies, addMovies, editMovie, removeMovie, moviesDVD, loadMoviesDVD, loadMoviesBD, moviesBD }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;