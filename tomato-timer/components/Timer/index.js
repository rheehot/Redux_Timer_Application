import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

class Timer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"} />
                <View style={styles.upper}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    <Button
                        iconName="play-circle"
                        onPress={() => alert("It works")}
                    />
                    <Button
                        iconName="stop-circle"
                        onPress={() => alert("It works")}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CE0B24"
    },
    upper: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    lower: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    time: {
        color: "#FFFFFF",
        fontSize: 120,
        fontWeight: "100"
    }
});

export default Timer;
