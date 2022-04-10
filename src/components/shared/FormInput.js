import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { COLORS } from "../../constants/theme";

const FormInput = (props) => {
  const {
    labelText = "",
    placeholderText = "",
    onChangeText = null,
    value = null,
    ...more
  } = props;
  return (
    <View style={{ width: "100%", marginBottom: 20 }}>
      <Text>{labelText}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholderText}
        onChangeText={onChangeText}
        value={value}
        {...more}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    backgroundColor: COLORS.black + "10",
    borderWidth: 1,
    borderColor: COLORS.black + "25",
    width: "100%",
    borderRadius: 5,
    marginTop: 10,
  },
});
