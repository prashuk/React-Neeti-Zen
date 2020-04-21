import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Block, Button } from "galio-framework";
import * as ImagePicker from "expo-image-picker";

const { height, width } = Dimensions.get("screen");

class Sheet extends React.Component {
  state = {
    image: ""
  };

  constructor(props) {
    super(props);
  }

  pickImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      this.props.imageSelect(this.state.image);
    }
  };

  render() {
    const { navigation } = this.props;
    return (
      <Block flex style={styles.container}>
        <Block center style={{ marginTop: 20 }}>
          <Button
            style={styles.button}
            color="#4f3961"
            onPress={this.pickImageFromGallery}
            textStyle={{ color: "white" }}
          >
            Open Gallery
          </Button>
        </Block>
        <Block center>
          <Button
            style={styles.button}
            color="#4f3961"
            onPress={() => {
                navigation.navigate("Camera");
            }}
            textStyle={{ color: "white" }}
          >
            Open Camera
          </Button>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff2ff",
    height: height,
    width: width
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

export default Sheet;
