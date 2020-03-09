import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

export default function Privacy({ navigation }) {
  return (
    <View style={styles.screenLayout}>
      <View>
        <View style={styles.categoryPanel}>
          <Text style={styles.subHeadingLayout}>
            Neetizen (collectively “Neetizen”, "We", "Us", and "Ours") is
            committed to protecting your privacy. This Privacy Notice (“Notice”)
            describes how Neetizen processes Personal Data in its capacity as a
            controller (i.e. Neetizen decides what Personal Data is collected
            and what it is Used for) or processor (i.e. Neetizen only processes
            the data as per the controller's instructions), as the case may be.
            It also describes your choices regarding Use, access and correction
            of your Personal Data.
          </Text>
        </View>
        <View style={styles.categoryPanel}>
          <Text style={styles.headingLayout}>
            WHOM DOES THIS NOTICE APPLY TO?
          </Text>
        </View>
        <View style={styles.categoryPanel}>
          <Text style={styles.subHeadingLayout}>
            This Notice Applies to (i) entities or individuals, excluding
            End-Users and Users, who have subscribed to the Service(s) and have
            agreed to the Terms (hereinafter referred to as the “Customer”) and
            (ii) individuals (“Individuals”) from whom Neetizen collects data as
            a controller as specified below.
          </Text>
        </View>
        <Text style={styles.headingLayout}>ANY QUESTIONS?</Text>
        <Text style={styles.subHeadingLayout}>
          If you have questions or complaints regarding our privacy notice or
          practices, please contact Us at support@Neetizen.com.
        </Text>
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
    textAlign: "justify"
  },

  categoryPanel: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  headingLayout: {
    fontSize: 30,
    fontWeight: "700",
    paddingBottom: 2,
    color: "#112d4e"
  },

  inputText: {
    color: "#f9f7f7"
  }
});
