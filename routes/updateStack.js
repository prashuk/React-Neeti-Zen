import Update from "../components/updateProfile";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

export const UpdateStack = createStackNavigator(
  {
    UpdateStack: { screen: Update }
  },
  {
    navigationOptions: {
      headerMode: "screen"
    }
  }
);

export default createAppContainer(UpdateStack);
