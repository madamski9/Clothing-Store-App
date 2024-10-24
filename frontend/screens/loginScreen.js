import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios'
import styles from './stylesLogin.js'

const ip = "localhost:3000"

const Login = ({ onLogin }) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleRegister = () => {
        let regexPassword = /^(?=.*[A-Z])(?=.*[1-9]).{8,}.*$/
        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!email || !password) {
            console.log("prosze wprowadzic email i haslo")
            alert("Proszę wprowadzić email i hasło")
            return
        } else if (!regexEmail.test(email)) {
            console.log("prosze wprowadzic poprawny email")
            alert("Prosze wprowadzic poprawny email")
            return
        } else if (!regexPassword.test(password)) {
            console.log("Haslo musi zawierac conajmniej jedna cyfre, jedna wielka litere i posiadac wiecej niz 7 znakow")
            alert("Haslo musi zawierac conajmniej jedna cyfre, jedna wielka litere i posiadac wiecej niz 7 znakow")
            return
        }

        const registrationData = {
            email: email,
            password: password
        }

        axios.post(`http://${ip}/register`, registrationData)
            .then(result => {
                console.log(result.data)
                console.log("udalo sie zarejestrowac")
            })
            .catch(error => {
                console.error("error rejestracji:", error)
                Alert.alert("Rejestracja nie powiodla sie sprobuj ponownie.")
            })
    }
    const handleLogin = () => {
        let regexPassword = /^(?=.*[A-Z])(?=.*[1-9]).{8,}.*$/
        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!email || !password) {
            console.log("prosze wprowadzic email i haslo")
            alert("Proszę wprowadzić email i hasło")
            return
        } else if (!regexEmail.test(email)) {
            console.log("prosze wprowadzic poprawny email")
            alert("Prosze wprowadzic poprawny email")
            return
        } else if (!regexPassword.test(password)) {
            console.log("Haslo musi zawierac conajmniej jedna cyfre, jedna wielka litere i posiadac wiecej niz 7 znakow")
            alert("Haslo musi zawierac conajmniej jedna cyfre, jedna wielka litere i posiadac wiecej niz 7 znakow")
            return
        }

        const loginData = {
            email: email,
            password: password
        }
        axios.post(`http://${ip}/login`, loginData)
            .then(response => {
                console.log("doszlo tutaj")
                console.log(response.data)
                onLogin(email, password)
            })
            .catch(error => {
                //console.error("Login error:", error)
                console.log("error", error)
                Alert.alert("Logowanie nie powiodlo sie, zarejestruj sie")
                //setError("Logowanie nie powiodlo sie. Sprobuj ponownie")
            })
    }

    return (
        <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.title}>Aplikacja maciek</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <View style={styles.buttons}>
                <TouchableOpacity onPress={handleRegister}>
                    <Text style={styles.zarejestruj}>
                        Zarejestruj się
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.zaloguj}>
                        Zaloguj sie
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
      );
}

export default Login;