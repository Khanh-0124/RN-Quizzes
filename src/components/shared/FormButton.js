import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";
const FormButton = (props) => {
  const {
    labelText = "",
    handleOnPress,
    style,
    isPrimary = true,
    ...more
  } = props;
  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={[
        styles.button,
        {
          backgroundColor: isPrimary ? COLORS.primary : COLORS.black,
          ...style,
        },
      ]}
    >
      <Text style={styles.text}>{labelText}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.primary,
  },
  text: {
    color: COLORS.white,
    fontWeight: "700",
    textAlign: "center",
  },
});
