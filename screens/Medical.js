import React from "react";
import { StyleSheet, Dimensions, ScrollView, Alert } from "react-native";
import { Block, Button, Text, Input } from "galio-framework";
import RBSheet from "react-native-raw-bottom-sheet";
import Sheet from "../components/Sheet";

import * as firebase from "firebase";
import "firebase/storage";

const { width } = Dimensions.get("screen");

class Medical extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientName: "",
      age: "",
      occupation: "",
      fatherName: "",
      countFamily: "",
      address: "",
      imgAddProof: "",
      telephoneNumber: "",
      aadharCard: "",
      imgAadhar: "",
      disease: "",
      financialAmt: 0,
      imgEstimate: "",
      assistanceEarlier: "",
      otherSourceFund: "",
      govEmployee: "",
      btnId: ""
    };
  }

  uploadBtnPressed(event, buttonId) {
    this.RBSheet.open();
    this.setState({ btnId: buttonId });
  }

  handleImage = img => {
    if (this.state.btnId === "address") {
      this.setState({ imgAddProof: img });
    }
    if (this.state.btnId === "aadhar") {
      this.setState({ imgAadhar: img });
    }
    if (this.state.btnId === "estimate") {
      this.setState({ imgEstimate: img });
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
    await imageRef.put(blob, { contentType: "image/jpg" }).catch(error => {
      throw error;
    });
    const url = await imageRef.getDownloadURL().catch(error => {
      throw error;
    });
    return url;
  };

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

    const addProofImgURL = await this.uploadImage(
      this.state.imgAddProof,
      "addressProof_" +
        global.User.user.email +
        "_medical_" +
        ticketNumberDatabase.toString() +
        ".jpg",
      ticketNumberDatabase
    );

    const aadharImgURL = await this.uploadImage(
      this.state.imgAadhar,
      "aadhar_" +
        global.User.user.email +
        "_medical_" +
        ticketNumberDatabase.toString() +
        ".jpg",
      ticketNumberDatabase
    );

    const estimateImgURL = await this.uploadImage(
      this.state.imgEstimate,
      "estimate_" +
        global.User.user.email +
        "_medical_" +
        ticketNumberDatabase.toString() +
        ".jpg",
      ticketNumberDatabase
    );

    var postData = {
      ticketNumber: ticketNumberDatabase,
      description: {
        date: today,
        patientName: this.state.patientName,
        age: this.state.age,
        occupation: this.state.occupation,
        fatherName: this.state.fatherName,
        countFamily: this.state.countFamily,
        address: this.state.address,
        imgAddProof: addProofImgURL,
        telephoneNumber: this.state.telephoneNumber,
        aadharCard: this.state.aadharCard,
        imgAadhar: aadharImgURL,
        disease: this.state.disease,
        financialAmt: this.state.financialAmt,
        imgEstimate: estimateImgURL,
        assistanceEarlier: this.state.assistanceEarlier,
        otherSourceFund: this.state.otherSourceFund,
        govEmployee: this.state.govEmployee,
        type: "medical",
        status: "open"
      }
    };

    firebase
      .database()
      .ref("users/" + global.User.user.uid + "/complaints/medical/")
      .push()
      .set(postData);

    var updates = {};
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
                Fill Form
              </Text>
            </Block>
            <Block>
              <Input
                placeholder="Name of Patient"
                onChangeText={text => {
                  this.setState({ patientName: text });
                }}
              ></Input>
            </Block>
            <Block>
              <Input
                placeholder="Age/Sex"
                onChangeText={text => {
                  this.setState({ age: text });
                }}
              ></Input>
            </Block>
            <Block>
              <Input
                placeholder="Occupation of Patient"
                onChangeText={text => {
                  this.setState({ occupation: text });
                }}
              ></Input>
            </Block>
            <Block>
              <Input
                placeholder="Father’s/Husband Name"
                onChangeText={text => {
                  this.setState({ fatherName: text });
                }}
              ></Input>
            </Block>
            <Block>
              <Input
                placeholder="Number of Family Number"
                onChangeText={text => {
                  this.setState({ countFamily: text });
                }}
              ></Input>
            </Block>
            <Block>
              <Input
                placeholder="Residential Address"
                onChangeText={text => {
                  this.setState({ address: text });
                }}
              ></Input>
            </Block>
            <Button
              style={styles.sideButton}
              color="#4f3961"
              textStyle={{ color: "white" }}
              onPress={event => this.uploadBtnPressed(event, "address")}
            >
              Upload Address Proof
            </Button>
            <Block>
              <Input
                placeholder="Telephone Number"
                onChangeText={text => {
                  this.setState({ telephoneNumber: text });
                }}
              ></Input>
            </Block>
            <Block>
              <Input
                placeholder="Aadhaar Card Number"
                onChangeText={text => {
                  this.setState({ aadharCard: text });
                }}
              ></Input>
            </Block>
            <Button
              style={styles.sideButton}
              color="#4f3961"
              textStyle={{ color: "white" }}
              onPress={event => this.uploadBtnPressed(event, "aadhar")}
            >
              Upload Aadhar Card
            </Button>
            <Block>
              <Input
                placeholder="Nature of Disease"
                onChangeText={text => {
                  this.setState({ disease: text });
                }}
              ></Input>
            </Block>
            <Block>
              <Input
                placeholder="Financial Assistance Amount"
                onChangeText={text => {
                  this.setState({ financialAmt: text });
                }}
              ></Input>
            </Block>
            <Button
              style={styles.sideButton}
              color="#4f3961"
              textStyle={{ color: "white" }}
              onPress={event => this.uploadBtnPressed(event, "estimate")}
            >
              Upload an Estimate from the govt
            </Button>
            <Block>
              <Input
                placeholder="Received Medical Assistance Earlier"
                onChangeText={text => {
                  this.setState({ assistanceEarlier: text });
                }}
              ></Input>
            </Block>
            <Block>
              <Input
                placeholder="Any other Source of Funding applied"
                onChangeText={text => {
                  this.setState({ otherSourceFund: text });
                }}
              ></Input>
            </Block>
            <Block>
              <Input
                placeholder="Patient Government employee"
                onChangeText={text => {
                  this.setState({ govEmployee: text });
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
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={150}
          duration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
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
    backgroundColor: "#fff2ff"
  },
  button: {
    width: width - 40,
    height: 50,
    shadowRadius: 10,
    marginBottom: 10
  },
  sideButton: {
    width: width - 60,
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

export default Medical;
