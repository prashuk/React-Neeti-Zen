import React from "react";
import { StyleSheet, Dimensions, ScrollView, View, Text } from "react-native";
import { Block, theme, Button } from "galio-framework";

const { width } = Dimensions.get("screen");

class Help extends React.Component {
  render() {
    return (
      <Block flex center style={styles.home}>
        <View>
          <Text>Help</Text>
        </View>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
    backgroundColor: "#fff2ff"
  },
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 2
  }
});

export default Help;
