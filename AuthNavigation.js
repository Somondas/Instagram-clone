import { View, Text } from 'react-native'
import { userGestureHandlerRef } from '@react-navigation/stack';
import React from 'react'
import SignedInStack, { SignedOutStack } from './navigation'
import { useEffect, useState } from 'react'
import {firebase} from "./firebase";

const AuthNavigation = () => {
    const [currentUser, setcurrentUser] = useState(null)

    const userHandler = user => user ? setcurrentUser(user) : setcurrentUser(null) 
    useEffect(
        () => firebase.auth().onAuthStateChanged(user => userHandler(user)),
        []
    )
    return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>

}

export default AuthNavigation