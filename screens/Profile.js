import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, Button, Text, Input } from "galio-framework";
import { Dropdown } from "react-native-material-dropdown";
import * as firebase from "firebase";

const { height, width } = Dimensions.get("screen");

class Profile extends React.Component {
  state = {
    name: "asd",
    age: 0,
    sex: "",
    placeResidence: "",
    zipcode: 0,
    email: "",
    phone: 0
  };

  componentDidMount() {
    console.log("hell")
    // var profile = firebase
    //   .database()
    //   .ref("users/" + global.User.user.uid + "/profile");
    //   profile.on("value", snapshot => {
    //   var data = snapshot.val();
    //   console.log(data);
    //   this.setState({ name: data["name"] });
    //   console.log(this.state.name);
    //   console.log("akjshgd  ");
    //   // this.updateProfile(snapshot.val());
    // });
  }

  updateProfile = values => {
    console.log(values);
  };

  updateBtnPressed = () => {
    console.log("hel");
  };

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 0 }}
      >
        <Block flex style={styles.container}>
          <Block style={styles.title}>
            <Block>
              <Text color="#4f3961" size={25}>
                Profile
              </Text>
            </Block>
            <Block>
              <Input placeholder="Name"></Input>
            </Block>
            <Block>
              <Input placeholder="Age"></Input>
            </Block>
            <Block>
              <Input placeholder="Sex"></Input>
            </Block>
            <Block>
              <Input placeholder="Place of Residence"></Input>
            </Block>
            <Block>
              <Input placeholder="Zip Code"></Input>
            </Block>
            <Block>
              <Input placeholder="Email"></Input>
            </Block>
            <Block>
              <Input placeholder="Phone Number"></Input>
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
    width: width
  },
  button: {
    width: width - 40,
    height: 50,
    marginTop: 10
  },
  title: {
    marginTop: 20,
    marginRight: 30,
    marginLeft: 30
  }
});

export default Profile;
