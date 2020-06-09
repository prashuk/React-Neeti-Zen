import React from "react";
import { StyleSheet, Dimensions, ScrollView, Alert } from "react-native";
import { Block, Button, Text, theme, Input } from "galio-framework";
import { Dropdown } from "react-native-material-dropdown";
import RBSheet from "react-native-raw-bottom-sheet";
import Sheet from "../components/Sheet";
import Spinner from "react-native-loading-spinner-overlay";
import * as firebase from "firebase";
import "firebase/storage";

const { width } = Dimensions.get("screen");

const data = [
  {
    value: "Birthday",
  },
  {
    value: "Marriage",
  },
  {
    value: "Conference",
  },
  {
    value: "Book Festival",
  },
  {
    value: "Religious Festivities",
  },
  {
    value: "Wedding Ceremony",
  },
  {
    value: "Film Festival",
  },
  {
    value: "Film Preview",
  },
  {
    value: "Inauguration",
  },
];

class Event extends React.Component {
  state = {
    patientName: "",
    address: "",
    phone: "",
    email: "",
    occasion: "",
    availability: "05/25/2020",
    imgInvitation: "",
    notes: "",
    btnId: "",
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

  uploadBtnPressed(event, buttonId) {
    this.RBSheet.open();
    this.setState({ btnId: buttonId });
  }

  handleImage = (img) => {
    if (this.state.btnId === "invitation") {
      this.setState({ imgInvitation: img });
    }
    this.RBSheet.close();
    Alert.alert("Uploaded");
  };

  uploadImage = async (uri, name, ticket) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const imageRef = firebase
      .storage()
      .ref()
      .child("images/" + ticket.toString() + "/" + name + ".jpg");
    await imageRef.put(blob, { contentType: "image/jpg" }).catch((error) => {
      throw error;
    });
    const url = await imageRef.getDownloadURL().catch((error) => {
      throw error;
    });
    return url;
  };

  submitBtnPressed = async () => {
    if (
      this.state.patientName === "" ||
      this.state.address === "" ||
      this.state.phone === "" ||
      this.state.email === "" ||
      this.state.occasion === "" ||
      this.state.availability === "" ||
      this.state.imgInvitation === "" ||
      this.state.notes === ""
    ) {
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

    const invitationImgURL = await this.uploadImage(
      this.state.imgInvitation,
      "aadhar_" +
        global.User.user.email +
        "_event_" +
        ticketNumberDatabase.toString() +
        ".jpg",
      ticketNumberDatabase
    );

    var postData = {
      ticketNumber: ticketNumberDatabase,
      description: {
        name: global.currentUserName,
        date: today,
        type: "event",
        status: "open",
        assigned: "admin",

        nameOfPatient: this.state.patientName,
        address: this.state.address,
        phoneNumber: this.state.phone,
        email: this.state.email,
        occasion: this.state.occasion,
        dateOfAvailability: this.state.availability,
        invitationCard: invitationImgURL,
        notes: this.state.notes,
      },
    };

    firebase
      .database()
      .ref("users/" + global.User.user.uid + "/complaints/event/")
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
              "Your request has been submitted and is pending approval.",
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
        showsVerticalScrollIndicator={true}
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
                Fill Form
              </Text>
            </Block>
            <Block>
              <Input
                placeholder="Name of Patient"
                onChangeText={(text) => {
                  this.setState({ patientName: text });
                }}
              ></Input>
            </Block>
            <Block>
              <Input
                placeholder="Address"
                onChangeText={(text) => {
                  this.setState({ address: text });
                }}
              ></Input>
            </Block>
            <Block>
              <Input
                placeholder="Phone Number"
                type={"number-pad"}
                onChangeText={(text) => {
                  this.setState({ phone: text });
                }}
              ></Input>
            </Block>
            <Block>
              <Input
                placeholder="Email"
                type={"email-address"}
                onChangeText={(text) => {
                  this.setState({ email: text });
                }}
              ></Input>
            </Block>
            <Block
              style={{
                backgroundColor: "white",
                marginBottom: 10,
                borderRadius: 10,
              }}
            >
              <Dropdown
                label="Occasion"
                data={data}
                onChangeText={(text) => {
                  this.setState({ occasion: text });
                }}
              />
            </Block>
            <Button
              style={styles.sideButton}
              color="#4f3961"
              textStyle={{ color: "white" }}
              onPress={() => navigation.navigate("Available Dates")}
            >
              Check Availability & Invitation Request
            </Button>
            <Button
              style={styles.sideButton}
              color="#4f3961"
              onPress={(event) => this.uploadBtnPressed(event, "invitation")}
              textStyle={{ color: "white" }}
            >
              Upload Invitation Card
            </Button>
            <Block>
              <Input
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
        <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
          height={150}
          duration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Sheet
            imageSelect={this.handleImage}
            navigation={this.props.navigation}
          />
        </RBSheet>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff2ff",
  },
  button: {
    width: width - 40,
    height: 50,
    shadowRadius: 10,
    marginBottom: 10,
  },
  sideButton: {
    width: width - 60,
    height: 50,
    shadowRadius: 10,
    marginBottom: 10,
  },
  title: {
    marginTop: 20,
    marginRight: 30,
    marginLeft: 30,
  },
  drop: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    marginBottom: 10,
  },
});

export default Event;
