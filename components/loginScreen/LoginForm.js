import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import { Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as Yup from "yup"
import { Validator } from 'email-validator'
// |                                                                                                 
const LoginForm = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.inputField}>
                <TextInput
                    placeholderTextColor="#444"
                    placeholder="Phone Number, username or email"
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoFocus={true}
                />
            </View>
            <View style={styles.inputField}>
                <TextInput
                    placeholderTextColor="#444"
                    placeholder="Password"
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    keyboardType="password"
                    textContentType='password'
                />

            </View>
            <View style={{ alignItems: "flex-end", marginBottom: 30, }}>
                <Text style={{ color: "#6bb0f5" }}>Forgot Password?</Text>
            </View>
            <Pressable titleSize={20} style={styles.button}>
                <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
            <View style={styles.signupContainer}>

            <Text>Don't have an account?</Text>
            <TouchableOpacity>
                <Text style={{ color: "#6bb0f5"}}>Sign In</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

// >> StyleSheet |||||||||||||
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80
    },
    inputField: {
        borderRadius: 4,
        padding: 10,
        backgroundColor: "#fafafa",
        marginBottom: 10,
        borderWidth: .5,
        borderColor: "grey"

    },
    button: {
        backgroundColor: "#0096f6",
        minHeight: 12,
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        borderRadius: 4,
    },
    buttonText:{
        fontSize: 16,
        color: "#fff",
        fontWeight: "600"
    },
    signupContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        marginTop: 50
    }
})
export default LoginForm