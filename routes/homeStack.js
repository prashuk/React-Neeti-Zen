import Home from "../components/home";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

export const HomeStack = createStackNavigator(
  {
    HomeStack: { screen: Home }
  },
  {
    navigationOptions: {
      headerMode: "screen"
    }
  }
);

export default createAppContainer(HomeStack);
