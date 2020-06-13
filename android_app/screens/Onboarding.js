import React from "react";
import {
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Alert,
  CheckBox,
  View,
  KeyboardAvoidingView
} from "react-native";
import { Block, Button, Text, theme, Input, Icon } from "galio-framework";
import ApiKeys from "../constants/ApiKeys";
import * as firebase from "firebase";
import Spinner from "react-native-loading-spinner-overlay";

const { width } = Dimensions.get("screen");

class Onboarding extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spinner: false,
      name: "",
      email: "",
      age: "",
      place: "",
      mobile: "",
      password: "",
      loginBtnText: "LOG IN",
      signUpBtnText: "Sign Up",
      formLogin: 1,
      formSignup: 0,
      formEnterOTP: 0,
      formForgotPwd: 0,
      loginFlag: 0,
      terms: false,
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
  }

  updateCheckedState = () => {
    this.setState({ terms: !this.state.terms });
  };

  updateState = async () => {
    this.setState({ spinner: true });
  };

  loginBtnPressed = () => {
    this.updateState();
    const { navigation } = this.props;

    if (this.state.loginBtnText === "LOG IN") {
      if (this.state.email === "" || this.state.password === "") {
        this.setState({ spinner: false });
        alert("Fill all fields");
        return;
      }
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
          global.User = user;
          this.setState({ spinner: false });
          navigation.navigate("App");
        })
        .catch((error) => {
          this.setState({ spinner: false });
          alert(error.message);
        });
    } else if (this.state.loginBtnText === "SIGN UP") {
      if (
        this.state.name === "" ||
        this.state.email === "" ||
        this.state.age === "" ||
        this.state.place === "" ||
        this.state.mobile === "" ||
        this.state.password === "" ||
        this.state.terms === false
      ) {
        this.setState({ spinner: false });
        alert("Fill all fields");
        return;
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredentials) => {
          firebase
            .database()
            .ref("users/" + userCredentials.user.uid + "/profile/")
            .set({
              name: this.state.name,
              email: this.state.email,
              age: this.state.age,
              place: this.state.place,
              mobile: this.state.mobile,
            })
            .then(() => {
              alert("Registration Complete!\nPlease Login");
              this.setState({
                formLogin: 1,
                formSignup: 0,
                formEnterOTP: 0,
                formForgotPwd: 0,
                loginFlag: 0,
                loginBtnText: "LOG IN",
                signUpBtnText: "Sign Up",
              });
            })
            .catch((error) => {
              this.setState({ spinner: false });
              alert(error.message);
            });
        })
        .catch((error) => {
          this.setState({ spinner: false });
          alert(error.message);
        });
    } else if (this.state.loginBtnText === "RESET PASSWORD") {
      if (this.state.email === "") {
        this.setState({ spinner: false });
        alert("Enter email id");
        return;
      }
      firebase
        .auth()
        .sendPasswordResetEmail(this.state.email)
        .then((user) => {
          this.setState({ spinner: false });
          alert("Please check your email");
        })
        .catch((error) => {
          this.setState({ spinner: false });
          alert(error);
        });
    }
  };

  signupBtnPressed() {
    if (this.state.formSignup === 0) {
      this.setState({
        formLogin: 0,
        formSignup: 1,
        formEnterOTP: 0,
        formForgotPwd: 0,
        loginBtnText: "SIGN UP",
        signUpBtnText: "Log In",
      });
    } else {
      this.setState({
        formLogin: 1,
        formSignup: 0,
        formEnterOTP: 0,
        formForgotPwd: 0,
        loginBtnText: "LOG IN",
        signUpBtnText: "Sign Up",
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
      signUpBtnText: "Sign Up",
    });
  }

  phoneOTPForm() {
    this.setState({
      formLogin: 0,
      formSignup: 0,
      formEnterOTP: 1,
      formForgotPwd: 0,
      loginFlag: 0,
    });
  }

  showAlert = () => {
    Alert.alert(
      "Email / Password Incorrect",
      "Please enter correct Email ID / Password and then again try logging in OR reset it.",
      [
        {
          text: "Reset Password",
          onPress: () => console.log("Ask me later pressed"),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
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
          <Block center>
            <Image
              source={require("../assets/imgs/logo.png")}
              style={styles.logo}
            />
          </Block>
          <Block>
            <Input
              placeholder="Email"
              type={"email-address"}
              autoCapitalize="none"
              onChangeText={(text) => this.setState({ email: text })}
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
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={(text) => this.setState({ password: text })}
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
          <Block center>
            <Image
              source={require("../assets/imgs/logo.png")}
              style={styles.logo}
            />
          </Block>
          <Block>
            <Input
              placeholder="Name"
              onChangeText={(text) => this.setState({ name: text })}
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
              type={"email-address"}
              autoCapitalize="none"
              onChangeText={(text) => this.setState({ email: text })}
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
              placeholder="Age & Sex"
              onChangeText={(text) => this.setState({ age: text })}
              iconContent={
                <Icon
                  size={20}
                  style={{ marginRight: 10 }}
                  color="#4f3961"
                  name="details"
                  family="ArgonExtra"
                ></Icon>
              }
            ></Input>
          </Block>
          <Block>
            <Input
              placeholder="Place & Pin Code"
              onChangeText={(text) => this.setState({ place: text })}
              iconContent={
                <Icon
                  size={20}
                  style={{ marginRight: 10 }}
                  color="#4f3961"
                  name="pin-drop"
                  family="ArgonExtra"
                ></Icon>
              }
            ></Input>
          </Block>
          <Block>
            <Input
              placeholder="Mobile Number"
              type={"phone-pad"}
              onChangeText={(text) => this.setState({ mobile: text })}
              iconContent={
                <Icon
                  size={20}
                  style={{ marginRight: 10 }}
                  color="#4f3961"
                  name="call"
                  family="ArgonExtra"
                ></Icon>
              }
            ></Input>
          </Block>
          <Block>
            <Input
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={(text) => this.setState({ password: text })}
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
          <Block>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={this.state.terms}
                onValueChange={this.updateCheckedState}
                style={styles.checkbox}
              />
              <Text style={styles.label}>
                I agree to Terms & Condition and Privacy Policy
              </Text>
            </View>
          </Block>
        </Block>
      );
    }
    if (this.state.formForgotPwd === 1) {
      return (
        <Block style={{ padding: 20 }}>
          <Block center>
            <Image
              source={require("../assets/imgs/logo.png")}
              style={styles.logo}
            />
          </Block>
          <Input
            placeholder="Enter Email ID to reset Password"
            type={"email-address"}
            autoCapitalize="none"
            onChangeText={(text) => this.setState({ email: text })}
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
      );
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
        <Block flex style={styles.container}>
          <StatusBar hidden />
          <Spinner
            visible={this.state.spinner}
            textStyle={styles.spinnerTextStyle}
          />
          <Block flex></Block>
          {this.selectForm()}
          <Block flex style={styles.padded}>
            <Block>
              <Block center>
                <Button
                  style={styles.button}
                  color="#4f3961"
                  onPress={this.loginBtnPressed}
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
                      color: "#4f3961",
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
                      color: "#4f3961",
                    }}
                  >
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </Block>
            </Block>
          </Block>
        </Block>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff2ff",
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
  },
  logo: {
    width: width - theme.SIZES.BASE * 4,
    height: 93,
    position: "relative",
    marginTop: "-35%",
  },
  checkboxContainer: {
    flexDirection: "row",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default Onboarding;
