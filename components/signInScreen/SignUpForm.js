import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-elements'
import { Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as Yup from "yup"
import { Validator } from 'email-validator';
import { Alert } from 'react-native'
import {firebase, db} from "../../firebase";
// |                                                                                                

const SignUpForm = ({ navigation }) => {
    const SignUpFormSchema = Yup.object().shape({
        email: Yup.string().email().required("An email is requred"),
        username: Yup.string().required().min(2, "An Username is required"),
        password: Yup.string().required().min(6, "Password must contain at least 8 character")
    })
    // ? Get random Profile Picture whenever a user Sign In

    const getRandomProfilePicture = async () =>{
        const response = await fetch("https://randomuser.me/api")
        const data = await response.json()
        return data.results[0].picture.large
    }
    // ? Form data submission to firebase
    const onSignUp = async (email, password, username) =>{
        try{
            const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
            Alert.alert("Account created successfully")
            db.collection("users").add({
                owner_uid: authUser.user.uid,
                username: username,
                email: authUser.user.email,
                profile_picture: await getRandomProfilePicture(),

            })
        }catch(err){
            Alert.alert("Invalid", err.message)
        }
    }
    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: "", username: "", password: "", }}
                onSubmit={values => onSignUp(values.email, values.password, values.username)}
                validationSchema={SignUpFormSchema}
                validateOnMount={true}
            >
                {({ handleBlur, handleChange, handleSubmit, values, isValid }) => (

                    <>
                        <View style={[styles.inputField, {
                            borderColor: 1 > values.email.length || values.email.length >= 6 ? "#ccc" : "red"
                        }]}>
                            <TextInput
                                placeholderTextColor="#444"
                                placeholder="Email"
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        <View style={[styles.inputField, {
                            borderColor: 1 > values.username.length || values.username.length >= 2 ? "#ccc" : "red"
                        }]}>
                            <TextInput
                                placeholderTextColor="#444"
                                placeholder="Username"
                                autoCapitalize='none'
                                textContentType='username'
                                autoFocus={true}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                        </View>
                        <View style={[styles.inputField,
                        { borderColor: 1 > values.password.length || values.password.length >= 6 ? "#ccc" : "red" }
                        ]}>
                            <TextInput
                                placeholderTextColor="#444"
                                placeholder="Password"
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                keyboardType="password"
                                textContentType='password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />

                        </View>
                        <View style={{ alignItems: "flex-end", marginBottom: 30, }}>
                        </View>
                        <Pressable
                            onPress={handleSubmit}
                            
                            titleSize={20}
                            style={styles.button(isValid)}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </Pressable>
                        <View style={styles.signupContainer}>

                            <Text>Already have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.push("LoginScreen")}>
                                <Text style={{ color: "#6bb0f5" }}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}
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
        borderColor: "#ccc"

    },
    button: isValid => ({
        backgroundColor: isValid ? "#0096f6" : "#9acaf7",
        minHeight: 12,
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        borderRadius: 4,
    }),
    buttonText: {
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

export default SignUpForm;
