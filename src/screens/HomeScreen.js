import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import FormButton from "../components/shared/FormButton";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";

const HomeScreen = ({ navigation }) => {
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
