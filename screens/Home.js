import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
  View,
  TouchableOpacity
} from "react-native";
import { Block, Button, Icon, Text } from "galio-framework";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { width, height } = Dimensions.get("screen");
import { Ionicons } from "@expo/vector-icons";
import * as firebase from "firebase";

function HomeScreen({ navigation }) {
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
          <Block row space="evenly">
            <Block flex left>
              <Button
                color="rgba(176, 108, 168, 1)"
                style={styles.optionsButton}
                onPress={() => navigation.navigate("Suggest")}
              >
                <Block row>
                  <Icon
                    name="ios-help"
                    family="Ionicon"
                    size={70}
                    color={"white"}
                    style={{ marginRight: 5 }}
                  />
                  <Text style={styles.socialTextButtons}>SUGGEST</Text>
                </Block>
              </Button>
            </Block>
            <Block flex right>
              <Button
                color="rgba(49, 176, 170, 1)"
                style={styles.optionsButton}
                onPress={() => navigation.navigate("Expatriates")}
              >
                <Block row>
                  <Icon
                    name="md-airplane"
                    family="Ionicon"
                    size={40}
                    color={"white"}
                    style={{ marginRight: 5 }}
                  />
                  <Text style={styles.socialTextButtons}>EXPATRIATES</Text>
                </Block>
              </Button>
            </Block>
          </Block>
          <Block row space="evenly">
            <Block flex left>
              <Button
                center
                color="rgba(139, 204, 100, 1)"
                style={styles.optionsButton}
                onPress={() => navigation.navigate("Medical")}
              >
                <Block row>
                  <Icon
                    name="ios-medkit"
                    family="Ionicon"
                    size={40}
                    color={"white"}
                    style={{ marginRight: 5 }}
                  />
                  <Text style={styles.socialTextButtons}>MEDICAL</Text>
                </Block>
              </Button>
            </Block>
            <Block flex right>
              <Button
                center
                color="rgba(255, 177, 73, 1)"
                style={styles.optionsButton}
                onPress={() => navigation.navigate("Event")}
              >
                <Block row>
                  <Icon
                    name="md-home"
                    family="Ionicon"
                    size={40}
                    color={"white"}
                    style={{ marginRight: 5 }}
                  />
                  <Text style={styles.socialTextButtons}>EVENT</Text>
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
              color="rgba(7, 182, 220, 1)"
              style={styles.button}
              onPress={() => navigation.navigate("Mplad")}
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
              color="rgba(255, 59, 38, 1)"
              style={styles.button}
              onPress={() => navigation.navigate("Update")}
            >
              <Block row>
                <Icon
                  name="ios-mail"
                  family="Ionicon"
                  size={25}
                  color={"white"}
                  style={{ marginRight: 5 }}
                />
                <Text style={styles.socialTextButtons}>UPDATE</Text>
              </Block>
            </Button>
          </Block>
          <Block center>
            <Button
              style={styles.button}
              color="rgba(237, 116, 163, 1)"
              onPress={() => navigation.navigate("Jantv")}
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
        </Block>
      </Block>
    </ScrollView>
  );
}

function ActiveScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Active Tickets!</Text>
    </View>
  );
}

function InProgressScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>InProgress Tickets!</Text>
    </View>
  );
}

function CompletedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>kjhkjhkj</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: global.User.user.uid
    };

    setTimeout(() => {
      firebase
        .database()
        .ref("users/" + global.User.user.uid)
        .set({
          username: global.User.user.email,
          name: "Prashuk Ajmera",
          age: 27
        })
        .then(() => {
          console.log("Inserted");
        })
        .catch(error => {
          console.log(error);
        });
    }, 5000);

    firebase
      .database()
      .ref("users/" + global.User.user.uid)
      .on("value", snapshot => {
        const highscore = snapshot.val().name;
        console.log("New high score: " + highscore);
      });
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
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#fff"
  },
  optionsButton: {
    width: 150,
    height: 100,
    marginRight: 35,
    marginLeft: 35,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#fff"
  },
  socialTextButtons: {
    fontSize: 16,
    color: "white",
    textAlignVertical: "center"
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
