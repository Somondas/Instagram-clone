import { View, StyleSheet, Image, Text, } from 'react-native'
import React, { useState } from 'react';
import { Divider } from "react-native-elements";
import { TouchableOpacity } from 'react-native';

export const tabIcons = [
  {
    name: "Home",
    active: "https://instagram-clone-assets-somondas.netlify.app/bottomTab/home-filled.png",
    inactive: "https://instagram-clone-assets-somondas.netlify.app/bottomTab/home.png",
  },
  {
    name: "Search",
    active: "https://instagram-clone-assets-somondas.netlify.app/bottomTab/search-filled.png",
    inactive: "https://instagram-clone-assets-somondas.netlify.app/bottomTab/search.png",
  },
  {
    name: "Reels",
    active: "https://instagram-clone-assets-somondas.netlify.app/bottomTab/reel-filled.png",
    inactive: "https://instagram-clone-assets-somondas.netlify.app/bottomTab/reel.png",
  },
  {
    name: "Shop",
    active: "https://instagram-clone-assets-somondas.netlify.app/bottomTab/shop-filled.png",
    inactive: "https://instagram-clone-assets-somondas.netlify.app/bottomTab/shop.png",
  },
  {
    name: "Profile",
    active: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    inactive: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
  }
]

const BottomTab = ({ icons }) => {
  const [activeTab, setactiveTab] = useState("");
  
  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => {setactiveTab(icon.name)}}>
      <Image source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={[styles.icons,
        icon.name === "Profile" ? styles.profile_picture() : null,
        //? This line will add a borderWidth to the profile icon
        activeTab === "Profile" && icon.name === activeTab ? styles.profile_picture(activeTab) : null,
        ]} />
    </TouchableOpacity>
  )
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {
          icons.map((icon, index) => (
            <Icon key={index} icon={icon} />
          ))
        }
      </View>
    </View>
  )
}
// ** StyleSheet---------------- 
const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    zIndex: 999,
    bottom: "0%",
    backgroundColor: "#000",

  },
  icons: {
    width: 30,
    height: 30,
    borderRadius: 0,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  profile_picture: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "#fff",
  })
})
export default BottomTab;