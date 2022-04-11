import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Image,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../constants/theme";
import FormInput from "../components/shared/FormInput";
import { Ionicons } from "@expo/vector-icons";
import FormButton from "../components/shared/FormButton";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
// import { Alert } from "react-native-web";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [pin, setPin] = useState(false);

  // useEffect(() => {
  //   if (!pin) {
  //     const unsubscribe = onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         // User is signed in, see docs for a list of available properties
  //         // https://firebase.google.com/docs/reference/js/firebase.User
  //         const uid = user.uid;
  //         navigation.navigate("SignInScreen");
  //         // ...
  //       } else {
  //         // User is signed out
  //         // ...
  //       }
  //     });
  //     return unsubscribe;
  //   }
  // }, []);

  const showPassword = () => {
    setShowPass(!showPass);
  };
  const handleSubmit = () => {
    if (email != "" && password != "" && confirmPassword != "") {
      if (password == confirmPassword) {
        setPin(true);
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setPin(false);
            Alert.alert("Thông báo", "🎉Đăng kí thành công🤩", [
              { text: "OK" },
            ]);
            console.log(user.email);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setPin(false);
            alert(errorMessage);
            // ..
          });
      } else {
        ToastAndroid.showWithGravity(
          `Mật khẩu không khớp 😪`,
          ToastAndroid.LONG,
          ToastAndroid.CENTER
        );
      }
    } else {
      ToastAndroid.showWithGravity(
        `Bạn chưa nhập đầy đủ thông tin 😟`,
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text
        style={{
          fontSize: 24,
          color: COLORS.black,
          fontWeight: "bold",
          marginVertical: 32,
        }}
      >
        Đăng ký
      </Text>

      {/* Email */}
      <FormInput
        labelText="Email"
        placeholderText="Nhập vào email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />

      {/* Password */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
        }}
      >
        <FormInput
          labelText="Mật khẩu"
          placeholderText="Nhập mật khẩu"
          value={password}
          onChangeText={(pass) => setPassword(pass)}
          secureTextEntry={showPass}
        />
        <TouchableOpacity
          onPress={showPassword}
          style={{
            position: "absolute",
            alignSelf: "center",
            right: 15,
          }}
        >
          <Ionicons
            style={{ marginTop: 10 }}
            name={showPass ? "md-eye-sharp" : "md-eye-off-sharp"}
            size={24}
            color={COLORS.black + "40"}
          />
        </TouchableOpacity>
      </View>

      {/* confirm password */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
        }}
      >
        <FormInput
          labelText="Xác nhận mật khẩu"
          placeholderText="Nhập lại mật khẩu"
          value={confirmPassword}
          onChangeText={(pass) => setConfirmPassword(pass)}
          secureTextEntry={showPass}
        />
      </View>

      {/* Submit Button */}
      {pin ? (
        <Image
          style={{ width: 70, height: 70 }}
          source={require("../../assets/Ellipsis-1s-200px.gif")}
        ></Image>
      ) : (
        <FormButton
          labelText="Đăng ký"
          isPrimary={true}
          handleOnPress={handleSubmit}
          style={{
            width: 110,
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        />
      )}
      {/* Footer */}
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Text>Bạn đã có tài khoản? </Text>
        <TouchableOpacity
          onPress={() => {
            return navigation.navigate("SignInScreen");
          }}
        >
          <Text style={{ color: COLORS.primary }}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 50,
  },
});
