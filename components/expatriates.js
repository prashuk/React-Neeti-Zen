import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Dropdown } from "react-native-material-dropdown";

const dropDown = [
  {
    value: "Job",
    subitems: [
      {
        value: "Fraud"
      },
      {
        value: "Unsafe work"
      },
      {
        value: "Wages"
      },
      {
        value: "Work accident"
      }
    ]
  },
  {
    value: "Expatriation",
    subitems: [
      {
        value: "Detention"
      },
      {
        value: "Death abroad"
      }
    ]
  },
  {
    value: "Missing National"
  }
];

export default class Expatriates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: ""
    };
    this.findOptionUsed = this.findOptionUsed.bind(this);
  }

  findOptionUsed() {
    if (this.state.dropDown === "Job") {
      return (
        <Dropdown
          id="anotherDropDown"
          label="Options"
          data={dropDown[0]["subitems"]}
        />
      );
    }
    if (this.state.dropDown === "Expatriation") {
      return (
        <Dropdown
          id="anotherDropDown"
          label="Options"
          data={dropDown[1]["subitems"]}
        />
      );
    }
  }

  render() {
    return (
      <View style={styles.screenLayout}>
        <View>
          <View>
            <Dropdown
              id="dropDown"
              label="Options"
              data={dropDown}
              onChangeText={dropDown => {
                this.setState({ dropDown });
              }}
            />
            {this.findOptionUsed()}
          </View>
        </View>
      </View>
    );
  }
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
