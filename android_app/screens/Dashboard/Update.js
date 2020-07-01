import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Linking,
} from "react-native";
import { getUpdate } from "../../constants/Data";

function Item({ item }) {
  return (
    <View style={styles.item}>
      <Text
        style={styles.title}
        onPress={() => Linking.openURL(`${item.link}`)}
      >
        {item.link}
      </Text>
      <Text style={styles.subTitle}>Notes: {item.note}</Text>
    </View>
  );
}

export default class UpdateScreen extends React.Component {
  state = {
    updateData: [],
  };

  constructor(props) {
    super(props);

    this.showUpdate();
  }

  showUpdate = () => {
    var updatedData = getUpdate();
    updatedData.then((result) => {
      this.setState({
        updateData: Object.values(result),
      });
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.updateData}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.link}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff2ff",
    flex: 1,
    paddingTop: 20,
  },
  item: {
    borderColor: "black",
    borderWidth: 1,
    padding: 15,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 15,
  },
});
