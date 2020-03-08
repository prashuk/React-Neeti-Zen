import Privacy from "../components/privacy";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

export const PrivacyStack = createStackNavigator(
  {
    PrivacyStack: {
      screen: Privacy,
      navigationOptions: {
        title: "Privacy Policy",
        headerStyle: {
            backgroundColor: "#112d4e",
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

export default createAppContainer(PrivacyStack);
