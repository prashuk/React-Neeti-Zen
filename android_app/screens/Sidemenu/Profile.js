import React from "react";
import { StyleSheet, Dimensions, ScrollView, Alert } from "react-native";
import { Block, Button, Text, Input, Icon } from "galio-framework";
import * as firebase from "firebase";
import Spinner from "react-native-loading-spinner-overlay";

const { height, width } = Dimensions.get("screen");

class Profile extends React.Component {
  state = {
    name: "",
    email: "",
    age: "",
    sex: "",
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
        var sex = snapshot.val()["sex"];
        var place = snapshot.val()["place"];
        var mobile = snapshot.val()["mobile"];

        this.setState({
          name: name,
          email: email,
          age: age,
          sex: sex,
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
      this.state.sex === "" ||
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
        sex: this.state.sex,
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

  changePasswordBtnPressed = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then((user) => {
        this.setState({ spinner: false });
        alert("Please check your email for password change.");
      })
      .catch((error) => {
        this.setState({ spinner: false });
        alert(error);
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
              <Text color="#000" size={20}>
                {this.state.email}
              </Text>
            </Block>
            <Block>
              <Input
                placeholder="Name"
                value={this.state.name}
                onChangeText={(text) => {
                  this.setState({ name: text });
                }}
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
                placeholder="Age"
                value={this.state.age}
                onChangeText={(text) => {
                  this.setState({ age: text });
                }}
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
                placeholder="Sex"
                value={this.state.sex}
                onChangeText={(text) => {
                  this.setState({ sex: text });
                }}
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
                placeholder="Address with Pin Code"
                value={this.state.place}
                onChangeText={(text) => {
                  this.setState({ place: text });
                }}
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
                value={this.state.mobile}
                onChangeText={(text) => {
                  this.setState({ mobile: text });
                }}
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
          </Block>
          <Block center>
            <Button
              style={styles.changeButton}
              color="#4f3961"
              onPress={this.changePasswordBtnPressed}
              textStyle={{ color: "white" }}
            >
              Change Password
            </Button>
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
  changeButton: {
    width: width - 80,
    height: 40,
    marginTop: 10,
  },
  title: {
    marginTop: 20,
    marginRight: 30,
    marginLeft: 30,
  },
});

export default Profile;
