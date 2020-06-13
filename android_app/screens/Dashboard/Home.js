import React from "react";

import { View, TouchableOpacity } from "react-native";
import { Text, Icon } from "galio-framework";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { refresh } from "../../constants/Data";

import ActiveScreen from "./Active";
import InProgressScreen from "./InProgress";
import CompletedScreen from "./Close";
import UpdateScreen from "./Update";
import DashboardScreen from "./Dashboard";

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: "#DCDCDC",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          refresh();

          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              height: 50,
            }}
          >
            <Icon
              name={
                label === "Home"
                  ? "ios-home"
                  : label === "Update"
                  ? "ios-arrow-down"
                  : label === "Active"
                  ? "ios-open"
                  : label === "In Progress"
                  ? "ios-book"
                  : label === "Completed"
                  ? "ios-cloud-done"
                  : ""
              }
              family="Ionicon"
              size={25}
              color={isFocused ? "red" : "#888888"}
              style={{ marginTop: 5 }}
            />
            <Text
              style={{
                color: isFocused ? "red" : "#888888",
                fontSize: 12,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={DashboardScreen} />
        <Tab.Screen name="Update" component={UpdateScreen} />
        <Tab.Screen name="Active" component={ActiveScreen} />
        <Tab.Screen name="In Progress" component={InProgressScreen} />
        <Tab.Screen name="Completed" component={CompletedScreen} />
      </Tab.Navigator>
    );
  }
}

export default Home;
