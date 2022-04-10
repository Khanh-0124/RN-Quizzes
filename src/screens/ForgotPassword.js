import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from "react-native";
import React, { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";
import FormButton from "../components/shared/FormButton";
import Lottie from "../components/animations/Lottie";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const clearText = () => {
    setEmail("");
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableHighlight
          underlayColor="#DDDDDD"
          style={styles.arrowBack}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="ios-arrow-back" size={29} color="black" />
        </TouchableHighlight>
        <Text style={{ fontSize: 20, fontWeight: "700", marginLeft: 5 }}>
          Đặt lại mật khẩu
        </Text>
      </View>
      {/* Input Email */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View style={styles.input}>
          <TextInput
            placeholder="Nhập vào email "
            style={styles.textInpt}
            value={email}
            onChangeText={(a) => setEmail(a)}
          />
          <TouchableOpacity style={{ position: "absolute", right: 10 }}>
            <Ionicons
              name="close-circle-outline"
              size={24}
              color="#333"
              onPress={clearText}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Button reset password*/}
      <FormButton
        labelText="Tiếp theo"
        //   isPrimary={true}
        //   handleOnPress={handleSubmit}
        style={{
          width: 110,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          top: 10,
        }}
      />
      {/* animation */}
      <Lottie
        source={require("../../assets/forgot-password.json")}
        style={{ width: "100%", aspectRatio: 1, marginTop: 20 }}
        duration={1800}
      />
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  textInpt: {
    paddingHorizontal: 15,
    backgroundColor: COLORS.black + "10",
    width: "100%",
    height: 50,
    borderRadius: 7,
  },
  input: {
    width: "90%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  arrowBack: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  header: {
    flexDirection: "row",
    marginLeft: 10,
    alignItems: "center",
    marginBottom: 10,
  },
});
