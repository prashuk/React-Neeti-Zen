import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Signup({ navigation }) {
  const signinBtnPressed = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>NeetiZen</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Full Name"
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({ email: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Age"
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({ email: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Sex"
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({ email: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Place of Residence"
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({ password: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Zip Code"
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({ password: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Mobile Number"
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({ password: text })}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signinBtnPressed}>
        <Text style={styles.signinText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f7f7",
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#b21f66",
    marginBottom:40
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
  signinText:{
    color:"#112d4e"
  }
});