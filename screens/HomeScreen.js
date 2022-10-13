import { Text, SafeAreaView, StyleSheet, Platform, ScrollView } from 'react-native';
import React, {useEffect} from 'react';
import { StatusBar } from 'react-native';
import Header from "../components/home/Header"
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import {POSTS}  from '../data/post';
import BottomTab, { tabIcons } from '../components/home/BottomTab';
import {db} from "../firebase";
// |                                                                                                  
const HomeScreen = ({navigation}) => {
  useEffect(() =>{
    db.collectionGroup('post').onSnapshot(snapshot =>{
      console.log(snapshot.docs.map(doc => doc.data()))
    })
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}/>
      <Stories />
      <ScrollView>
        {
          POSTS.map((post, index) =>{
            return(
              <Post post={post} key={index}/>
            )
          })
        }
      </ScrollView>
      <BottomTab icons={tabIcons}/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
})
export default HomeScreen
