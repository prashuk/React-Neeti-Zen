import React from "react";
import { StyleSheet, Dimensions, ScrollView, Alert } from "react-native";
import { Block, Button, Text, Input } from "galio-framework";

import * as firebase from "firebase";
import "firebase/storage";

const { width } = Dimensions.get("screen");

class Parliament extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complain: ""
    };
  }

  submitBtnPressed = async () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;

    let ticketNumberDatabase;

    firebase
      .database()
      .ref("ticket/ticket/")
      .on("value", snapshot => {
        ticketNumberDatabase = parseInt(snapshot.val());
        ticketNumberDatabase = ticketNumberDatabase + 1;
      });

    var postData = {
      date: today,
      complain: this.state.complain,
      type: "parliament",
      status: "open"
    };

    var updates = {};
    updates[
      "users/" +
        global.User.user.uid +
        "/complaints/parliament/" +
        ticketNumberDatabase
    ] = postData;
    updates["ticket/ticket/"] = ticketNumberDatabase;

    firebase
      .database()
      .ref()
      .update(updates)
      .then(
        Alert.alert(
          "Complain Submitted: Ticket Number " +
            (ticketNumberDatabase - 1).toString(),
          "",
          [
            {
              text: "OK",
              onPress: () => {
                this.props.navigation.goBack();
              }
            }
          ],
          { cancelable: false }
        )
      )
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
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
                Fill Notes
              </Text>
            </Block>
            <Block>
              <Input
                multiline
                style={{ height: 150 }}
                onChangeText={text => {
                  this.setState({ complain: text });
                }}
                placeholder="Notes (Describe invitation in 100 words)"
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
    backgroundColor: "#fff2ff"
  },
  button: {
    width: width - 40,
    height: 50,
    shadowRadius: 10,
    marginBottom: 10
  },
  title: {
    marginTop: 20,
    marginRight: 30,
    marginLeft: 30
  }
});

export default Parliament;
