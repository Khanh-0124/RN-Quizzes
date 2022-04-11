import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  ToastAndroid,
  TouchableHighlight,
  Button,
  Platform,
} from "react-native";
import { FormButton, FormInput, FormModal } from "../components/shared/index";
import { COLORS } from "../constants/theme";
import React, { useState } from "react";
import { createQuestion } from "../firebase/database";
import { launchImageLibrary } from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";

const AddQuestionScreen = ({ navigation, route }) => {
  const [currentQuizId, setCurrentQuizId] = useState(
    route.params.currentQuizId
  );
  const [currentQuizTitle, setCurrentQuizTitle] = useState(
    route.params.currentQuizTitle
  );
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [optionTwo, setOptionTow] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");
  const [imageUri, setImageUri] = useState("");
  const [image, setImage] = useState(null);
  const handleQuestionSave = async () => {
    if (
      (question == "",
      correctAnswer == "",
      optionTwo == "",
      optionThree == "",
      optionFour == "")
    ) {
      return;
    }
    let currentQuestionId = Math.floor(
      100000 + Math.random() * 9000
    ).toString();
    //add quiz to db
    await createQuestion(currentQuizId, currentQuestionId, {
      question: question,
      correct_answer: correctAnswer,
      incorrect_answers: [optionTwo, optionThree, optionFour],
    });
    ToastAndroid.showWithGravity(
      "Đã lưu câu hỏi",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );

    //reset quiz
    setQuestion("");
    setCorrectAnswer("");
    setOptionTow("");
    setOptionThree("");
    setOptionFour("");
  };
  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={{ marginTop: 50 }}>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
          >
            Thêm câu hỏi
          </Text>
          <Text style={{ fontSize: 15, textAlign: "center", marginBottom: 20 }}>
            cho {currentQuizTitle}
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 30,
          }}
        >
          <FormInput
            labelText="Câu hỏi"
            placeholderText="Thêm câu hỏi"
            value={question}
            onChangeText={(val) => setQuestion(val)}
          />

          {/* add image */}
          {imageUri == "" ? (
            <TouchableHighlight
              style={styles.addImage}
              activeOpacity={1}
              underlayColor="pink"
              onPress={selectImage}
            >
              <Text>+ Thêm ảnh</Text>
            </TouchableHighlight>
          ) : (
            <Image
              source={{ uri: imageUri }}
              resizeMode={"cover"}
              style={{ width: "100%", height: 200, borderRadius: 5 }}
            />
          )}
          {/* Option */}
          <View style={{ marginTop: 30 }}>
            <FormInput
              labelText="Câu trả lừi đúng"
              // placeholderText="Thêm câu hỏi"
              value={correctAnswer}
              onChangeText={(val) => setCorrectAnswer(val)}
            />
            <FormInput
              labelText="Option 2"
              // placeholderText="Thêm câu hỏi"
              value={optionTwo}
              onChangeText={(val) => setOptionTow(val)}
            />
            <FormInput
              labelText="Option 3"
              // placeholderText="Thêm câu hỏi"
              value={optionThree}
              onChangeText={(val) => setOptionThree(val)}
            />
            <FormInput
              labelText="Option 4"
              // placeholderText="Thêm câu hỏi"
              value={optionFour}
              onChangeText={(val) => setOptionFour(val)}
            />
          </View>
          <FormButton
            labelText="Lưu câu hỏi"
            handleOnPress={handleQuestionSave}
          />
          <View style={{ marginVertical: 7 }}>
            <FormButton
              labelText="Hoàn thành & Về trang chủ"
              isPrimary={false}
              handleOnPress={() => {
                setCurrentQuizId("");
                navigation.navigate("HomeScreen");
              }}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddQuestionScreen;

const styles = StyleSheet.create({
  addImage: {
    alignItems: "center",
    justifyContent: "center",
    height: 90,
    padding: 28,
    backgroundColor: COLORS.primary + "20",
    borderRadius: 5,
  },
});
