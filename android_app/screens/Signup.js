import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { Block, Text, theme } from "galio-framework";

class Signup extends React.Component {
  render() {
    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex>
          <Block style={styles.padded}>
            <Block>
              <Text size={16} color="rgba(0,0,0,1)" style={{ marginTop: 35 }}>
                Sign up.
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
    backgroundColor: theme.COLORS.WHITE
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE,
    paddingBottom: 20
  }
});

export default Signup;
