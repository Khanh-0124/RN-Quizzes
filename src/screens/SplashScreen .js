import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Lottie from "../components/animations/Lottie";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("SignInScreen");
    }, 1190);
  }, []);
  return (
    <View style={styles.container}>
      <Lottie
        source={require("../../assets/28891-quiz-bump.json")}
        style={{ width: "90%", aspectRatio: 1, marginTop: 50 }}
      />
      <Lottie
        source={require("../../assets/turtle.json")}
        style={{ width: "37%", aspectRatio: 1 }}
        duration={1800}
      />
      <Text style={{ fontSize: 20, fontWeight: "700" }}>
        Welcome to Khanh's team! 😝
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    // justifyContent: "center",
    alignItems: "center",
  },
});
