import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, Button, Text, theme, Input, Icon } from "galio-framework";
import { Dropdown } from "react-native-material-dropdown";
import { Camera } from 'expo-camera';
import * as ImagePicker from "expo-image-picker";

const { height, width } = Dimensions.get("screen");

class Expatriates extends React.Component {
  
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  
  render() {
    const { navigation } = this.props;
    let data = [
      {
        value: "Job"
      },
      {
        value: "Expatriation"
      },
      {
        value: "Missing National"
      }
    ];

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 0 }}
      >
        <Block flex style={styles.container}>
          <Block style={styles.title}>
            <Block>
              <Text color="#4f3961" size={25}>
                Fill Form
              </Text>
            </Block>
            <Block
              style={{
                backgroundColor: "white",
                marginBottom: 10,
                borderRadius: 10
              }}
            >
              <Dropdown label="Select Job" data={data} />
            </Block>
            <Block
              style={{
                backgroundColor: "white",
                marginBottom: 10,
                borderRadius: 10
              }}
            >
              <Dropdown label="Select Reason" data={data} />
            </Block>
            <Block>
              <Input placeholder="Name"></Input>
            </Block>
            <Block>
              <Input placeholder="Permanent Address with Phone number in India"></Input>
            </Block>
            <Block>
              <Input placeholder="Country of birth"></Input>
            </Block>
            <Block>
              <Input placeholder="Country of Residence"></Input>
            </Block>
            <Block>
              <Input placeholder="Current Address"></Input>
            </Block>
            <Button
              style={styles.button}
              color="#4f3961"
              textStyle={{ color: "white" }}
              onPress={this.pickImage}
            >
              Upload Passport
            </Button>
            <Button
              style={styles.button}
              color="#4f3961"
              textStyle={{ color: "white" }}
              onPress={this.pickImage}
            >
              Upload Visa
            </Button>
            <Button
              style={styles.button}
              color="#4f3961"
              textStyle={{ color: "white" }}
              onPress={this.pickImage}
            >
              Upload Aadhaar
            </Button>
            <Block>
              <Input placeholder="Email"></Input>
            </Block>
            <Block>
              <Input placeholder="Phone Number"></Input>
            </Block>
            <Block>
              <Input placeholder="Employer"></Input>
            </Block>
            <Block>
              <Input placeholder="Notes (Problem in 100 words)"></Input>
            </Block>
          </Block>
          <Block center style={{ paddingBottom: 10 }}>
            <Button
              style={styles.button}
              color="#4f3961"
              onPress={() => navigation.navigate("App")}
              textStyle={{ color: "white" }}
            >
              SUBMIT
            </Button>
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
  sideButton: {
    backgroundColor: "red",
    width: 40,
    height: 40,
    marginTop: 10,
    marginLeft: 10
  },
  title: {
    marginTop: 20,
    marginRight: 30,
    marginLeft: 30
  },
  subTitle: {
    marginTop: 20
  }
});

export default Expatriates;
