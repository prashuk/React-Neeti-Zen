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
              <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                Neetizen (TM) is a platform to facilitate citizen engagement by
                providing them a streamlined method to report issues to their
                elected representatives and officials and seek their effective
                resolution. Neetizen (TM) can also aid the elected
                representatives and officials in citizen outreach and can help
                them to gain real time inputs from the citizens on key policy or
                community issues. The inbuilt tools and features will help all
                the stakeholders to glean insights from the reported issues and
                help them to better serve the community.
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
    backgroundColor: "#fff2ff",
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE,
    paddingBottom: 20,
  },
});

export default Aboutus;
