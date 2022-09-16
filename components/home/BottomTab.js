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
    active: "https://instagram.fgau1-2.fna.fbcdn.net/v/t51.2885-19/287074904_391789372981689_3474324017413615994_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fgau1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=DKCdx1jjilIAX9aguui&tn=f0I_owuBY12wNu-W&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9UKYAivua-Syp7_ZSew9IbCUqS5MbjkDfuHWmfhhEk8A&oe=62DD16A4&_nc_sid=8fd12b",
    inactive: "https://instagram.fgau1-2.fna.fbcdn.net/v/t51.2885-19/287074904_391789372981689_3474324017413615994_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fgau1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=DKCdx1jjilIAX9aguui&tn=f0I_owuBY12wNu-W&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9UKYAivua-Syp7_ZSew9IbCUqS5MbjkDfuHWmfhhEk8A&oe=62DD16A4&_nc_sid=8fd12b",
  }
]

const BottomTab = ({ icons }) => {
  const [activeTab, setactiveTab] = useState("");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setactiveTab(icon.name)}>
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