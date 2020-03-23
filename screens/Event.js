import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, Button, Text, theme, Input, Icon } from "galio-framework";
import { Dropdown } from "react-native-material-dropdown";

const { height, width } = Dimensions.get("screen");

class Event extends React.Component {
  render() {
    const { navigation } = this.props;
    let data = [
      {
        value: "Birthday"
      },
      {
        value: "Marriage"
      },
      {
        value: "Conference"
      },
      {
        value: "Book Festival"
      },
      {
        value: "Religious Festivities"
      },
      {
        value: "Wedding Ceremony"
      },
      {
        value: "Film Festival"
      },
      {
        value: "Film Preview"
      },
      {
        value: "Inauguration"
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
            <Block>
              <Input placeholder="Name of Patient"></Input>
            </Block>
            <Block>
              <Input placeholder="Address"></Input>
            </Block>
            <Block>
              <Input placeholder="Phone Number"></Input>
            </Block>
            <Block>
              <Input placeholder="Email"></Input>
            </Block>
            <Block
              style={{
                backgroundColor: "white",
                marginBottom: 10,
                borderRadius: 10
              }}
            >
              <Dropdown label="Occasion" data={data} />
            </Block>
            <Button
              style={styles.button}
              color="#4f3961"
              textStyle={{ color: "white" }}
              onPress={() => navigation.navigate("Available Dates")}
            >
              Check Availability & Invitation Request
            </Button>
            <Button
              style={styles.button}
              color="#4f3961"
              textStyle={{ color: "white" }}
            >
              Upload Invitation Card
            </Button>
            <Block>
              <Input placeholder="Notes (Describe invitation in 100 words)"></Input>
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
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 10,
    shadowOpacity: 0,
    marginBottom: 10
  },
  drop: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
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

export default Event;
