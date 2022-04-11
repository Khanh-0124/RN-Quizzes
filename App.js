import AuthStackNavigator from "./src/navigators/AuthStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { auth } from "./src/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import AppStackNavigation from "./src/navigators/AppStackNavigation";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const f_onAuthStateChanged = async (user) => {
    await setCurrentUser(user);
    setIsLoading(false);
  };
  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, f_onAuthStateChanged);
    return subscriber;
  }, []);
  if (isLoading) return null;
  return (
    <NavigationContainer>
      {currentUser ? <AppStackNavigation /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
