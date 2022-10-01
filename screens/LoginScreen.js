import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const INSTAGRAM_LOGO = "https://instagram-clone-assets-somondas.netlify.app/instagram-logo.png"
const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.imgStyle}>
            <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100}}/>
        </View>
    </View>
  )
}
// >> StyleSheet |||||||||||||
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#fff",
        paddingTop: 50,
        paddingHorizontal: 12,

    },
    imgStyle:{
        alignItems: "center",
        marginTop: 60,
    }

})

export default LoginScreen;