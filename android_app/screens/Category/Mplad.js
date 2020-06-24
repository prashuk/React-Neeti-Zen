import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text } from "react-native";
import { getMplad } from "../../constants/Data";
import Constants from "expo-constants";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  }
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{title}</Text>
    </View>
  );
}

export default class Mplad extends React.Component {
  constructor(props) {
    super(props);
    getMplad();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 14,
  },
  subTitle: {
    fontSize: 11,
  },
});
