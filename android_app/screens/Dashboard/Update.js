import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{title}</Text>
    </View>
  );
}

export default class UpdateScreen extends React.Component {
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
