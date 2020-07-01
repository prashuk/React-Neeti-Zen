import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Linking,
} from "react-native";
import { getMplad } from "../../constants/Data";

function Item({ item }) {
  return (
    <View style={styles.item}>
      <Text
        style={styles.title}
        onPress={() => Linking.openURL(`${item.fileUrl}`)}
      >
        {item.fileName}
      </Text>
      <Text style={styles.subTitle}>Notes: {item.note}</Text>
    </View>
  );
}

export default class Mplad extends React.Component {
  state = {
    mpladData: [],
  };

  constructor(props) {
    super(props);

    this.showMplad();
  }

  showMplad = () => {
    var updatedData = getMplad();
    updatedData.then((result) => {
      this.setState({
        mpladData: Object.values(result),
      });
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.mpladData}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.fileName}
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
