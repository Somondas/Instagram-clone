import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LogOutScreen from './screens/LogOutScreen';

const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,
}

// >>SignedInStack Component
export const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator
         initialRouteName="HomeScreen" 
         screenOptions={screenOptions}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="LogOutScreen" component={LogOutScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)
// >> SignedOutStack Component
export const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator
         initialRouteName="LoginScreen" 
         screenOptions={screenOptions}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default SignedInStack