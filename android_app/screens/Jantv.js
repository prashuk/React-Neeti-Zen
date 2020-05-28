import React from "react";
import { StyleSheet, Dimensions, ScrollView, View, Text } from "react-native";
import { Block } from "galio-framework";

const { width } = Dimensions.get("screen");

class Jantv extends React.Component {
  render() {
    return (
      <Block flex center style={styles.home}>
        <View>
          <Text>Jantv</Text>
        </View>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
    backgroundColor: "#fff2ff",
  },
});

export default Jantv;
