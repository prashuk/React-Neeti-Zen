import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

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

const signinBtnPressed = () => {
  navigation.goBack();
};

export default class Expatriates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: "",
      imageBiographical: null,
      imageAadhar: null,
      imageVisa: null
    };
    this.findOptionUsed = this.findOptionUsed.bind(this);
  }

  makeForm() {
    return (
      <View style={styles.container1}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText1}
            placeholder="Full Name"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputTextForAddress}
            placeholder="Permanent Indian address"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ password: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText1}
            placeholder="Permanent Indian phone number"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ password: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText1}
            placeholder="Place of Residence"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ password: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText1}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity style={styles.photoBtn} onPress={this._pickImage}>
          <Text style={styles.loginText}>Upload Document</Text>
        </TouchableOpacity>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText1}
            placeholder="Mobile Number"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ password: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText1}
            placeholder="Employer"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={signinBtnPressed}>
          <Text style={styles.signinText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  componentDidMount() {
    this.getPermissionAsync();
    console.log("hi");
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
    if (this.state.dropDown === "Missing National") {
      return this.makeForm();
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

  photoBtn: {
    width: "80%",
    backgroundColor: "#112d4e",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
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
  },

  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#b21f66",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#dbe2ef",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText1: {
    height: 50,
    color: "#112d4e"
  },
  forgot: {
    color: "#112d4e",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#112d4e",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "#dbe2ef"
  },
  signinText: {
    color: "#112d4e"
  },

  container1: {
    marginTop: 350,
    flex: 1,
    backgroundColor: "#f9f7f7",
    alignItems: "center",
    justifyContent: "center"
  },

  inputTextForAddress: {
    height: 50,
    color: "#112d4e"
  }
});
