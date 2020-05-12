import React from "react";
import { StyleSheet, Dimensions, ScrollView, Alert } from "react-native";
import { Block, Button, Text, Input } from "galio-framework";
import * as firebase from "firebase";
import Spinner from "react-native-loading-spinner-overlay";

const { height, width } = Dimensions.get("screen");

class Profile extends React.Component {
    state = {
        name: "",
        email: "",
        age: "",
        place: "",
        mobile: "",
        spinner: false,
    };

    constructor(props) {
        super(props);

        firebase
            .database()
            .ref("users/" + global.User.user.uid + "/profile/")
            .once("value")
            .then((snapshot) => {
                var name = snapshot.val()["name"];
                var email = snapshot.val()["email"];
                var age = snapshot.val()["age"];
                var place = snapshot.val()["place"];
                var mobile = snapshot.val()["mobile"];

                this.setState({
                    name: name,
                    email: email,
                    age: age,
                    place: place,
                    mobile: mobile,
                });
            });
    }

    updateBtnPressed = () => {
        this.setState({ spinner: true });

        if (
            this.state.name === "" ||
            this.state.age === "" ||
            this.state.place === "" ||
            this.state.mobile === ""
        ) {
            this.setState({ spinner: false });
            alert("Fill all fields");
            return;
        }

        firebase
            .database()
            .ref("users/" + global.User.user.uid + "/profile/")
            .set({
                name: this.state.name,
                email: this.state.email,
                age: this.state.age,
                place: this.state.place,
                mobile: this.state.mobile,
            })
            .then(() => {
                this.setState({ spinner: false });
                Alert.alert(
                    "Profile Updated",
                    "",
                    [
                        {
                            text: "OK",
                            onPress: () => this.props.navigation.goBack(),
                        },
                    ],
                    { cancelable: true }
                );
            })
            .catch((error) => {
                this.setState({ spinner: false });
                alert(error.message);
            });
    };

    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 0 }}
                keyboardShouldPersistTaps="always"
            >
                <Spinner
                    visible={this.state.spinner}
                    textStyle={styles.spinnerTextStyle}
                />
                <Block flex style={styles.container}>
                    <Block style={styles.title}>
                        <Block>
                            <Text color="#4f3961" size={25}>
                                Profile
                            </Text>
                        </Block>
                        <Block>
                            <Input
                                placeholder="Name"
                                value={this.state.name}
                                onChangeText={(text) => {
                                    this.setState({ name: text });
                                }}
                            ></Input>
                        </Block>
                        <Block>
                            <Input
                                placeholder="Age & Sex"
                                value={this.state.age}
                                onChangeText={(text) => {
                                    this.setState({ age: text });
                                }}
                            ></Input>
                        </Block>
                        <Block>
                            <Input
                                placeholder="Place & Pin Code"
                                value={this.state.place}
                                onChangeText={(text) => {
                                    this.setState({ place: text });
                                }}
                            ></Input>
                        </Block>
                        <Block>
                            <Input
                                placeholder="Mobile Number"
                                value={this.state.mobile}
                                onChangeText={(text) => {
                                    this.setState({ mobile: text });
                                }}
                            ></Input>
                        </Block>
                    </Block>
                    <Block center>
                        <Button
                            style={styles.button}
                            color="#4f3961"
                            onPress={this.updateBtnPressed}
                            textStyle={{ color: "white" }}
                        >
                            UPDATE
                        </Button>
                    </Block>
                </Block>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff2ff",
        height: height,
        width: width,
    },
    button: {
        width: width - 40,
        height: 50,
        marginTop: 10,
    },
    title: {
        marginTop: 20,
        marginRight: 30,
        marginLeft: 30,
    },
});

export default Profile;
