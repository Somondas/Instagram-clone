import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from "react-native-elements";
// ? This is array of object for the post footer component
const postfooterIcons = [
  {
    name: "Like",
    imageUrl: "../../assets/like-post.png",
    likedImageUrl: "../assets/like-post-red.png",
  },
  {
    name: "Comment",
    imageUrl: "../assets/post-comment.png"
  },
  {
    name: "Share",
    imageUrl: "../assets/share-post.png"
  },
  {
    name: "Save",
    imageUrl: "../assets/save-post.png"
  },
]
// ? -------- Array Ends
const Post = ({ post }) => {
  return (
    <View style={{marginBottom: 10}}>
      <Divider width={1} orientation='vertical' />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comment post={post} />
      </View>
    </View>
  )
}
// >>For the header
const PostHeader = ({ post }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: "center" }} >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={{ uri: post.profile_picture }} style={styles.story} />
        <Text style={{ color: "#fff", marginLeft: 5, fontWeight: '500', }}>{post.user}</Text>
      </View>
      <Text style={{ color: "#fff", fontWeight: "900" }}>...</Text>
    </View>
  )
}
// >>For the Post Image
const PostImage = ({ post }) => {
  return (
    <View style={{ width: "100%", height: 450 }} >
      <Image source={{ uri: post.imgurl }} style={{ height: "100%", resizeMode: "cover", }} />
    </View>
  )
}
// >>For the Footer
const PostFooter = () => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={styles.leftFooterIcon}>
      <Icon imgStyle={styles.footerIcon} imgUrl={require("../../assets/like-post.png")} />
      <Icon imgStyle={styles.footerIcon} imgUrl={require("../../assets/post-comment.png")} />
      <Icon imgStyle={styles.footerIcon} imgUrl={require("../../assets/share-post.png")} />
    </View>

    <View>
      <Icon imgStyle={styles.footerIcon} imgUrl={require("../../assets/save-post.png")} />
    </View>
  </View>
)
// * Icon component for the icon
const Icon = ({ imgStyle, imgUrl }) => {
  return (
    <TouchableOpacity>
      <Image style={imgStyle} source={imgUrl} />
    </TouchableOpacity>
  )
}
// >> Likes Component
const Likes = ({ post }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 5, }}>
      <Text style={{ color: "#fff", fontWeight: '600', }}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
  )

}
// >> Caption Component
const Caption = ({ post }) => (
  <View style={{ marginTop: 5, }}>
    <Text>
      <Text style={{ fontSize: 16, fontWeight: "600", color: "#fff"}}>{post.user}</Text>
      <Text style={{ color: "#fff"}}>  {post.caption}</Text>
    </Text>

  </View>
)
// >> Comment Section

const CommentSection = ({ post }) => (
  <View style={{ marginTop: 5, }}>
    {!!post.comments.length && (
      <Text style={{ color: "grey", }}>
        View {post.comments.length > 1 ? "all" : ""} {post.comments.length} {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
)
//>>Comment Component

const Comment = ({ post }) =>(
  <>
  {post.comments.map((comment, index) =>(
    <View key={index} style={{flexDirection: "row", marginTop: 5}}>
      <Text style={{color: "#fff"}}>
        <Text style={{fontWeight: "600"}}>{comment.user} </Text>
        {comment.comment}
      </Text>
    </View>
  ))}
  
  </>
)
const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 7,
    borderWidth: 1,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  leftFooterIcon: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  }
})
export default Post;
