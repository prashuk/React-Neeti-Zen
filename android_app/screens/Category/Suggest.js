import React from "react";
import Spinner from "react-native-loading-spinner-overlay";

import { StyleSheet, Dimensions, ScrollView, Alert } from "react-native";
import { Block, Button, Text, Input } from "galio-framework";

import * as firebase from "firebase";

const { height, width } = Dimensions.get("screen");

class Suggest extends React.Component {
  state = {
    notes: "",
    ticketNumberDatabase: 0,
    spinner: false,
  };

  constructor(props) {
    super(props);

    firebase
      .database()
      .ref("ticket/ticket/")
      .on("value", (snapshot) => {
        let ticketNumberDatabase = parseInt(snapshot.val());
        this.state.ticketNumberDatabase = ticketNumberDatabase + 1;
      });
  }

  submitBtnPressed = () => {
    if (this.state.notes === "") {
      alert("Fill all fields");
      return;
    }

    this.setState({ spinner: true });
    var ticketNumberDatabase = this.state.ticketNumberDatabase;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;

    var postData = {
      ticketNumber: ticketNumberDatabase,
      description: {
        name: global.currentUserName,
        date: today,
        type: "suggest",
        status: "open",
        assigned: "admin",

        notes: this.state.notes,
      },
    };

    firebase
      .database()
      .ref("users/" + global.User.user.uid + "/complaints/suggest/")
      .push()
      .set(postData)
      .then(() => {
        var updates = {};
        updates["ticket/ticket/"] = ticketNumberDatabase;

        firebase
          .database()
          .ref()
          .update(updates)
          .then(
            this.setState({ spinner: false }),
            Alert.alert(
              "Complain Submitted: Ticket Number " +
                ticketNumberDatabase.toString(),
              "",
              [
                {
                  text: "OK",
                  onPress: () => {
                    this.props.navigation.goBack();
                  },
                },
              ],
              { cancelable: false }
            )
          )
          .catch(function (error) {
            console.log(error.message);
          });
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
                Fill Notes
              </Text>
            </Block>
            <Block>
              <Text size={12}>All fields are required.</Text>
            </Block>
            <Block>
              <Input
                multiline={true}
                style={{ height: 150 }}
                placeholder="Word Limit: 100 Words"
                onChangeText={(text) => {
                  this.setState({ notes: text });
                }}
              ></Input>
            </Block>
          </Block>
          <Block center style={{ paddingBottom: 10 }}>
            <Button
              style={styles.button}
              color="#4f3961"
              onPress={this.submitBtnPressed}
              textStyle={{ color: "white" }}
            >
              SUBMIT
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
    shadowRadius: 10,
    shadowOpacity: 0,
    marginBottom: 10,
  },
  title: {
    marginTop: 20,
    marginRight: 30,
    marginLeft: 30,
  },
});

export default Suggest;
