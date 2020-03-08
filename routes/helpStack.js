import Help from "../components/help";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

export const HelpStack = createStackNavigator(
  {
    HelpStack: {
      screen: Help,
      navigationOptions: {
        title: "Help & Support",
        headerStyle: {
          backgroundColor: "#112d4e"
        },
        headerTitleStyle: {
          color: "#dbe2ef"
        }
      }
    }
  },
  {
    navigationOptions: {
      headerMode: "screen"
    }
  }
);

export default createAppContainer(HelpStack);
