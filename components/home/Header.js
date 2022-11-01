import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {firebase} from "../../firebase";
import { Alert } from 'react-native';
// >> HandleSignOut Component

const handleSignOut = async () =>{
    try{
        await firebase.auth().signOut()
        Alert.alert("Signed Out Successfully!")
    }catch(err){
        Alert.alert(err.message)
    }
}

// >> Header Component
const header = ({navigation}) => {
    return (

        <View style={styles.container}>
            <TouchableOpacity >
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
            </TouchableOpacity>
            <View style={styles.iconsContainer} >
                <TouchableOpacity onPress={() =>{navigation.push("NewPostScreen")}}>
                    <Image style={styles.icon} source={require("../../assets/post.png")} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.icon} source={require("../../assets/like.png")} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgetext}>11</Text>
                    </View>
                    <Image style={styles.icon} source={require("../../assets/messenger.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSignOut()}>
                    <Image style={styles.icon} source={require("../../assets/logout.png")} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default header

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    iconsContainer: {
        flexDirection: "row",
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: "contain",
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: "contain",
    },
    unreadBadge:{
        backgroundColor: "#ff3250",
        position: "absolute",
        width: 25,
        height: 20,
        borderRadius: 25,
        left: 20,
        bottom: 18,
        zIndex: 100,
        alignItems: "center",
        justifyContent: "center",

    },
    unreadBadgetext:{
        color: "#fff",
        fontWeight: "600",
    }
})