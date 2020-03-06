import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function Home() {
  return (
    <View style={styles.screenLayout}>
      <View>
        <View>
          <Text style={styles.headingLayout}>Choose Category</Text>
          <Text style={styles.subHeadingLayout}>
            Choose category to proceed
          </Text>
        </View>
        <View style={styles.categoryPanel}>
          <View style={styles.leftButtons}>
            <TouchableOpacity style={styles.buttonsSuggest}>
              <Text style={styles.inputText}>Suggest</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsMedical}>
              <Text style={styles.inputText}>Medical</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rightButtons}>
            <TouchableOpacity style={styles.buttonsExpatriates}>
              <Text style={styles.inputText}>Expatriates</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsEvents}>
              <Text style={styles.inputText}>Events</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.headingLayout}>More</Text>
          <Text style={styles.subHeadingLayout}>
            Get onboard and receive insights
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonsMplad}>
            <Text style={styles.inputText}>MPLAD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonsUpdates}>
            <Text style={styles.inputText}>Latest Updates</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonsJanTv}>
            <Text style={styles.inputText}>Jan TV</Text>
          </TouchableOpacity>
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

  headingLayout: {
    fontSize: 30,
    fontWeight: "700",
    paddingBottom: 2,
    color: "#112d4e"
  },

  subHeadingLayout: {
    color: "#3f72af",
    fontSize: 20
  },

  categoryPanel: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  leftButtons: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 40,
    width: 165
  },

  rightButtons: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 40,
    width: 165
  },

  inputText: {
    color: "#f9f7f7"
  },

  buttonsMedical: {
    width: "100%",
    backgroundColor: "#fa163f",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },  

  buttonsExpatriates: {
    width: "100%",
    backgroundColor: "#323edd",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },  

  buttonsSuggest: {
    width: "100%",
    backgroundColor: "#216353",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },  

  buttonsEvents: {
    width: "100%",
    backgroundColor: "#ffa41b",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },  

  buttonsMplad: {
    width: "100%",
    backgroundColor: "#6c567b",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },  

  buttonsUpdates: {
    width: "100%",
    backgroundColor: "#f57b51",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },  

  buttonsJanTv: {
    width: "100%",
    backgroundColor: "#9818d6",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  }
});
