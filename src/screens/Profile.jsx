import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, StyleSheet, View, Image, ToastAndroid } from "react-native";
import { Appbar, TextInput } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
const Profile = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    name: "Ajeet",
    email: "ajeet@gmail.com",
  });
  const [uploadimage, setUploadImage] = useState(null);
  const ImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log("image=>:", result);
    if (!result?.canceled) {
      const [image] = result?.assets?.map((img) => ({
        uri: img?.uri,
        name: img?.fileName,
        type: img?.mimeType,
      }));
      console.log("image==>:", image);
      setUploadImage(image);
    }
  };
  const handlesubmit = async () => {
    const formdata = new FormData();
    formdata.append("email", form?.email);
    formdata.append("image", uploadimage);
    try {
      const response = await fetch(
        "https://projects.thexpertcoders.com/image-api/index.php",
        {
          method: "POST",
          body: formdata,
          headers: {
            // Accept:'application/json',
          },
        }
      );
      const data = await response.text();
      console.log("data==>:", data);
      ToastAndroid.show(JSON.stringify(data), ToastAndroid.CENTER);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <View style={styles.main}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content style={{ alignItems: "center" }} title="Profile" />
      </Appbar.Header>
      <View
        style={{ marginTop: 20, gap: 15, width: "90%", alignSelf: "center" }}
      >
        <Button title="Pick Image" onPress={ImagePick} />
        {uploadimage && (
          <Image
            source={{ uri: uploadimage.uri }}
            style={{ width: 200, height: 200 }}
          />
        )}
        {/* <TextInput
          label="name"
          value={form.name}
          onChangeText={(text) =>
            setForm((prevForm) => ({ ...prevForm, name: text }))
          }
        /> */}
        <TextInput
          label="email"
          value={form.email}
          onChangeText={(text) =>
            setForm((prevForm) => ({ ...prevForm, email: text }))
          }
        />
        <Button title="Upload Image" onPress={handlesubmit} />
      </View>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
