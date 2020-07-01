import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Text } from "galio-framework";

const { width, height } = Dimensions.get("screen");

class Aboutus extends React.Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 15, lineHeight: 18, color: "#000" }}>
            NeetiZen{" "}
          </Text>
          <Text style={{ fontSize: 8, lineHeight: 10, color: "#000" }}>TM</Text>
          <Text style={{ fontSize: 15, lineHeight: 18, color: "#000" }}>
            {" "}
            is a platform to facilitate citizen
          </Text>
        </View>
        <Text style={{ fontSize: 15, lineHeight: 18, color: "#000" }}>
          engagement by providing them a streamlined method to report issues to
          their elected representatives and officials and seek their effective
          resolution. Neetizen TM can also aid the elected representatives and
          officials in citizen outreach and can help them to gain real time
          inputs from the citizens on key policy or community issues. The
          inbuilt tools and features will help all the stakeholders to glean
          insights from the reported issues and help them to better serve the
          community.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: "#fff2ff",
    height: height,
    padding: 15,
  },
});

export default Aboutus;
