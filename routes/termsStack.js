import Terms from "../components/terms";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

export const TermsStack = createStackNavigator(
  {
    TermsStack: {
      screen: Terms,
      navigationOptions: {
        title: "Terms & Conditions",
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

export default createAppContainer(TermsStack);
