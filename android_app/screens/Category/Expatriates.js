import React from "react";
import { StyleSheet, Dimensions, ScrollView, Alert } from "react-native";
import { Block, Button, Text, Input } from "galio-framework";
import { Dropdown } from "react-native-material-dropdown";
import RBSheet from "react-native-raw-bottom-sheet";
import Sheet from "../../components/Sheet";
import * as firebase from "firebase";
import "firebase/storage";
import Spinner from "react-native-loading-spinner-overlay";

const { width } = Dimensions.get("screen");

const data = [
  {
    value: "Job",
    subitems: [
      {
        value: "Fraud",
      },
      {
        value: "Unsafe work",
      },
      {
        value: "Wages",
      },
      {
        value: "Work accident",
      },
    ],
  },
  {
    value: "Expatriation",
    subitems: [
      {
        value: "Detention",
      },
      {
        value: "Death abroad",
      },
    ],
  },
  {
    value: "Missing National",
  },
];

class Expatriates extends React.Component {
  state = {
    selectJob: "",
    selectReason: "",
    name: "",
    addressPhone: "",
    countryBirth: "",
    countryResidence: "",
    address: "",
    imgPassport: "",
    imgVisa: "",
    imgAadhar: "",
    email: "",
    phoneNumber: 0,
    employer: "",
    notes: "",
    btnId: "",
    ticketNumberDatabase: 0,
    spinner: false,
  };

  constructor(props) {
    super(props);

    this.findOptionUsed = this.findOptionUsed.bind(this);

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
    if (this.state.btnId === "passport") {
      this.setState({ imgPassport: img });
    }
    if (this.state.btnId === "visa") {
      this.setState({ imgVisa: img });
    }
    if (this.state.btnId === "aadhar") {
      this.setState({ imgAadhar: img });
    }
    this.RBSheet.close();
    Alert.alert("Uploaded");
  };

  findOptionUsed() {
    if (this.state.selectJob === "Job") {
      return (
        <Block
          style={{
            backgroundColor: "white",
            marginBottom: 10,
            borderRadius: 10,
          }}
        >
          <Dropdown
            id="anotherDropDown"
            label="Select Reason"
            data={data[0]["subitems"]}
            onChangeText={(text) => {
              this.setState({ selectReason: text });
            }}
          />
        </Block>
      );
    }
    if (this.state.selectJob === "Expatriation") {
      return (
        <Block
          style={{
            backgroundColor: "white",
            marginBottom: 10,
            borderRadius: 10,
          }}
        >
          <Dropdown
            id="anotherDropDown"
            label="Select Reason"
            data={data[1]["subitems"]}
            onChangeText={(text) => {
              this.setState({ selectReason: text });
            }}
          />
        </Block>
      );
    }
  }

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
      this.state.selectJob === "" ||
      this.state.name === "" ||
      this.state.addressPhone === "" ||
      this.state.countryBirth === "" ||
      this.state.countryResidence === "" ||
      this.state.address === "" ||
      this.state.imgPassport === "" ||
      this.state.imgVisa === "" ||
      this.state.imgAadhar === "" ||
      this.state.email === "" ||
      this.state.phoneNumber === 0 ||
      this.state.employer === "" ||
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

    const passportImgURL = await this.uploadImage(
      this.state.imgPassport,
      "passport_" +
        global.User.user.email +
        "_expatriates_" +
        ticketNumberDatabase.toString() +
        ".jpg",
      ticketNumberDatabase
    );

    const visaImgURL = await this.uploadImage(
      this.state.imgVisa,
      "visa_" +
        global.User.user.email +
        "_expatriates_" +
        ticketNumberDatabase.toString() +
        ".jpg",
      ticketNumberDatabase
    );

    const aadharImgURL = await this.uploadImage(
      this.state.imgAadhar,
      "aadhar_" +
        global.User.user.email +
        "_expatriates_" +
        ticketNumberDatabase.toString() +
        ".jpg",
      ticketNumberDatabase
    );

    var postData = {
      ticketNumber: ticketNumberDatabase,
      description: {
        name: global.currentUserName,
        date: today,
        type: "expatriates",
        status: "open",
        assigned: "admin",

        job: this.state.selectJob,
        reason: this.state.selectReason,
        name: this.state.name,
        addressAndPhone: this.state.addressPhone,
        countryOfBirth: this.state.countryBirth,
        countryOfResidence: this.state.countryResidence,
        currentAddress: this.state.address,
        passportProof: passportImgURL,
        visaProof: visaImgURL,
        aadharProof: aadharImgURL,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        employer: this.state.employer,
        notes: this.state.notes,
      },
    };

    firebase
      .database()
      .ref("users/" + global.User.user.uid + "/complaints/expatriates/")
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
            <Block
              style={{
                backgroundColor: "white",
                marginBottom: 10,
                borderRadius: 10,
              }}
            >
              <Dropdown
                label="Select Job"
                data={data}
                onChangeText={(text) => {
                  this.setState({ selectJob: text });
                }}
              />
            </Block>
            {this.findOptionUsed()}
            <Block>
              <Input
                placeholder="Name"
                onChangeText={(text) => {
                  this.setState({ name: text });
                }}
              ></Input>
            </Block>
            <Block>
              <Input
                placeholder="Permanent Address with Phone number in India"
                onChangeText={(text) => {
                  this.setState({ addressPhone: text });
                }}
              ></Input>
            </Block>
            <Block>
              <Input
                placeholder="Country of birth"
                onChangeText={(text) => {
                  this.setState({ countryBirth: text });
                }}
              ></Input>
            </Block>
            <Block>
              <Input
                placeholder="Country of Residence"
                onChangeText={(text) => {
                  this.setState({ countryResidence: text });
                }}
              ></Input>
            </Block>
            <Block>
              <Input
                placeholder="Current Address"
                onChangeText={(text) => {
                  this.setState({ address: text });
                }}
              ></Input>
            </Block>
            <Block center>
              <Button
                style={styles.sideButton}
                color="#4f3961"
                onPress={(event) => this.uploadBtnPressed(event, "passport")}
                textStyle={{ color: "white" }}
              >
                Upload Passport
              </Button>
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
            <Block center>
              <Button
                style={styles.sideButton}
                color="#4f3961"
                onPress={(event) => this.uploadBtnPressed(event, "visa")}
                textStyle={{ color: "white" }}
              >
                Upload Visa
              </Button>
            </Block>
            <Block center>
              <Button
                style={styles.sideButton}
                color="#4f3961"
                onPress={(event) => this.uploadBtnPressed(event, "aadhar")}
                textStyle={{ color: "white" }}
              >
                Upload Aadhaar
              </Button>
            </Block>
            <Block>
              <Input
                placeholder="Email"
                type={"email-address"}
                autoCapitalize="none"
                onChangeText={(text) => {
                  this.setState({ email: text });
                }}
              ></Input>
            </Block>
            <Block>
              <Input
                placeholder="Phone Number"
                type={"number-pad"}
                onChangeText={(text) => {
                  this.setState({ phoneNumber: text });
                }}
              ></Input>
            </Block>
            <Block>
              <Input
                placeholder="Employer"
                onChangeText={(text) => {
                  this.setState({ employer: text });
                }}
              ></Input>
            </Block>
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
});

export default Expatriates;
