import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation= {navigation}/>
      <FormikPostUploader navigation={navigation}/>
    </View>
  )
}
// >> Header Component

const Header = ({navigation}) =>(
  <View style={styles.headerContainer}>
  <TouchableOpacity onPress={() =>navigation.goBack()}>
    <Image
      source={require("../../assets/NewPostScreen/back.png")}
      style={{ width: 30, height: 30, }}
    />
  </TouchableOpacity>
  <Text style={styles.headerText}>NEW POST</Text>
  <Text></Text>
</View>
)


//>> StyleSheet|||||||||||||||||||||||||||||

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontWeight: '700',
    fontSize: 18,
    marginRight: 22,

  },
})

export default AddNewPost;