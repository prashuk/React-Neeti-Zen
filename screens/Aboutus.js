import React from "react";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { Block, Text, theme } from "galio-framework";

class Aboutus extends React.Component {
  render() {
    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex>
          <Block style={styles.padded}>
            <Block>
              <Text style={{ marginTop: 35 }}>
                Neetizen (collectively “Neetizen”, "We", "Us", and "Ours") is
                committed to protecting your privacy. This Privacy Notice
                (“Notice”) describes how Neetizen processes Personal Data in its
                capacity as a controller (i.e. Neetizen decides what Personal
                Data is collected and what it is Used for) or processor (i.e.
                Neetizen only processes the data as per the controller's
                instructions), as the case may be. It also describes your
                choices regarding Use, access and correction of your Personal
                Data.
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff2ff"
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE,
    paddingBottom: 20
  }
});

export default Aboutus;
