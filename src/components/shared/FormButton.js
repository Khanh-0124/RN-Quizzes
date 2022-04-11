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
          backgroundColor: isPrimary ? COLORS.primary : COLORS.black + "10",
          ...style,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: isPrimary ? COLORS.white : COLORS.black },
        ]}
      >
        {labelText}
      </Text>
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
    fontWeight: "700",
    textAlign: "center",
  },
});
