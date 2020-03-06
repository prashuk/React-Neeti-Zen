import { createDrawerNavigator, DrawerSidebar } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import HelpStack from './helpStack';
import UpdateStack from './updateStack';

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      title: "Home",
      headerStyle: { backgroundColor: '#112d4e' },
      headerTitleStyle: { color: '#f9f7f7' }
    }
  },
  About: {
    screen: AboutStack,
    navigationOptions: {
      title: "About Us",
      headerStyle: { backgroundColor: '#112d4e' },
      headerTitleStyle: { color: '#f9f7f7' }
    }
  },
  Help: {
    screen: HelpStack,
    navigationOptions: {
      title: "Help",
      headerStyle: { backgroundColor: '#112d4e' },
      headerTitleStyle: { color: '#f9f7f7' }
    }
  },
  Update: {
    screen: UpdateStack,
    navigationOptions: {
      title: "Update",
      headerStyle: { backgroundColor: '#112d4e' },
      headerTitleStyle: { color: '#f9f7f7' }
    }
  }
}, {
    headerMode: 'screen'
});

export default createAppContainer(RootDrawerNavigator);