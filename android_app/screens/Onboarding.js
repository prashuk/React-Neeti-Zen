import React from "react";
import {
    Image,
    StyleSheet,
    StatusBar,
    Dimensions,
    TouchableOpacity,
    Alert,
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
            name: "",
            email: "",
            password: "",
            loginBtnText: "LOG IN",
            signUpBtnText: "Sign Up",
            formLogin: 1,
            formSignup: 0,
            formEnterOTP: 0,
            formForgotPwd: 0,
            loginFlag: 0,
            spinner: false,
        };

        this.selectForm = this.selectForm.bind(this);

        if (!firebase.apps.length) {
            firebase.initializeApp(ApiKeys.FirebaseConfig);
        }
    }

    loginBtnPressed() {
        this.setState({ spinner: true });
        const { navigation } = this.props;
        if (this.state.loginBtnText === "LOG IN") {
            // var recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
            // var number = "+14693804626";
            // firebase
            //     .auth()
            //     .signInWithPhoneNumber(number, recaptcha)
            //     .then(function (e) {
            //         var code = prompt("Enter the otp", "");

            //         if (code === null) return;

            //         e.confirm(code)
            //             .then(function (result) {
            //                 console.log(result.user);

            //                 navigation.navigate("App");
            //                 // document.querySelector("label").textContent +=
            //                     // result.user.phoneNumber + "Number verified";
            //             })
            //             .catch(function (error) {
            //                 console.error(error);
            //             });
            //     })
            //     .catch(function (error) {
            //         console.error(error);
            //     });

            firebase
                .auth()
                .signInWithEmailAndPassword(
                    this.state.email,
                    this.state.password
                )
                .then((user) => {
                    global.User = user;
                    console.log(user);
                    this.setState({ spinner: false });
                    navigation.navigate("App");
                })
                .catch(function (error) {
                    alert(error.message);
                });
        } else if (this.state.loginBtnText === "SIGN UP") {
            firebase
                .auth()
                .createUserWithEmailAndPassword(
                    this.state.email,
                    this.state.password
                )
                .then((userCredentials) => {
                    if (userCredentials.user) {
                        userCredentials.user
                            .updateProfile({
                                displayName: this.state.name,
                                phoneNumber: 9876789989,
                            })
                            .then((s) => {
                                this.setState({ spinner: false });
                                alert("Registration Complete");
                                this.setState({
                                    formLogin: 1,
                                    formSignup: 0,
                                    formEnterOTP: 0,
                                    formForgotPwd: 0,
                                    loginFlag: 0,
                                    loginBtnText: "LOG IN",
                                    signUpBtnText: "Sign Up",
                                });

                                console.log(userCredentials.user);
                            });
                    }
                })
                .catch(function (error) {
                    this.setState({ spinner: false });
                    alert(error.message);
                });
        } else if (this.state.loginBtnText === "RESET PASSWORD") {
            this.showAlert();
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
                    <Block>
                        <Input
                            placeholder="Email"
                            type={"email-address"}
                            autoCapitalize="none"
                            onChangeText={(text) =>
                                this.setState({ email: text })
                            }
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
                            onChangeText={(text) =>
                                this.setState({ password: text })
                            }
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
                            onChangeText={(text) =>
                                this.setState({ name: text })
                            }
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
                            onChangeText={(text) =>
                                this.setState({ email: text })
                            }
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
                            secureTextEntry={true}
                            autoCapitalize="none"
                            onChangeText={(text) =>
                                this.setState({ password: text })
                            }
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
                            type={"email-address"}
                            autoCapitalize="none"
                            onChangeText={(text) =>
                                this.setState({ email: text })
                            }
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
                <Spinner
                    visible={this.state.spinner}
                    textStyle={styles.spinnerTextStyle}
                />
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
                            <TouchableOpacity
                                onPress={() => this.signupBtnPressed()}
                            >
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
                            <TouchableOpacity
                                onPress={() => this.forgotBtnPressed()}
                            >
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
        marginTop: "-60%",
    },
});

export default Onboarding;
