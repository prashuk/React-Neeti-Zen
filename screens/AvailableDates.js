import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { Block, Text, theme } from "galio-framework";

class AvailableDates extends React.Component {
  render() {
    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex>
          <Block style={styles.padded}>
            <Block>
              <Text size={16} color="rgba(0,0,0,1)" style={{ marginTop: 35 }}>
                Calendar
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

export default AvailableDates;
