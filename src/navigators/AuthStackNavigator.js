import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SignInScreen,
  SignUpScreen,
  HomeScreen,
  ForgotPassword,
  SplashScreen,
} from "../screens/Index";
const Stack = createStackNavigator();

const AuthStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
