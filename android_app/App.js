import React from "react";
import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";

import { enableScreens } from "react-native-screens";
enableScreens();

import Screens from "./navigation/Screens";
import { argonTheme } from "./constants";

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <GalioProvider theme={argonTheme}>
          <Block flex>
            <Screens />
          </Block>
        </GalioProvider>
      </NavigationContainer>
    );
  }
}
