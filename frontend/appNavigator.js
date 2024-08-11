import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/homeScreen';
import StoreScreen from './screens/storeScreen.js';
import Login from './screens/loginScreen.js';
import Header from './header.js';
import styles from './screens/stylesHeader.js'
import Icon from 'react-native-vector-icons/Ionicons'; 

const Stack = createStackNavigator();

const AppNavigator = ({ isLoggedIn, onLogin, onLogout }) => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'}>
          {isLoggedIn ? (
            <>
              <Stack.Screen
                name="Home"
                options={({ navigation }) => ({
                  headerRight: () => (
                    <Icon.Button
                      name="menu"
                      size={25}
                      color="black"
                      backgroundColor="transparent"
                      onPress={() => {
                        styles
                      }} 
                    />
                  ),
                })}
              >
                {(props) => <Home {...props} onLogout={onLogout} />}
              </Stack.Screen>
              <Stack.Screen
                name="StoreScreen"
                options={({ navigation }) => ({
                  title: 'Strona główna',
                  headerRight: () => (
                    <Icon.Button
                      name="menu"
                      size={25}
                      color="black"
                      backgroundColor="transparent"
                      onPress={() => styles} 
                    />
                  ),
                })}
              >
                {(props) => <StoreScreen {...props} onLogout={onLogout} />}
              </Stack.Screen>
            </>
          ) : (
            <Stack.Screen name="Login">
              {(props) => <Login {...props} onLogin={onLogin} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

export default AppNavigator;
