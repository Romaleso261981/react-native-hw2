import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Home from "./screens/Home";
import * as Font from "expo-font";

const AuthStack = createStackNavigator();

const loadApplication = async () => {
  if (fontsLoaded) {
    await Font.loadAsync({
      "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    });
  }
};

export default () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Registration" component={Register} />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Home" component={Home} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};
