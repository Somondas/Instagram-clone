import { View, Text, Platform, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native';
import AddNewPost from '../components/newPost/AddNewPost';

const NewPostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AddNewPost/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "black", 
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
})
export default NewPostScreen;