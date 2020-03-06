import Help from "../components/help";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

export const HelpStack = createStackNavigator(
  {
    HelpStack: { screen: Help }
  },
  {
    navigationOptions: {
      headerMode: "screen"
    }
  }
);

export default createAppContainer(HelpStack);
