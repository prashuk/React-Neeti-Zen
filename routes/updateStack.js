import Update from "../components/updateProfile";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

export const UpdateStack = createStackNavigator(
  {
    UpdateStack: {
      screen: Update,
      navigationOptions: {
        title: "Update Profile",
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

export default createAppContainer(UpdateStack);
