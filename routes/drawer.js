import { createDrawerNavigator, DrawerSidebar } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import HelpStack from './helpStack';
import UpdateStack from './updateStack';
import PrivacyStack from './privacyStack';
import TermsStack from './termsStack';

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      drawerLabel: "Home",
      headerStyle: { backgroundColor: '#112d4e' },
      headerTitleStyle: { color: '#f9f7f7' }
    }
  },
  About: {
    screen: AboutStack,
    navigationOptions: {
      drawerLabel: "About Us",
      headerStyle: { backgroundColor: '#112d4e' },
      headerTitleStyle: { color: '#f9f7f7' }
    }
  },
  Update: {
    screen: UpdateStack,
    navigationOptions: {
      drawerLabel: "Update Profile",
      headerStyle: { backgroundColor: '#112d4e' },
      headerTitleStyle: { color: '#f9f7f7' }
    }
  },
  Terms: {
    screen: TermsStack,
    navigationOptions: {
      drawerLabel: "Terms & Conditions",
      headerStyle: { backgroundColor: '#112d4e' },
      headerTitleStyle: { color: '#f9f7f7' }
    }
  },
  Privacy: {
    screen: PrivacyStack,
    navigationOptions: {
      drawerLabel: "Privacy Policy",
      headerStyle: { backgroundColor: '#112d4e' },
      headerTitleStyle: { color: '#f9f7f7' }
    }
  },
  Help: {
    screen: HelpStack,
    navigationOptions: {
      drawerLabel: "Help & Support",
      headerStyle: { backgroundColor: '#112d4e' },
      headerTitleStyle: { color: '#f9f7f7' }
    }
  },
  SignOut: {
    // Need to add functionality
    screen: UpdateStack,
    navigationOptions: {
      drawerLabel: "Sign Out",
      headerStyle: { backgroundColor: '#112d4e' },
      headerTitleStyle: { color: '#f9f7f7' }
    }
  }
}, {
    headerMode: 'screen',
    initialRouteName: 'Home'
});

export default createAppContainer(RootDrawerNavigator);