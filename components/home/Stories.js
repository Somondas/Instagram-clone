import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'


const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          USERS.map((story, index) => {
            return (
              <View key={index} style={{ alignItems: "center"  }}>
                <Image
                  source={{ uri: story.img }}
                  style={styles.story}
                />
                <Text style={{ color: "#fff" }} >{
                  story.user.length > 8 ? story.user.slice(0, 9).toLowerCase() + "..." : story.user.toLowerCase()
                }</Text>
              </View>
            )

          })
        }
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 7,
    borderWidth: 3,
    borderColor: "#ff8501",
  }
})

export default Stories;