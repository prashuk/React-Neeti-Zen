import React from "react";
import {
    StyleSheet,
    Dimensions,
    ScrollView,
    StatusBar,
    View,
    SectionList,
    TouchableOpacity,
} from "react-native";
import { Block, Button, Text, Icon } from "galio-framework";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Modal, { ModalContent } from "react-native-modals";
import * as firebase from "firebase";

const { width, height } = Dimensions.get("screen");

class HomeScreen extends React.Component {
    state = {
        visibleServe: false,
        visibleJanTV: false,
    };

    constructor(props) {
        super(props);

        var childKey;
        var childData;
        firebase
            .database()
            .ref("users/" + global.User.user.uid + "/complaints/")
            .on("value", (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    childKey = childSnapshot.key;
                    childData = Object.values(childSnapshot.val());
                    if (childKey === "suggest") {
                        global.dataForSuggest = childData;
                    } else if (childKey === "expatriates") {
                        global.dataForExpatriates = childData;
                    } else if (childKey === "medical") {
                        global.dataForMedical = childData;
                    } else if (childKey === "other") {
                        global.dataForOther = childData;
                    } else if (childKey === "event") {
                        global.dataForEvent = childData;
                    } else if (childKey === "parliament") {
                        global.dataForParliament = childData;
                    }
                });
            });
    }

    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 0 }}
            >
                <StatusBar hidden={false}></StatusBar>
                <Block>
                    <Block flex>
                        <Block>
                            <Text
                                color="#4f3961"
                                size={25}
                                style={{ marginTop: 10, marginLeft: 15 }}
                            >
                                Choose Category
                            </Text>
                            <Text
                                color="#4f3961"
                                size={18}
                                style={{ marginLeft: 15 }}
                            >
                                Choose category to proceed
                            </Text>
                        </Block>
                        <Block flex>
                            <Block center>
                                <Button
                                    color="rgba(176, 108, 168, 1)"
                                    style={styles.button}
                                    onPress={() =>
                                        this.props.navigation.navigate(
                                            "Suggest",
                                            {
                                                handleData: this.handleData,
                                            }
                                        )
                                    }
                                >
                                    <Block row>
                                        <Icon
                                            name="ios-help"
                                            family="Ionicon"
                                            size={50}
                                            color={"white"}
                                            style={{ marginRight: 5 }}
                                        />
                                        <Text style={styles.socialTextButtons}>
                                            Bring To Attention
                                        </Text>
                                    </Block>
                                </Button>
                            </Block>
                            <Block center>
                                <Button
                                    color="rgba(49, 176, 170, 1)"
                                    style={styles.button}
                                    onPress={() => {
                                        this.setState({
                                            visibleServe: true,
                                            visibleJanTV: false,
                                        });
                                    }}
                                >
                                    <Block row>
                                        <Icon
                                            name="ios-send"
                                            family="Ionicon"
                                            size={30}
                                            color={"white"}
                                            style={{ marginRight: 5 }}
                                        />
                                        <Text style={styles.socialTextButtons}>
                                            How Can I Serve
                                        </Text>
                                    </Block>
                                </Button>
                            </Block>
                            <Modal
                                visible={this.state.visibleServe}
                                onTouchOutside={() => {
                                    this.setState({
                                        visibleServe: false,
                                        visibleJanTV: false,
                                    });
                                }}
                            >
                                <ModalContent>
                                    <Button
                                        color="rgba(49, 176, 170, 1)"
                                        style={styles.buttonPopup}
                                        onPress={() => {
                                            this.setState({
                                                visibleServe: false,
                                                visibleJanTV: false,
                                            });
                                            this.props.navigation.navigate(
                                                "Medical"
                                            );
                                        }}
                                    >
                                        <Block row>
                                            <Icon
                                                name="ios-medkit"
                                                family="Ionicon"
                                                size={30}
                                                color={"white"}
                                                style={{ marginRight: 5 }}
                                            />
                                            <Text
                                                style={styles.socialTextButtons}
                                            >
                                                Medical
                                            </Text>
                                        </Block>
                                    </Button>
                                    <Button
                                        color="rgba(49, 176, 170, 1)"
                                        style={styles.buttonPopup}
                                        onPress={() => {
                                            this.setState({
                                                visibleServe: false,
                                                visibleJanTV: false,
                                            });
                                            this.props.navigation.navigate(
                                                "Expatriates"
                                            );
                                        }}
                                    >
                                        <Block row>
                                            <Icon
                                                name="md-airplane"
                                                family="Ionicon"
                                                size={30}
                                                color={"white"}
                                                style={{ marginRight: 5 }}
                                            />
                                            <Text
                                                style={styles.socialTextButtons}
                                            >
                                                Expatriates
                                            </Text>
                                        </Block>
                                    </Button>
                                    <Button
                                        color="rgba(49, 176, 170, 1)"
                                        style={styles.buttonPopup}
                                        onPress={() => {
                                            this.setState({
                                                visibleServe: false,
                                                visibleJanTV: false,
                                            });
                                            this.props.navigation.navigate(
                                                "ServeOther"
                                            );
                                        }}
                                    >
                                        <Block row>
                                            <Icon
                                                name="md-clipboard"
                                                family="Ionicon"
                                                size={30}
                                                color={"white"}
                                                style={{ marginRight: 5 }}
                                            />
                                            <Text
                                                style={styles.socialTextButtons}
                                            >
                                                Others
                                            </Text>
                                        </Block>
                                    </Button>
                                </ModalContent>
                            </Modal>
                        </Block>
                        <Block flex>
                            <Block center>
                                <Button
                                    center
                                    color="rgba(255, 177, 73, 1)"
                                    style={styles.button}
                                    onPress={() =>
                                        this.props.navigation.navigate("Event")
                                    }
                                >
                                    <Block row>
                                        <Icon
                                            name="md-home"
                                            family="Ionicon"
                                            size={30}
                                            color={"white"}
                                            style={{ marginRight: 5 }}
                                        />
                                        <Text style={styles.socialTextButtons}>
                                            INVITE
                                        </Text>
                                    </Block>
                                </Button>
                            </Block>
                        </Block>
                        <Block>
                            <Text
                                color="#4f3961"
                                size={25}
                                style={{ marginTop: 15, marginLeft: 15 }}
                            >
                                More
                            </Text>
                            <Text
                                color="#4f3961"
                                size={18}
                                style={{ marginLeft: 15 }}
                            >
                                Get onboard and receive insights
                            </Text>
                        </Block>
                        <Block center>
                            <Button
                                color="rgba(139, 204, 100, 1)"
                                style={styles.button}
                                onPress={() =>
                                    this.props.navigation.navigate("Parliament")
                                }
                            >
                                <Block row>
                                    <Icon
                                        name="ios-hand"
                                        family="Ionicon"
                                        size={25}
                                        color={"white"}
                                        style={{ marginRight: 5 }}
                                    />
                                    <Text style={styles.socialTextButtons}>
                                        Raise in Parliament
                                    </Text>
                                </Block>
                            </Button>
                        </Block>
                        <Block center>
                            <Button
                                color="rgba(7, 182, 220, 1)"
                                style={styles.button}
                                onPress={() =>
                                    this.props.navigation.navigate("Mplad")
                                }
                            >
                                <Block row>
                                    <Icon
                                        name="ios-barcode"
                                        family="Ionicon"
                                        size={25}
                                        color={"white"}
                                        style={{ marginRight: 5 }}
                                    />
                                    <Text style={styles.socialTextButtons}>
                                        MPLAD
                                    </Text>
                                </Block>
                            </Button>
                        </Block>
                        <Block center>
                            <Button
                                style={styles.button}
                                color="rgba(237, 116, 163, 1)"
                                onPress={() => {
                                    this.setState({
                                        visibleServe: false,
                                        visibleJanTV: true,
                                    });
                                }}
                            >
                                <Block row>
                                    <Icon
                                        name="md-tv"
                                        family="Ionicon"
                                        size={25}
                                        color={"white"}
                                        style={{ marginRight: 5 }}
                                    />
                                    <Text style={styles.socialTextButtons}>
                                        JAN TV
                                    </Text>
                                </Block>
                            </Button>
                        </Block>
                        <Modal
                            visible={this.state.visibleJanTV}
                            onTouchOutside={() => {
                                this.setState({
                                    visibleServe: false,
                                    visibleJanTV: false,
                                });
                            }}
                        >
                            <ModalContent>
                                <Button
                                    color="rgba(237, 116, 163, 1)"
                                    style={styles.buttonPopup}
                                    onPress={() => {
                                        this.setState({
                                            visibleServe: false,
                                            visibleJanTV: false,
                                        });
                                        this.props.navigation.navigate(
                                            "Loksabha"
                                        );
                                    }}
                                >
                                    <Block row>
                                        <Icon
                                            name="md-tv"
                                            family="Ionicon"
                                            size={30}
                                            color={"white"}
                                            style={{ marginRight: 5 }}
                                        />
                                        <Text style={styles.socialTextButtons}>
                                            Lok Sabha
                                        </Text>
                                    </Block>
                                </Button>
                                <Button
                                    color="rgba(237, 116, 163, 1)"
                                    style={styles.buttonPopup}
                                    onPress={() => {
                                        this.setState({
                                            visibleServe: false,
                                            visibleJanTV: false,
                                        });
                                        this.props.navigation.navigate(
                                            "Public"
                                        );
                                    }}
                                >
                                    <Block row>
                                        <Icon
                                            name="md-globe"
                                            family="Ionicon"
                                            size={30}
                                            color={"white"}
                                            style={{ marginRight: 5 }}
                                        />
                                        <Text style={styles.socialTextButtons}>
                                            Public
                                        </Text>
                                    </Block>
                                </Button>
                            </ModalContent>
                        </Modal>
                    </Block>
                </Block>
            </ScrollView>
        );
    }
}

