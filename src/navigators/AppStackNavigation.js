import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  HomeScreen,
  CreateQuizScreen,
  AddQuestionScreen,
} from "../screens/Index";
const Stack = createStackNavigator();

const AppStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CreateQuizScreen" component={CreateQuizScreen} />
      <Stack.Screen name="AddQuestionScreen" component={AddQuestionScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigation;
