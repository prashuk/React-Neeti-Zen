import About from "../components/about";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

export const AboutStack = createStackNavigator(
  {
    AboutStack: {
      screen: About,
      navigationOptions: {
        title: "About Us",
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

export default createAppContainer(AboutStack);