class ActiveScreen extends React.Component {
    state = {
        refresh: 0,
    };

    componentDidMount() {
        if (this.state.refresh === 0) {
            this.setState({ refresh: 1 });
        } else {
            this.setState({ refresh: 0 });
        }
        console.log(this.state.refresh);
    }

    render() {
        const arrSuggestData = [];
        if (typeof global.dataForSuggest !== "undefined") {
            var k = 0;
            for (var i = 0; i < global.dataForSuggest.length; i++) {
                if (
                    Object.values(global.dataForSuggest[i])[0]["status"] ===
                    "open"
                ) {
                    arrSuggestData[k] =
                        "Ticket Number: " +
                        Object.values(global.dataForSuggest[i])[1];
                    k = k + 1;
                }
            }
        }

        const arrMedicalData = [];
        if (typeof global.dataForMedical !== "undefined") {
            for (var i = 0; i < global.dataForMedical.length; i++) {
                if (
                    Object.values(global.dataForMedical[i])[0]["status"] ===
                    "open"
                ) {
                    arrMedicalData[i] =
                        "Ticket Number: " +
                        Object.values(global.dataForOther[i])[1];
                }
            }
        }

        const arrExpData = [];
        if (typeof global.dataForExpatriates !== "undefined") {
            for (var i = 0; i < global.dataForExpatriates.length; i++) {
                if (
                    Object.values(global.dataForExpatriates[i])[0]["status"] ===
                    "open"
                ) {
                    arrExpData[i] =
                        "Ticket Number: " +
                        Object.values(global.dataForExpatriates[i])[1];
                }
            }
        }

        const arrOtherData = [];
        if (typeof global.dataForOther !== "undefined") {
            for (var i = 0; i < global.dataForOther.length; i++) {
                if (
                    Object.values(global.dataForOther[i])[0]["status"] ===
                    "open"
                ) {
                    arrOtherData[i] =
                        "Ticket Number: " +
                        Object.values(global.dataForOther[i])[1];
                }
            }
        }

        const arrEventData = [];
        if (typeof global.dataForEvent !== "undefined") {
            for (var i = 0; i < global.dataForEvent.length; i++) {
                if (
                    Object.values(global.dataForEvent[i])[0]["status"] ===
                    "open"
                ) {
                    arrEventData[i] =
                        "Ticket Number: " +
                        Object.values(global.dataForEvent[i])[1];
                }
            }
        }

        const arrParliamentData = [];
        if (typeof global.dataForParliament !== "undefined") {
            for (var i = 0; i < global.dataForParliament.length; i++) {
                if (
                    Object.values(global.dataForParliament[i])[0]["status"] ===
                    "open"
                ) {
                    arrParliamentData[i] =
                        "Ticket Number: " +
                        Object.values(global.dataForParliament[i])[1];
                }
            }
        }

        const DATA = [
            {
                title: "Bring to Attention",
                data: arrSuggestData,
            },
            {
                title: "Medical",
                data: arrMedicalData,
            },
            {
                title: "Expatriates",
                data: arrExpData,
            },
            {
                title: "Other",
                data: arrOtherData,
            },
            {
                title: "Invite",
                data: arrEventData,
            },
            {
                title: "Raise in Parliament",
                data: arrParliamentData,
            },
        ];

        function Item({ title }) {
            return (
                <View style={styles.item}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            );
        }

        return (
            <View>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item title={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
            </View>
        );
    }
}

class InProgressScreen extends React.Component {
    render() {
        const arrSuggestData = [];
        if (typeof global.dataForSuggest !== "undefined") {
            var k = 0;
            for (var i = 0; i < global.dataForSuggest.length; i++) {
                if (
                    Object.values(global.dataForSuggest[i])[0]["status"] ===
                    "inprogress"
                ) {
                    arrSuggestData[k] =
                        "Ticket Number: " +
                        Object.values(global.dataForSuggest[i])[1];
                    k = k + 1;
                }
            }
        }

        const arrMedicalData = [];
        if (typeof global.dataForMedical !== "undefined") {
            for (var i = 0; i < global.dataForMedical.length; i++) {
                if (
                    Object.values(global.dataForMedical[i])[0]["status"] ===
                    "inprogress"
                ) {
                    arrMedicalData[i] =
                        "Ticket Number: " +
                        Object.values(global.dataForOther[i])[1];
                }
            }
        }

        const arrExpData = [];
        if (typeof global.dataForExpatriates !== "undefined") {
            for (var i = 0; i < global.dataForExpatriates.length; i++) {
                if (
                    Object.values(global.dataForExpatriates[i])[0]["status"] ===
                    "inprogress"
                ) {
                    arrExpData[i] =
                        "Ticket Number: " +
                        Object.values(global.dataForExpatriates[i])[1];
                }
            }
        }

        const arrOtherData = [];
        if (typeof global.dataForOther !== "undefined") {
            for (var i = 0; i < global.dataForOther.length; i++) {
                if (
                    Object.values(global.dataForOther[i])[0]["status"] ===
                    "inprogress"
                ) {
                    arrOtherData[i] =
                        "Ticket Number: " +
                        Object.values(global.dataForOther[i])[1];
                }
            }
        }

        const arrEventData = [];
        if (typeof global.dataForEvent !== "undefined") {
            for (var i = 0; i < global.dataForEvent.length; i++) {
                if (
                    Object.values(global.dataForEvent[i])[0]["status"] ===
                    "inprogress"
                ) {
                    arrEventData[i] =
                        "Ticket Number: " +
                        Object.values(global.dataForEvent[i])[1];
                }
            }
        }

        const arrParliamentData = [];
        if (typeof global.dataForParliament !== "undefined") {
            for (var i = 0; i < global.dataForParliament.length; i++) {
                if (
                    Object.values(global.dataForParliament[i])[0]["status"] ===
                    "inprogress"
                ) {
                    arrParliamentData[i] =
                        "Ticket Number: " +
                        Object.values(global.dataForParliament[i])[1];
                }
            }
        }

        const DATA = [
            {
                title: "Bring to Attention",
                data: arrSuggestData,
            },
            {
                title: "Medical",
                data: arrMedicalData,
            },
            {
                title: "Expatriates",
                data: arrExpData,
            },
            {
                title: "Other",
                data: arrOtherData,
            },
            {
                title: "Invite",
                data: arrEventData,
            },
            {
                title: "Raise in Parliament",
                data: arrParliamentData,
            },
        ];

        function Item({ title }) {
            return (
                <View style={styles.item}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            );
        }

        return (
            <View>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item title={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
            </View>
        );
    }
}

class CompletedScreen extends React.Component {
    render() {
        const arrSuggestData = [];
        if (typeof global.dataForSuggest !== "undefined") {
            var k = 0;
            for (var i = 0; i < global.dataForSuggest.length; i++) {
                if (
                    Object.values(global.dataForSuggest[i])[0]["status"] ===
                    "close"
                ) {
                    arrSuggestData[k] =
                        "Ticket Number: " +
                        Object.values(global.dataForSuggest[i])[1];
                    k = k + 1;
                }
            }
        }

        const arrMedicalData = [];
        if (typeof global.dataForMedical !== "undefined") {
            for (var i = 0; i < global.dataForMedical.length; i++) {
                if (
                    Object.values(global.dataForMedical[i])[0]["status"] ===
                    "close"
                ) {
                    arrMedicalData[i] =
                        "Ticket Number: " +
                        Object.values(global.dataForOther[i])[1];
                }
            }
        }

        const arrExpData = [];
        if (typeof global.dataForExpatriates !== "undefined") {
            for (var i = 0; i < global.dataForExpatriates.length; i++) {
                if (
                    Object.values(global.dataForExpatriates[i])[0]["status"] ===
                    "close"
                ) {
                    arrExpData[i] =
                        "Ticket Number: " +
                        Object.values(global.dataForExpatriates[i])[1];
                }
            }
        }

        const arrOtherData = [];
        if (typeof global.dataForOther !== "undefined") {
            for (var i = 0; i < global.dataForOther.length; i++) {
                if (
                    Object.values(global.dataForOther[i])[0]["status"] ===
                    "close"
                ) {
                    arrOtherData[i] =
                        "Ticket Number: " +
                        Object.values(global.dataForOther[i])[1];
                }
            }
        }

        const arrEventData = [];
        if (typeof global.dataForEvent !== "undefined") {
            for (var i = 0; i < global.dataForEvent.length; i++) {
                if (
                    Object.values(global.dataForEvent[i])[0]["status"] ===
                    "close"
                ) {
                    arrEventData[i] =
                        "Ticket Number: " +
                        Object.values(global.dataForEvent[i])[1];
                }
            }
        }

        const arrParliamentData = [];
        if (typeof global.dataForParliament !== "undefined") {
            for (var i = 0; i < global.dataForParliament.length; i++) {
                if (
                    Object.values(global.dataForParliament[i])[0]["status"] ===
                    "close"
                ) {
                    arrParliamentData[i] =
                        "Ticket Number: " +
                        Object.values(global.dataForParliament[i])[1];
                }
            }
        }

        const DATA = [
            {
                title: "Bring to Attention",
                data: arrSuggestData,
            },
            {
                title: "Medical",
                data: arrMedicalData,
            },
            {
                title: "Expatriates",
                data: arrExpData,
            },
            {
                title: "Other",
                data: arrOtherData,
            },
            {
                title: "Invite",
                data: arrEventData,
            },
            {
                title: "Raise in Parliament",
                data: arrParliamentData,
            },
        ];

        function Item({ title }) {
            return (
                <View style={styles.item}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            );
        }

        return (
            <View>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item title={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
            </View>
        );
    }
}

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View
            style={{
                flexDirection: "row",
                borderTopWidth: 1,
                borderTopColor: "#DCDCDC",
            }}
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ["selected"] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            height: 50,
                        }}
                    >
                        <Icon
                            name={
                                label === "Home"
                                    ? "ios-home"
                                    : label === "Active"
                                    ? "ios-open"
                                    : label === "In Progress"
                                    ? "ios-book"
                                    : label === "Completed"
                                    ? "ios-cloud-done"
                                    : ""
                            }
                            family="Ionicon"
                            size={25}
                            color={isFocused ? "red" : "#888888"}
                            style={{ marginTop: 5 }}
                        />
                        <Text
                            style={{
                                color: isFocused ? "red" : "#888888",
                                fontSize: 12,
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

class Home extends React.Component {
    state = {
        userID: global.User.user.uid,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Active" component={ActiveScreen} />
                <Tab.Screen name="In Progress" component={InProgressScreen} />
                <Tab.Screen name="Completed" component={CompletedScreen} />
            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    home: {
        width: width,
        height: height,
        backgroundColor: "#fff2ff",
    },
    button: {
        height: 50,
        marginRight: 70,
        marginLeft: 70,
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: "#fff",
    },
    socialTextButtons: {
        fontSize: 16,
        color: "white",
        textAlignVertical: "center",
    },
    buttonPopup: {
        height: 50,
        width: 200,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: "#fff",
    },
    heading: {
        fontSize: 20,
    },
    tabBar: {
        flexDirection: "row",
        paddingTop: 10,
    },
    tabItem: {
        flex: 1,
        alignItems: "center",
        padding: 16,
    },
    item: {
        backgroundColor: "#fff",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 30,
        marginVertical: 2,
    },
    header: {
        fontSize: 17,
        backgroundColor: "#fff2ff",
        paddingLeft: 18,
        paddingTop: 5,
        paddingBottom: 5,
    },
    title: {
        fontSize: 14,
    },
});

export default Home;
