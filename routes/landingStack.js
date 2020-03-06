import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Navigator from "../routes/drawer";
import Signin from "../components/signin";
import Signup from "../components/signup";

const screens = {
  SignIn: {
    screen: Signin,
    navigationOptions: {
      headerShown: false,
      disableGestures: true
    }
  },
  SignUp: {
    screen: Signup,
    navigationOptions: {
      headerShown: false,
      disableGestures: true
    }
  },
  Home: {
    screen: Navigator,
    navigationOptions: {
      headerShown: false,
      disableGestures: true
    }
  }
};

const LandingStack = createStackNavigator(screens);

export default createAppContainer(LandingStack);
