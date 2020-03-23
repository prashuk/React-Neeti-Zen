import React from "react";
import {
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Alert
} from "react-native";
import { Block, Button, Text, theme, Input, Icon } from "galio-framework";

const { width } = Dimensions.get("screen");

import ApiKeys from "../constants/ApiKeys";
import * as firebase from "firebase";

class Onboarding extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      loginBtnText: "LOG IN",
      signUpBtnText: "Sign Up",
      formLogin: 1,
      formSignup: 0,
      formEnterOTP: 0,
      formForgotPwd: 0,
      loginFlag: 0
    };

    this.selectForm = this.selectForm.bind(this);

    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
  }

  loginBtnPressed() {
    const { navigation } = this.props;
    if (this.state.loginBtnText === "LOG IN") {
      try {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(function(user) {
            global.User = user;
            navigation.navigate("App");
          });
      } catch (error) {
        console.log(error.toString());
      }
    } else if (this.state.loginBtnText === "SIGN UP") {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userInfo => {
          console.log(userInfo);
          userInfo.user
            .updateProfile({ displayName: displayName.trim() })
            .then(() => {});
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    } else {
    }
  }

  signupBtnPressed() {
    if (this.state.formSignup === 0) {
      this.setState({
        formLogin: 0,
        formSignup: 1,
        formEnterOTP: 0,
        formForgotPwd: 0,
        loginBtnText: "SIGN UP",
        signUpBtnText: "Log In"
      });
    } else {
      this.setState({
        formLogin: 1,
        formSignup: 0,
        formEnterOTP: 0,
        formForgotPwd: 0,
        loginBtnText: "LOG IN",
        signUpBtnText: "Sign Up"
      });
    }
  }

  forgotBtnPressed() {
    this.setState({
      formLogin: 0,
      formSignup: 0,
      formEnterOTP: 0,
      formForgotPwd: 1,
      loginBtnText: "RESET PASSWORD",
      signUpBtnText: "Sign Up"
    });
  }

  phoneOTPForm() {
    this.setState({
      formLogin: 0,
      formSignup: 0,
      formEnterOTP: 1,
      formForgotPwd: 0,
      loginFlag: 0
    });
  }

  showAlert = () => {
    Alert.alert(
      "Email / Password Incorrect",
      "Please enter correct Email ID / Password and then again try logging in OR reset it.",
      [
        {
          text: "Reset Password",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };

  selectForm = () => {
    return this.renderForms();
  };

  renderForms = () => {
    if (this.state.formLogin === 1) {
      return (
        <Block style={{ padding: 20 }}>
          <Block>
            <Input
              placeholder="Email"
              onChangeText={text => this.setState({ email: text })}
              iconContent={
                <Icon
                  size={20}
                  name="email"
                  style={{ marginRight: 10 }}
                  color="#4f3961"
                  family="ArgonExtra"
                ></Icon>
              }
            ></Input>
          </Block>
          <Block>
            <Input
              placeholder="Password"
              onChangeText={text => this.setState({ password: text })}
              iconContent={
                <Icon
                  size={20}
                  style={{ marginRight: 10 }}
                  color="#4f3961"
                  name="security"
                  family="ArgonExtra"
                ></Icon>
              }
            ></Input>
          </Block>
        </Block>
      );
    }
    if (this.state.formSignup === 1) {
      return (
        <Block style={{ padding: 20 }}>
          <Block>
            <Input
              placeholder="Name"
              onChangeText={text => this.setState({ name: text })}
              iconContent={
                <Icon
                  size={20}
                  style={{ marginRight: 10 }}
                  color="#4f3961"
                  name="person"
                  family="ArgonExtra"
                ></Icon>
              }
            ></Input>
          </Block>
          <Block>
            <Input
              placeholder="Email"
              onChangeText={text => this.setState({ email: text })}
              iconContent={
                <Icon
                  size={20}
                  style={{ marginRight: 10 }}
                  color="#4f3961"
                  name="email"
                  family="ArgonExtra"
                ></Icon>
              }
            ></Input>
          </Block>
          <Block>
            <Input
              placeholder="Password"
              onChangeText={text => this.setState({ password: text })}
              iconContent={
                <Icon
                  size={20}
                  style={{ marginRight: 10 }}
                  color="#4f3961"
                  name="security"
                  family="ArgonExtra"
                ></Icon>
              }
            ></Input>
          </Block>
        </Block>
      );
    }

    if (this.state.formForgotPwd === 1) {
      return (
        <Block>
          <Block style={{ padding: 20 }}>
            <Input
              placeholder="Enter Email ID to reset Password"
              onChangeText={text => this.setState({ email: text })}
              style={{ textColor: "red" }}
              iconContent={
                <Icon
                  size={20}
                  style={{ marginRight: 10 }}
                  color="#4f3961"
                  name="email"
                  family="ArgonExtra"
                ></Icon>
              }
            ></Input>
          </Block>
        </Block>
      );
    }
  };

  render() {
    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center></Block>
        <Block center>
          <Image
            source={require("../assets/imgs/logo.png")}
            style={styles.logo}
          />
        </Block>
        {this.selectForm()}
        <Block flex style={styles.padded}>
          <Block>
            <Block center>
              <Button
                style={styles.button}
                color="#4f3961"
                onPress={() => this.loginBtnPressed()}
                textStyle={{ color: "white" }}
              >
                {this.state.loginBtnText}
              </Button>
              <TouchableOpacity onPress={() => this.signupBtnPressed()}>
                <Text
                  style={{
                    height: 40,
                    width: "100%",
                    marginTop: 10,
                    color: "#4f3961"
                  }}
                >
                  {this.state.signUpBtnText}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.forgotBtnPressed()}>
                <Text
                  style={{
                    height: 40,
                    width: "100%",
                    marginTop: 5,
                    color: "#4f3961"
                  }}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff2ff"
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3
  },
  logo: {
    width: width - theme.SIZES.BASE * 4,
    height: 93,
    position: "relative",
    marginTop: "-60%"
  }
});

export default Onboarding;
