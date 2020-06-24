import React from "react";

import { StyleSheet, StatusBar, ScrollView, Dimensions } from "react-native";
import { Block, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

class TicketDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    var ticketNumber = this.props.route.params.title.split(" ")[2];

    if (typeof global.dataForSuggest !== "undefined") {
      for (var i = 0; i < global.dataForSuggest.length; i++) {
        if (
          global.dataForSuggest[i].ticketNumber ===
          parseInt(ticketNumber.trim())
        ) {
          this.setState({
            data: Object.entries(global.dataForSuggest[i].description),
          });
        }
      }
    }

    if (typeof global.dataForMedical !== "undefined") {
      for (var i = 0; i < global.dataForMedical.length; i++) {
        if (
          global.dataForMedical[i].ticketNumber ===
          parseInt(ticketNumber.trim())
        ) {
          console.log(global.dataForMedical[i].description);
          this.setState({
            data: Object.entries(global.dataForMedical[i].description),
          });
        }
      }
    }

    if (typeof global.dataForExpatriates !== "undefined") {
      for (var i = 0; i < global.dataForExpatriates.length; i++) {
        if (
          global.dataForExpatriates[i].ticketNumber ===
          parseInt(ticketNumber.trim())
        ) {
          this.setState({
            data: Object.entries(global.dataForExpatriates[i].description),
          });
        }
      }
    }

    if (typeof global.dataForOther !== "undefined") {
      for (var i = 0; i < global.dataForOther.length; i++) {
        if (
          global.dataForOther[i].ticketNumber === parseInt(ticketNumber.trim())
        ) {
          this.setState({
            data: Object.entries(global.dataForOther[i].description),
          });
        }
      }
    }

    if (typeof global.dataForEvent !== "undefined") {
      for (var i = 0; i < global.dataForEvent.length; i++) {
        if (
          global.dataForEvent[i].ticketNumber === parseInt(ticketNumber.trim())
        ) {
          this.setState({
            data: Object.entries(global.dataForEvent[i].description),
          });
        }
      }
    }

    if (typeof global.dataForParliament !== "undefined") {
      for (var i = 0; i < global.dataForParliament.length; i++) {
        if (
          global.dataForParliament[i].ticketNumber ===
          parseInt(ticketNumber.trim())
        ) {
          this.setState({
            data: Object.entries(global.dataForParliament[i].description),
          });
        }
      }
    }
  }

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{ paddingBottom: 0 }}
      >
        <Block flex style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Block flex>
            <Block style={styles.padded}>
              <Block>
                <Text style={styles.heading}>
                  {this.props.route.params.title}
                </Text>
                {this.state.data.map(([key, value]) => (
                  <Block style={styles.content}>
                    <Text key={key} style={styles.textStyle1}>
                      {(key.charAt(0).toUpperCase() + key.slice(1))
                        .replace(/([A-Z])/g, " $1")
                        .trim()}
                    </Text>
                    <Text key={key} style={styles.textStyle2}>
                      {value.charAt(0).toUpperCase() + value.slice(1)}
                    </Text>
                  </Block>
                ))}
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff2ff",
    width: width,
    paddingBottom: height - width * 0.5,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE,
  },
  content: {
    borderColor: "black",
    borderWidth: 1,
    padding: 3,
    paddingVertical: 5,
  },
  heading: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  textStyle1: {
    fontSize: 15,
    marginHorizontal: 3,
    fontWeight: "bold",
  },
  textStyle2: {
    fontSize: 15,
    marginHorizontal: 3,
  },
});

export default TicketDetails;
