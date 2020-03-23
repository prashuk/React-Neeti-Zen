import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, Button, Text, theme, Input, Icon } from "galio-framework";

const { height, width } = Dimensions.get("screen");

class Medical extends React.Component {
  render() {
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
              <Input placeholder="Age/Sex"></Input>
            </Block>
            <Block>
              <Input placeholder="Occupation of Patient"></Input>
            </Block>
            <Block>
              <Input placeholder="Father’s/Husband Name"></Input>
            </Block>
            <Block>
              <Input placeholder="Number of Family Number"></Input>
            </Block>
            <Block>
              <Input placeholder="Residential Address"></Input>
            </Block>
            <Button
              style={styles.button}
              color="#4f3961"
              textStyle={{ color: "white" }}
            >
              Upload Address Proof
            </Button>
            <Block>
              <Input placeholder="Telephone Number"></Input>
            </Block>
            <Block>
              <Input placeholder="Aadhaar Card Number"></Input>
            </Block>
            <Button
              style={styles.button}
              color="#4f3961"
              textStyle={{ color: "white" }}
            >
              Upload Aadhar Card
            </Button>
            <Block>
              <Input placeholder="Nature of Disease"></Input>
            </Block>
            <Block>
              <Input placeholder="Financial Assistance Amount"></Input>
            </Block>
            <Button
              style={styles.button}
              color="#4f3961"
              textStyle={{ color: "white" }}
            >
              Upload an Estimate from the govt
            </Button>
            <Block>
              <Input placeholder="Received Medical Assistance Earlier"></Input>
            </Block>
            <Block>
              <Input placeholder="Any other Source of Funding applied"></Input>
            </Block>
            <Block>
              <Input placeholder="Patient Government employee"></Input>
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
    shadowOpacity: 0
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

export default Medical;
