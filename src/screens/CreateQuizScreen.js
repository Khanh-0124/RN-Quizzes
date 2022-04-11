import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants/theme";
import FormInput from "../components/shared/FormInput";
import FormButton from "../components/shared/FormButton";
import { createQuiz } from "../firebase/database";

const CreateQuizScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleQuizSave = async () => {
    const currentQuizId = Math.floor(100000 + Math.random() * 9000).toString();
    //save to firestore
    await createQuiz(currentQuizId, title, description);
    navigation.navigate("AddQuestionScreen", {
      currentQuizId: currentQuizId,
      currentQuizTitle: title,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Tạo Quiz</Text>
      <FormInput
        labelText="Tiêu đề"
        placeholderText="nhập vào tiêu đề quiz"
        onChangeText={(val) => setTitle(val)}
        value={title}
      />
      <FormInput
        labelText="Mô tả"
        placeholderText="nhập vào mô tả quiz"
        onChangeText={(val) => setDescription(val)}
        value={description}
      />
      <FormButton labelText="Lưu Quiz" handleOnPress={handleQuizSave} />
      {/* temporary button - navigate without saving quizz  */}
      <FormButton
        labelText="chuyển sang add screen"
        handleOnPress={() => {
          navigation.navigate("AddQuestionScreen", {
            currentQuizId: "104435",
            currentQuizTitle: "test quizz",
          });
        }}
      />
    </SafeAreaView>
  );
};

export default CreateQuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 30,
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
    fontWeight: "bold",
    color: COLORS.black,
  },
});
