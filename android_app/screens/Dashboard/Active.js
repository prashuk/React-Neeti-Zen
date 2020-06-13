import React from "react";

import {
  StyleSheet,
  View,
  SectionList,
  TouchableOpacity,
} from "react-native";
import { Text } from "galio-framework";

class ActiveScreen extends React.Component {
  state = {
    data: global.DATA,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.data !== global.DATA) {
        this.setState({ data: global.DATA });
      }
    }, 3000);
  }

  render() {
    const { navigation } = this.props;

    function Item({ title }) {
      return (
        <View style={styles.item}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("TicketDetails", {
                title: title,
              })
            }
          >
            <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View>
        <SectionList
          sections={this.state.data}
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

export default ActiveScreen;
