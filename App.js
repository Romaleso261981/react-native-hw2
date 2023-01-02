import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Home from "./screens/Home";
import { Dimensions } from "react-native";
// import * as Font from "expo-font";
// import { AppLoading } from "expo";
// import { useState } from "react";

const AuthStack = createStackNavigator();

// const loadApplication = async () => {
//   if (fontsLoaded) {
//     await Font.loadAsync({
//       "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//     });
//   }
// };

export default () => {
  // const [iasReady, setIasReady] = useState(false);
  // if (!iasReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApplication}
  //       onfinish={() => setIasReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={Register}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};
