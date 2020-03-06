import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

export default function Signin({ navigation }) {
  const signupBtnPressed = () => {
    navigation.navigate("SignUp");
  };

  const signinBtnPressed = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>NeetiZen</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={signinBtnPressed}>
        <Text style={styles.loginText}>SIGN IN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signupBtnPressed}>
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f7f7",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#b21f66",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#dbe2ef",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "#112d4e"
  },
  forgot: {
    color: "#112d4e",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#112d4e",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "#dbe2ef"
  },
  signupText: {
    color: "#112d4e"
  }
});
