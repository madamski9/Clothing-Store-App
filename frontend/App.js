import React, { useState } from 'react';
import axios from 'axios'
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './appNavigator.js';

const ip = "localhost:3000"

const Stack = createStackNavigator();

export default function App() {
  const [ error, setError ] = useState(null)
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  const handleLogin = (email, password) => {
    axios.post(`http://${ip}/login`, { email, password })
      .then(response => {
        console.log(response.data)
        console.log("doszlo tu3")
        setIsLoggedIn(true)
      })
      .catch(error => {
        console.error("Login error:", error)
        setError("Logowanie nie powiodlo sie. Sprobuj ponownie")
      })
  }

  const handleLogout = () => {
    // Logika wylogowania
    setIsLoggedIn(false);
  };

  return (
    <AppNavigator 
      isLoggedIn={isLoggedIn} 
      onLogin={handleLogin} 
      onLogout={handleLogout}
      />
  );
}