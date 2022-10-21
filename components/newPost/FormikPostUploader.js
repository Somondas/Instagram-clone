import { View, Text, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Yup from "yup";
import { Formik } from 'formik';
import { Image } from 'react-native';
import { Divider } from 'react-native-elements';
import validUrl from "valid-url";
import { db, firebase } from "../../firebase";
// |||||||||||||||                                                                                                         
// ** Place Holder Image
const PLACEHOLDER_IMG = "https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY=";
// ?? Post Schema

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, 'Caption has reached the characters'),
})
const FormikPostUploader = ({ navigation }) => {
  const [thumbnails, setThumbnails] = useState(PLACEHOLDER_IMG);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState({username: "not-working-fun", profilePicture: "not-working-fun"});

  // ? Get User Name 
  const getUserName = () => {
    const user = firebase.auth().currentUser
    const unsubcribe = db
      .collection("users")
      .where("owner_uid", "==", user.uid).limit(1).onSnapshot(
        snapshot => snapshot.docs.map(doc => {
          setCurrentLoggedInUser({
            username: doc.data().username,
            profilePicture: doc.data().profile_picture,
          })
        })
      )
    return unsubcribe
  }
  // ** Get the Username
  useEffect(() => {
    getUserName()
  }, [])
  // ? Upload Post To Firebase 

  const uploadPostToFirebase = (imageUrl, caption) => {
    const unsubcribed = db
      .collection("users")
      .doc(firebase.auth().currentUser.email)
      .collection('posts')
      .add({
        imageUrl: imageUrl,
        user: currentLoggedInUser.username,
        profile_picture: currentLoggedInUser.profilePicture,
        owner_uid: firebase.auth().currentUser.uid,
        caption: caption,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        likes: 0,
        likes_by_users: [],
        comments: [],
      })
      .then(() => navigation.goBack())
    return unsubcribed
  }
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        uploadPostToFirebase(values.imageUrl, values.caption)
      }
      }
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
        <>
          <View style={{ margin: 20, justifyContent: "space-between", flexDirection: "row", }}>
            <Image
              source={{ uri: validUrl.isUri(thumbnails) ? thumbnails : PLACEHOLDER_IMG }}
              style={{ width: 100, height: 100, }}
            />
            <View style={{ flex: 1, marginLeft: 12, }}>

              <TextInput
                style={{ color: "#fff", fontSize: 20, paddingBottom: 8, paddingLeft: 5 }}
                placeholder='Enter a Caption'
                placeholderTextColor="grey"
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
              />
            </View>

          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            onChange={e => setThumbnails(e.nativeEvent.text)}
            style={{ color: "#fff", fontSize: 18, paddingBottom: 8, paddingLeft: 5 }}
            placeholder='Enter Image URL'
            placeholderTextColor="grey"
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ fontSize: 10, color: "red" }}>{errors.imageUrl}</Text>
          )}
          <Button onPress={handleSubmit} title="Share" />
        </>

      )
      }
    </Formik>
  )
}

export default FormikPostUploader