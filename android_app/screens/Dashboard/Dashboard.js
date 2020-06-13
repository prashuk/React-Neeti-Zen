import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
  Platform,
} from "react-native";
import { Block, Button, Text, Icon } from "galio-framework";
import Modal, { ModalContent } from "react-native-modals";

import * as firebase from "firebase";
import * as Permissions from "expo-permissions";
import { Notifications } from "expo";
import { refresh } from "../../constants/Data";
import Constants from "expo-constants";

class DashboardScreen extends React.Component {
  state = {
    visibleServe: false,
    visibleJanTV: false,
  };

  constructor(props) {
    super(props);

    this.registerForPushNotificationsAsync(global.User);

    refresh();

    firebase
      .database()
      .ref("users/" + global.User.user.uid + "/profile/")
      .once("value")
      .then((snapshot) => {
        var name = snapshot.val()["name"];
        global.currentUserName = name;
      });
  }

  registerForPushNotificationsAsync = async (currentUser) => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }

      let token = await Notifications.getExpoPushTokenAsync();

      var updates = {};
      updates["/expoToken"] = token;
      await firebase
        .database()
        .ref("users/" + currentUser.user.uid)
        .update(updates);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.createChannelAndroidAsync("default", {
        name: "default",
        sound: true,
        priority: "max",
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 0 }}
      >
        <StatusBar hidden={false}></StatusBar>
        <Block>
          <Block flex>
            <Block>
              <Text
                color="#4f3961"
                size={25}
                style={{ marginTop: 10, marginLeft: 15 }}
              >
                Choose Category
              </Text>
              <Text color="#4f3961" size={18} style={{ marginLeft: 15 }}>
                Choose category to proceed
              </Text>
            </Block>
            <Block flex>
              <Block center>
                <Button
                  color="rgba(176, 108, 168, 1)"
                  style={styles.button}
                  onPress={() =>
                    this.props.navigation.navigate("Suggest", {
                      handleData: this.handleData,
                    })
                  }
                >
                  <Block row>
                    <Icon
                      name="ios-help"
                      family="Ionicon"
                      size={50}
                      color={"white"}
                      style={{ marginRight: 5 }}
                    />
                    <Text style={styles.socialTextButtons}>
                      Bring To Attention
                    </Text>
                  </Block>
                </Button>
              </Block>
              <Block center>
                <Button
                  color="rgba(49, 176, 170, 1)"
                  style={styles.button}
                  onPress={() => {
                    this.setState({
                      visibleServe: true,
                      visibleJanTV: false,
                    });
                  }}
                >
                  <Block row>
                    <Icon
                      name="ios-send"
                      family="Ionicon"
                      size={30}
                      color={"white"}
                      style={{ marginRight: 5 }}
                    />
                    <Text style={styles.socialTextButtons}>
                      How Can I Serve
                    </Text>
                  </Block>
                </Button>
              </Block>
              <Modal
                visible={this.state.visibleServe}
                onTouchOutside={() => {
                  this.setState({
                    visibleServe: false,
                    visibleJanTV: false,
                  });
                }}
              >
                <ModalContent>
                  <Button
                    color="rgba(49, 176, 170, 1)"
                    style={styles.buttonPopup}
                    onPress={() => {
                      this.setState({
                        visibleServe: false,
                        visibleJanTV: false,
                      });
                      this.props.navigation.navigate("Medical");
                    }}
                  >
                    <Block row>
                      <Icon
                        name="ios-medkit"
                        family="Ionicon"
                        size={30}
                        color={"white"}
                        style={{ marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>Medical</Text>
                    </Block>
                  </Button>
                  <Button
                    color="rgba(49, 176, 170, 1)"
                    style={styles.buttonPopup}
                    onPress={() => {
                      this.setState({
                        visibleServe: false,
                        visibleJanTV: false,
                      });
                      this.props.navigation.navigate("Expatriates");
                    }}
                  >
                    <Block row>
                      <Icon
                        name="md-airplane"
                        family="Ionicon"
                        size={30}
                        color={"white"}
                        style={{ marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>Expatriates</Text>
                    </Block>
                  </Button>
                  <Button
                    color="rgba(49, 176, 170, 1)"
                    style={styles.buttonPopup}
                    onPress={() => {
                      this.setState({
                        visibleServe: false,
                        visibleJanTV: false,
                      });
                      this.props.navigation.navigate("ServeOther");
                    }}
                  >
                    <Block row>
                      <Icon
                        name="md-clipboard"
                        family="Ionicon"
                        size={30}
                        color={"white"}
                        style={{ marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>Others</Text>
                    </Block>
                  </Button>
                </ModalContent>
              </Modal>
            </Block>
            <Block flex>
              <Block center>
                <Button
                  center
                  color="rgba(255, 177, 73, 1)"
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate("Event")}
                >
                  <Block row>
                    <Icon
                      name="md-home"
                      family="Ionicon"
                      size={30}
                      color={"white"}
                      style={{ marginRight: 5 }}
                    />
                    <Text style={styles.socialTextButtons}>INVITE</Text>
                  </Block>
                </Button>
              </Block>
            </Block>
            <Block>
              <Text
                color="#4f3961"
                size={25}
                style={{ marginTop: 15, marginLeft: 15 }}
              >
                More
              </Text>
              <Text color="#4f3961" size={18} style={{ marginLeft: 15 }}>
                Get onboard and receive insights
              </Text>
            </Block>
            <Block center>
              <Button
                color="rgba(139, 204, 100, 1)"
                style={styles.button}
                onPress={() => this.props.navigation.navigate("Parliament")}
              >
                <Block row>
                  <Icon
                    name="ios-hand"
                    family="Ionicon"
                    size={25}
                    color={"white"}
                    style={{ marginRight: 5 }}
                  />
                  <Text style={styles.socialTextButtons}>
                    Raise in Parliament
                  </Text>
                </Block>
              </Button>
            </Block>
            <Block center>
              <Button
                color="rgba(7, 182, 220, 1)"
                style={styles.button}
                onPress={() => this.props.navigation.navigate("Mplad")}
              >
                <Block row>
                  <Icon
                    name="ios-barcode"
                    family="Ionicon"
                    size={25}
                    color={"white"}
                    style={{ marginRight: 5 }}
                  />
                  <Text style={styles.socialTextButtons}>MPLAD</Text>
                </Block>
              </Button>
            </Block>
            <Block center>
              <Button
                style={styles.button}
                color="rgba(237, 116, 163, 1)"
                onPress={() => {
                  this.setState({
                    visibleServe: false,
                    visibleJanTV: true,
                  });
                }}
              >
                <Block row>
                  <Icon
                    name="md-tv"
                    family="Ionicon"
                    size={25}
                    color={"white"}
                    style={{ marginRight: 5 }}
                  />
                  <Text style={styles.socialTextButtons}>JAN TV</Text>
                </Block>
              </Button>
            </Block>
            <Modal
              visible={this.state.visibleJanTV}
              onTouchOutside={() => {
                this.setState({
                  visibleServe: false,
                  visibleJanTV: false,
                });
              }}
            >
              <ModalContent>
                <Button
                  color="rgba(237, 116, 163, 1)"
                  style={styles.buttonPopup}
                  onPress={() => {
                    this.setState({
                      visibleServe: false,
                      visibleJanTV: false,
                    });
                    this.props.navigation.navigate("Loksabha");
                  }}
                >
                  <Block row>
                    <Icon
                      name="md-tv"
                      family="Ionicon"
                      size={30}
                      color={"white"}
                      style={{ marginRight: 5 }}
                    />
                    <Text style={styles.socialTextButtons}>Lok Sabha</Text>
                  </Block>
                </Button>
                <Button
                  color="rgba(237, 116, 163, 1)"
                  style={styles.buttonPopup}
                  onPress={() => {
                    this.setState({
                      visibleServe: false,
                      visibleJanTV: false,
                    });
                    this.props.navigation.navigate("Public");
                  }}
                >
                  <Block row>
                    <Icon
                      name="md-globe"
                      family="Ionicon"
                      size={30}
                      color={"white"}
                      style={{ marginRight: 5 }}
                    />
                    <Text style={styles.socialTextButtons}>Public</Text>
                  </Block>
                </Button>
              </ModalContent>
            </Modal>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    marginRight: 70,
    marginLeft: 70,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#fff",
  },
  socialTextButtons: {
    fontSize: 16,
    color: "white",
    textAlignVertical: "center",
  },
  buttonPopup: {
    height: 50,
    width: 200,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#fff",
  },
});

export default DashboardScreen;
