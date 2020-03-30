import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
  View
} from "react-native";
import { Block, Button, Icon, Text } from "galio-framework";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Modal, { ModalContent } from "react-native-modals";
import { Ionicons } from "@expo/vector-icons";
import * as firebase from "firebase";

const { width, height } = Dimensions.get("screen");

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleServe: false,
      visibleJanTV: false
    };
  }

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
                  onPress={() => this.props.navigation.navigate("Suggest")}
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
                    this.setState({ visibleServe: true, visibleJanTV: false });
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
                  this.setState({ visibleServe: false, visibleJanTV: false });
                }}
              >
                <ModalContent>
                  <Button
                    color="rgba(49, 176, 170, 1)"
                    style={styles.buttonPopup}
                    onPress={() => {
                      this.setState({
                        visibleServe: false,
                        visibleJanTV: false
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
                        visibleJanTV: false
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
                        visibleJanTV: false
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
                // onPress={() => navigation.navigate("Jantv")}
                onPress={() => {
                  this.setState({ visibleServe: false, visibleJanTV: true });
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
                this.setState({ visibleServe: false, visibleJanTV: false });
              }}
            >
              <ModalContent>
                <Button
                  color="rgba(237, 116, 163, 1)"
                  style={styles.buttonPopup}
                  onPress={() => {
                    this.setState({ visibleServe: false, visibleJanTV: false });
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
                    this.setState({ visibleServe: false, visibleJanTV: false });
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

class ActiveScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Active Tickets!</Text>
      </View>
    );
  }
}

class InProgressScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>InProgress Tickets!</Text>
      </View>
    );
  }
}

class CompletedScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>kjhkjhkj</Text>
      </View>
    );
  }
}

const Tab = createBottomTabNavigator();

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: global.User.user.uid
    };

    // console.log(global.User.user);

    // try {
    //   firebase
    //     .database()
    //     .ref("users/" + global.User.user.uid + "/profile/")
    //     .set({
    //       username: global.User.user.email,
    //       name: "",
    //       phone: "",
    //       age: "",
    //       sex: "",
    //       placeResidence: "",
    //       zipCode: ""
    //     })
    //     .then(() => {
    //       console.log("Inserted");
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // } catch (error) {
    //   console.log(error);
    // }

    // firebase
    //   .database()
    //   .ref("users/" + global.User.user.uid)
    //   .on("value", snapshot => {
    //     const highscore = snapshot.val().name;
    //     console.log("New high score: " + highscore);
    //   });
  }

  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home";
            } else if (route.name === "Active") {
              iconName = focused ? "ios-open" : "ios-open";
            } else if (route.name === "In Progress") {
              iconName = focused ? "ios-book" : "ios-book";
            } else if (route.name === "Completed") {
              iconName = focused ? "ios-cloud-done" : "ios-cloud-done";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray"
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Active" component={ActiveScreen} />
        <Tab.Screen name="In Progress" component={InProgressScreen} />
        <Tab.Screen name="Completed" component={CompletedScreen} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
    height: height,
    backgroundColor: "#fff2ff"
  },
  button: {
    height: 50,
    marginRight: 70,
    marginLeft: 70,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#fff"
  },
  socialTextButtons: {
    fontSize: 16,
    color: "white",
    textAlignVertical: "center"
  },
  buttonPopup: {
    height: 50,
    width: 200,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#fff"
  },
  heading: {
    fontSize: 20
  },
  tabBar: {
    flexDirection: "row",
    paddingTop: 10
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16
  }
});

export default Home;
