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
  KeyboardAvoidingView,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

const Registration = ({ navigation }) => {
  const [state, setState] = useState(initialState);

  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedMail, setIsFocusedMail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isShowKeybord, setIsShowKeybord] = useState(false);

  const keboardHideAndSubmit = () => {
    alert(state.password, state.name);
    setIsShowKeybord(false);
  };

  return (
    <ImageBackground
      source={require("../assets/images/Photo_BG.png")}
      style={styles.image}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          <View
            style={{
              ...styles.avatar,
              top: isShowKeybord ? 50 : 200,
            }}
          ></View>
          <View style={{ ...styles.form, top: isShowKeybord ? 0 : 263 }}>
            <Text style={styles.formTitle}>Регистрация</Text>
            <TextInput
              style={{
                ...styles.input,
                backgroundColor: isFocusedName ? "#FFFFFF" : "#F6F6F6",
                color: isFocusedName ? "#212121" : "#BDBDBD",
                borderColor: isFocusedName ? "red" : "green",
              }}
              placeholder="name"
              placeholderTextColor="black"
              value={state.name}
              onFocus={() => {
                setIsFocusedName(true);
                setIsShowKeybord(true);
              }}
              onBlur={() => setIsFocusedName(false)}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, name: value }))
              }
            />
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
                setIsShowKeybord(true);
              }}
              onBlur={() => setIsFocusedMail(false)}
              value={state.email}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, email: value }))
              }
            />
            <View style={styles.wrapPassword}>
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
                  setIsShowKeybord(true);
                }}
                onBlur={() => setIsFocusedPassword(false)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />
              <Text style={styles.passwordShow}>Показать</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnSubmit}
              onPress={keboardHideAndSubmit}
            >
              <Text style={styles.btnSubmitTitle}>Зарегистрироваться</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              activeOpacity={0.8}
              style={styles.goToHome}
            ></TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
  form: {
    position: "absolute",
    width: 385,
    height: 549,
    backgroundColor: "#ecf0f1",
  },
  avatar: {
    zIndex: 2,
    margin: "auto",
    position: "absolute",
    left: 130,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  formTitle: {
    marginTop: 75,
    color: "#212121",
    fontSize: 30,
    lineHeight: 35,
    fontWeight: "500",
    textAlign: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  btnSubmit: {
    height: 51,
    marginHorizontal: 32,
    marginTop: 43,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  btnSubmitTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },

  input: {
    marginHorizontal: 16,
    marginTop: 16,
    paddingLeft: 16,
    width: 343,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#E8E8E8",
    placeholderTextColor: "#BDBDBD",
    backgroundColor: "#F6F6F6",
  },
  passwordShow: {
    position: "absolute",
    width: 85,
    height: 22,
    right: 36,
    top: 30,
    fontSize: 16,
    borderColor: "#00008b",
    textAlign: "center",
    alignItems: "center",
    borderWidth: 1,
    color: "#1B437",
  },
  wrapPassword: {
    position: "relative",
  },
  inputName: {},
});

export default Registration;