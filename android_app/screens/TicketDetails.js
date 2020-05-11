import React from "react";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { Block, Text, theme } from "galio-framework";

class TicketDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: "",
        };
    }

    componentDidMount() {
        var ticketNumber = this.props.route.params.title.split(" ")[2];

        if (typeof global.dataForSuggest !== "undefined") {
            for (var i = 0; i < global.dataForSuggest.length; i++) {
                if (
                    global.dataForSuggest[i].ticketNumber ===
                    parseInt(ticketNumber.trim())
                ) {
                    this.setState({ data: global.dataForSuggest[i] });
                }
            }
        }

        if (typeof global.dataForMedical !== "undefined") {
            for (var i = 0; i < global.dataForMedical.length; i++) {
                if (
                    global.dataForMedical[i].ticketNumber ===
                    parseInt(ticketNumber.trim())
                ) {
                    this.setState({ data: global.dataForMedical[i] });
                }
            }
        }

        if (typeof global.dataForExpatriates !== "undefined") {
            for (var i = 0; i < global.dataForExpatriates.length; i++) {
                if (
                    global.dataForExpatriates[i].ticketNumber ===
                    parseInt(ticketNumber.trim())
                ) {
                    this.setState({ data: global.dataForExpatriates[i] });
                }
            }
        }

        if (typeof global.dataForOther !== "undefined") {
            for (var i = 0; i < global.dataForOther.length; i++) {
                if (
                    global.dataForOther[i].ticketNumber ===
                    parseInt(ticketNumber.trim())
                ) {
                    this.setState({ data: global.dataForOther[i] });
                }
            }
        }

        if (typeof global.dataForEvent !== "undefined") {
            for (var i = 0; i < global.dataForEvent.length; i++) {
                if (
                    global.dataForEvent[i].ticketNumber ===
                    parseInt(ticketNumber.trim())
                ) {
                    this.setState({ data: global.dataForEvent[i] });
                }
            }
        }

        if (typeof global.dataForParliament !== "undefined") {
            for (var i = 0; i < global.dataForParliament.length; i++) {
                if (
                    global.dataForParliament[i].ticketNumber ===
                    parseInt(ticketNumber.trim())
                ) {
                    this.setState({ data: global.dataForParliament[i] });
                }
            }
        }
    }

    render() {
        return (
            <Block flex style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Block flex>
                    <Block style={styles.padded}>
                        <Block>
                            <Text
                                size={14}
                                color="rgba(0,0,0,1)"
                                style={{ marginTop: 10 }}
                            >
                                {this.props.route.params.title + "\n\n"}
                                {JSON.stringify(this.state.data)}
                            </Text>
                        </Block>
                    </Block>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff2ff",
    },
    padded: {
        paddingHorizontal: theme.SIZES.BASE,
        paddingBottom: 20,
    },
});

export default TicketDetails;
