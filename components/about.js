import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

export default function About({ navigation }) {
  return (
    <View style={styles.screenLayout}>
      <View>
        <View style={styles.categoryPanel}>
          <Text style={styles.subHeadingLayout}>
            Neetizen is a platform to facilitate citizen engagement by providing
            them a streamlined method to report issues to their elected
            representative & officials and seek their effective resolution.
            Neetizen can also aid the elected representatives and officials in
            citizen outreach and can help to get real time inputs from the
            citizens on key policy or community issues. The inbuilt tools and
            features will help the elected representatives and officials to
            glean insights from the reported issues and help them to better
            serve their constituents.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f7f7",
    alignItems: "center",
    justifyContent: "center"
  },

  screenLayout: {
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30
  },

  subHeadingLayout: {
    color: "#3f72af",
    fontSize: 20,
    textAlign: 'justify'
  },

  categoryPanel: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  inputText: {
    color: "#f9f7f7"
  }
});
