import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { COLORS } from "../constants/theme";
import FormInput from "../components/shared/FormInput";
import { Ionicons } from "@expo/vector-icons";
import FormButton from "../components/shared/FormButton";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const SignInScreen = ({ navigation }) => {
  // const emailRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [pin, setPin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        navigation.navigate("HomeScreen");
      } else {
        // User is signed out
        // ...
      }
    });
    return unsubscribe;
  });

  const showPassword = () => {
    setShowPass(!showPass);
  };

  // const forgotPasswordHandler = () => {
  //   sendPasswordResetEmail(auth, email).then(() => {

  //   })
  // }

  const handleSubmit = () => {
    if (email !== "" && password !== "") {
      //Sign In
      setPin(true);

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setPin(false);
          console.log("logined with: ", user.email);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setPin(false);
          Alert.alert("Tài khoản hoặc mật khẩu sai!");
        });
    } else {
      Alert.alert("Bạn phải nhập đủ thông tin");
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
        Đăng nhập
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

      {/* Submit Button */}
      {pin ? (
        <Image
          style={{ width: 70, height: 70 }}
          source={require("../../assets/Ellipsis-1s-200px.gif")}
        ></Image>
      ) : (
        <FormButton
          labelText="Đăng nhập"
          isPrimary={true}
          handleOnPress={handleSubmit}
          style={{ width: 110, justifyContent: "center", alignItems: "center" }}
        />
      )}

      {/* Footer */}
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => {
            return navigation.navigate("ForgotPassword");
          }}
        >
          <Text style={{ color: COLORS.primary }}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Text>Bạn chưa có tài khoản? </Text>
        <TouchableOpacity
          onPress={() => {
            return navigation.navigate("SignUpScreen");
          }}
        >
          <Text style={{ color: COLORS.primary }}>Tạo tài khoản</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 50,
  },
});
