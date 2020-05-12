import React from "react";
import { ScrollView, StyleSheet, Image, Text } from "react-native";
import { Block } from "galio-framework";

import { DrawerItem as DrawerCustomItem } from "../components";

function CustomDrawerContent({
    drawerPosition,
    navigation,
    profile,
    focused,
    state,
    ...rest
}) {
    const screens = [
        "Home",
        "About Us",
        "Profile",
        "Terms & Conditions",
        "Help & Support",
        "Privacy Policy",
        "Sign Off",
    ];

    return (
        <Block
            style={styles.container}
            forceInset={{ top: "always", horizontal: "never" }}
        >
            <Block flex={0.06} style={styles.header}>
                <Image
                    styles={{ width: 50, height: 50 }}
                    source={require("../assets/imgs/logo-small.png")}
                />
            </Block>
            <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
                <ScrollView
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    {screens.map((item, index) => {
                        return (
                            <DrawerCustomItem
                                title={item}
                                key={index}
                                navigation={navigation}
                                focused={state.index === index ? true : false}
                            />
                        );
                    })}
                </ScrollView>
            </Block>
        </Block>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 28,
        paddingBottom: 10,
        paddingTop: 30,
        justifyContent: "center",
    },
});

export default CustomDrawerContent;
