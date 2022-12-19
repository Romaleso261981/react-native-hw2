import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

const Login = ({ navigation }) => {
  const [state, setState] = useState(initialState);

  const [isFocusedMail, setIsFocusedMail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const keboardHideAndSubmit = () => {
    alert(state.password);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Photo_BG.png")}
        style={styles.image}
      >
        <TextInput
          style={{
            ...styles.input,
            backgroundColor: isFocusedMail ? "#FFFFFF" : "#F6F6F6",
            color: isFocusedMail ? "#212121" : "#BDBDBD",
            borderColor: isFocusedMail ? "red" : "green",
          }}
          placeholder="email"
          placeholderTextColor="black"
          onFocus={() => {
            setIsFocusedMail(true);
          }}
          onBlur={() => setIsFocusedMail(false)}
          value={state.email}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, email: value }))
          }
        />
        <TextInput
          style={{
            ...styles.input,
            backgroundColor: isFocusedPassword ? "#FFFFFF" : "#F6F6F6",
            color: isFocusedPassword ? "#212121" : "#BDBDBD",
            borderColor: isFocusedPassword ? "red" : "green",
          }}
          placeholder="password"
          placeholderTextColor="black"
          secureTextEntry={true}
          value={state.password}
          onFocus={() => {
            setIsFocusedPassword(true);
          }}
          onBlur={() => setIsFocusedPassword(false)}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, password: value }))
          }
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btnSubmit}
          onPress={keboardHideAndSubmit}
        >
          <Text style={styles.btnSubmitTitle}>Войти</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          activeOpacity={0.8}
          style={styles.goToLoginPage}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Registration")}
            activeOpacity={0.8}
            style={styles.goToLoginPage}
          >
            <Text style={styles.goRegistration}>
              Нет аккаунта? Зарегистрироваться
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  btnSubmit: {
    marginTop: 43,
    height: 51,
    width: 343,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  goRegistration: {
    fontSize: 16,
    lineHeight: 19,
    marginTop: 16,
    textAlign: "center",
    color: "#1B4371",
  },
  input: {
    marginHorizontal: 16,
    paddingLeft: 16,
    width: 343,
    height: 50,
    marginBottom: 20,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    placeholderTextColor: "#BDBDBD",
    backgroundColor: "#F6F6F6",
  },
});

export default Login;
