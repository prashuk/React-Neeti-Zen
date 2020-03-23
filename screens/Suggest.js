import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, Button, Text, theme, Input, Icon } from "galio-framework";

const { width } = Dimensions.get("screen");

class Suggest extends React.Component {
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
                Fill Notes
              </Text>
            </Block>
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
    backgroundColor: "#ffe8e8"
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
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

export default Suggest;
