import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Platform,
  Image,
} from "react-native";
import React, { useState } from "react";
import FormButton from "../components/shared/FormButton";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import * as ImagePicker from "expo-image-picker";

const HomeScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigation.replace("SignInScreen");
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        style={{
          width: 100,
          height: 50,
          backgroundColor: "pink",
          justifyContent: "center",
        }}
        onPress={handleSignOut}
      >
        <Text style={{ alignSelf: "center" }}>Đăng xuất</Text>
      </TouchableOpacity>
      <FormButton
        labelText="Tạo Quiz"
        handleOnPress={() => {
          navigation.navigate("CreateQuizScreen");
        }}
      />

      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 400, height: 200 }} />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
