import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-elements'
import { Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as Yup from "yup"
import { Validator } from 'email-validator';
// |                                                                                                 
const LoginForm = () => {
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required("An email is requred"),
        password: Yup.string().required().min(6, "Password must contain at least 8 character")
    })
    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: "", password: "", }}
                onSubmit={values => {
                    console.log(values);
                }}
                validationSchema={LoginFormSchema}
                validateOnMount={true}
            >
                {({ handleBlur, handleChange, handleSubmit, values, isValid }) => (

                    <>
                        <View style={[styles.inputField,{
                            borderColor: 1 > values.email.length || values.email.length >= 6 ? "#ccc": "red"
                        }]}>
                            <TextInput
                                placeholderTextColor="#444"
                                placeholder="Phone Number, username or email"
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        <View style={[styles.inputField, 
                        {borderColor: 1 > values.password.length || values.password.length >= 6 ? "#ccc": "red"}
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
                            <Text style={{ color: "#6bb0f5" }}>Forgot Password?</Text>
                        </View>
                        <Pressable
                            onPress={handleSubmit}
                            titleSize={20}
                            style={styles.button(isValid)}
                            disabled={!isValid}
                            >
                            <Text style={styles.buttonText}>Log In</Text>
                        </Pressable>
                        <View style={styles.signupContainer}>

                            <Text>Don't have an account?</Text>
                            <TouchableOpacity>
                                <Text style={{ color: "#6bb0f5" }}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
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
        borderColor: "#ccc"

    },
    button: isValid =>({
        backgroundColor: isValid ? "#0096f6": "#9acaf7",
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
export default LoginForm;