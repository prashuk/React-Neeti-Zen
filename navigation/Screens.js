import React from "react";

import { Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Onboarding from "../screens/Onboarding";

import Home from "../screens/Home";
import Suggest from "../screens/Suggest";
import Expatriates from "../screens/Expatriates";
import Medical from "../screens/Medical";
import ServeOther from "../screens/ServeOther";
import Event from "../screens/Event";
import AvailableDates from "../screens/AvailableDates";
import Parliament from "../screens/Parliament";
import Mplad from "../screens/Mplad";
import Jantv from "../screens/Jantv";
import Loksabha from "../screens/Loksabha";
import Public from "../screens/Public";

import Aboutus from "../screens/Aboutus";
import Profile from "../screens/Profile";
import Terms from "../screens/Terms";
import Help from "../screens/Help";
import Privacy from "../screens/Privacy";

import CustomDrawerContent from "./Menu";
import { Header } from "../components";
import { Camera } from "expo-camera";

const { width } = Dimensions.get("screen");
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home | NeetiZen"
              navigation={navigation}
              scene={scene}
              bgColor="#4f3961"
              titleColor="white"
              iconColor="white"
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Suggest"
        component={Suggest}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Suggest"
              back
              bgColor="#4f3961"
              titleColor="white"
              iconColor="white"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: false
        }}
      />
      <Stack.Screen
        name="Expatriates"
        component={Expatriates}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Expatriates"
              back
              bgColor="#4f3961"
              titleColor="white"
              iconColor="white"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: false
        }}
      />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Camera"
              back
              bgColor="#4f3961"
              titleColor="white"
              iconColor="white"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: false
        }}
      />
      <Stack.Screen
        name="Medical"
        component={Medical}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Medical Emergency"
              back
              bgColor="#4f3961"
              titleColor="white"
              iconColor="white"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: false
        }}
      />
      <Stack.Screen
        name="ServeOther"
        component={ServeOther}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Other"
              back
              bgColor="#4f3961"
              titleColor="white"
              iconColor="white"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: false
        }}
      />
      <Stack.Screen
        name="Event"
        component={Event}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Event"
              back
              bgColor="#4f3961"
              titleColor="white"
              iconColor="white"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: false
        }}
      />
      <Stack.Screen
        name="Available Dates"
        component={AvailableDates}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Available Dates"
              back
              bgColor="#4f3961"
              titleColor="white"
              iconColor="white"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: false
        }}
      />
      <Stack.Screen
        name="Parliament"
        component={Parliament}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Raise In Parliament"
              back
              bgColor="#4f3961"
              titleColor="white"
              iconColor="white"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: false
        }}
      />
      <Stack.Screen
        name="Mplad"
        component={Mplad}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="MPLAD"
              back
              bgColor="#4f3961"
              titleColor="white"
              iconColor="white"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: false
        }}
      />
      <Stack.Screen
        name="Jantv"
        component={Jantv}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Jan TV"
              back
              bgColor="#4f3961"
              titleColor="white"
              iconColor="white"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: false
        }}
      />
      <Stack.Screen
        name="Loksabha"
        component={Loksabha}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Lok Sabha Speeches"
              back
              bgColor="#4f3961"
              titleColor="white"
              iconColor="white"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: false
        }}
      />
      <Stack.Screen
        name="Public"
        component={Public}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Public Speeches"
              back
              bgColor="#4f3961"
              titleColor="white"
              iconColor="white"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: false
        }}
      />
    </Stack.Navigator>
  );
}

function AboutusStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="About Us"
        component={Aboutus}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="About Us"
              navigation={navigation}
              scene={scene}
              bgColor="#4f3961"
              titleColor="white"
              iconColor="white"
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Profile"
              navigation={navigation}
              scene={scene}
              bgColor="#4f3961"
              titleColor="white"
              iconColor="white"
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function TermsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Terms & Conditions"
        component={Terms}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Terms & Conditions"
              navigation={navigation}
              scene={scene}
              bgColor="#4f3961"
              titleColor="white"
              iconColor="white"
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function HelpStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Help & Support"
        component={Help}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Help & Support"
              navigation={navigation}
              scene={scene}
              bgColor="#4f3961"
              titleColor="white"
              iconColor="white"
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function PrivacyStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Privacy Policy"
        component={Privacy}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Privacy Policy"
              navigation={navigation}
              scene={scene}
              bgColor="#4f3961"
              titleColor="white"
              iconColor="white"
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About Us" component={AboutusStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Terms & Conditions" component={TermsStack} />
      <Drawer.Screen name="Help & Support" component={HelpStack} />
      <Drawer.Screen name="Privacy Policy" component={PrivacyStack} />
    </Drawer.Navigator>
  );
}
