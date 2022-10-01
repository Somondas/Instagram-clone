import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import * as Yup from "yup";
import { Formik } from 'formik';
import { Image } from 'react-native';
import { Divider } from 'react-native-elements';
import validUrl from "valid-url";

// ** Place Holder Image

const PLACEHOLDER_IMG = "https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY=";
// ?? Post Schema

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, 'Caption has reached the characters'),
})
const FormikPostUploader = ({ navigation }) => {
  const [thumbnails, setThumbnails] = useState(PLACEHOLDER_IMG);

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(val) => {
        console.log(val)
        console.log("Value submitted successfully")
        navigation.goBack()
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
                onBlur={handleChange('caption')}
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
            onBlur={handleChange('imageUrl')}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ fontSize: 10, color: "red" }}>{errors.imageUrl}</Text>
          )}
          <Button onPress={handleSubmit} title="Share" disabled={isValid} />
        </>

      )
      }
    </Formik>
  )
}

export default FormikPostUploader