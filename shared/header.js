import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
    
    const openMenu = () => {
        navigation.openDrawer()
    }
    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={33} onPress={openMenu} styles={styles.icon}></MaterialIcons>
            <View>
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: '#112d4e'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#112d4e',
    },
    icon: {
        position: 'absolute',
        left: 16
    }
});