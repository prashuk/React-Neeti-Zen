import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, Button, Text, Input } from "galio-framework";
import Spinner from "react-native-loading-spinner-overlay";

const { width } = Dimensions.get("screen");

class Public extends React.Component {
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 0 }}
        keyboardShouldPersistTaps="always"
      >
        <Spinner
                    visible={this.state.spinner}
                    textStyle={styles.spinnerTextStyle}
                />
        <Block flex style={styles.container}>
          <Block style={styles.title}>
            <Text>List</Text>
          </Block>
        </Block>
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
    shadowOpacity: 0,
    marginBottom: 10
  },
  title: {
    marginTop: 20,
    marginRight: 30,
    marginLeft: 30
  }
});

export default Public;
