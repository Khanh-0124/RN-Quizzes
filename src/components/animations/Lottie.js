import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const Lottie = (props) => {
  const {
    source,
    loop = true,
    autoPlay = true,
    autoSize = true,
    resizeMode = "cover",
    colorFilters,
    style,
    ...more
  } = props;
  return (
    <View>
      <LottieView
        source={source}
        style={style}
        autoPlay={autoPlay}
        loop={loop}
        colorFilters={colorFilters}
        {...more}
      />
    </View>
  );
};

export default Lottie;

const styles = StyleSheet.create({});
