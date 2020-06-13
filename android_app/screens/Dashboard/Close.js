import React from "react";

import { StyleSheet, View, SectionList } from "react-native";
import { Text } from "galio-framework";

class CompletedScreen extends React.Component {
  render() {
    const arrSuggestData = [];
    if (typeof global.dataForSuggest !== "undefined") {
      var k = 0;
      for (var i = 0; i < global.dataForSuggest.length; i++) {
        if (Object.values(global.dataForSuggest[i])[0]["status"] === "close") {
          arrSuggestData[k] =
            "Ticket Number: " + Object.values(global.dataForSuggest[i])[1];
          k = k + 1;
        }
      }
    }

    const arrMedicalData = [];
    if (typeof global.dataForMedical !== "undefined") {
      for (var i = 0; i < global.dataForMedical.length; i++) {
        if (Object.values(global.dataForMedical[i])[0]["status"] === "close") {
          arrMedicalData[i] =
            "Ticket Number: " + Object.values(global.dataForMedical[i])[1];
        }
      }
    }

    const arrExpData = [];
    if (typeof global.dataForExpatriates !== "undefined") {
      for (var i = 0; i < global.dataForExpatriates.length; i++) {
        if (
          Object.values(global.dataForExpatriates[i])[0]["status"] === "close"
        ) {
          arrExpData[i] =
            "Ticket Number: " + Object.values(global.dataForExpatriates[i])[1];
        }
      }
    }

    const arrOtherData = [];
    if (typeof global.dataForOther !== "undefined") {
      for (var i = 0; i < global.dataForOther.length; i++) {
        if (Object.values(global.dataForOther[i])[0]["status"] === "close") {
          arrOtherData[i] =
            "Ticket Number: " + Object.values(global.dataForOther[i])[1];
        }
      }
    }

    const arrEventData = [];
    if (typeof global.dataForEvent !== "undefined") {
      for (var i = 0; i < global.dataForEvent.length; i++) {
        if (Object.values(global.dataForEvent[i])[0]["status"] === "close") {
          arrEventData[i] =
            "Ticket Number: " + Object.values(global.dataForEvent[i])[1];
        }
      }
    }

    const arrParliamentData = [];
    if (typeof global.dataForParliament !== "undefined") {
      for (var i = 0; i < global.dataForParliament.length; i++) {
        if (
          Object.values(global.dataForParliament[i])[0]["status"] === "close"
        ) {
          arrParliamentData[i] =
            "Ticket Number: " + Object.values(global.dataForParliament[i])[1];
        }
      }
    }

    const DATA = [
      {
        title: "Bring to Attention",
        data: arrSuggestData,
      },
      {
        title: "Medical",
        data: arrMedicalData,
      },
      {
        title: "Expatriates",
        data: arrExpData,
      },
      {
        title: "Other",
        data: arrOtherData,
      },
      {
        title: "Invite",
        data: arrEventData,
      },
      {
        title: "Raise in Parliament",
        data: arrParliamentData,
      },
    ];

    function Item({ title }) {
      return (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
    }

    return (
      <View>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 30,
    marginVertical: 1,
  },
  header: {
    fontSize: 17,
    backgroundColor: "#fff2ff",
    paddingLeft: 18,
    paddingTop: 5,
    paddingBottom: 5,
  },
  title: {
    fontSize: 14,
  },
});

export default CompletedScreen;
