import Home from "../components/home";
import Expatriates from "../components/expatriates";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

export const HomeStack = createStackNavigator(
  {
    HomeStack: {
      screen: Home,
      navigationOptions: {
        title: "Home | NeetiZen",
        headerStyle: {
          backgroundColor: "#112d4e"
        },
        headerTitleStyle: {
          color: "#dbe2ef"
        }
      }
    },
    ExpatriatesStack: {
      screen: Expatriates,
      navigationOptions: {
        title: "Expatriates",
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

export default createAppContainer(HomeStack);
