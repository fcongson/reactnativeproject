import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class About extends Component {
  render() {
    const { screenProps } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.about}>profile.</Text>
        <Text style={styles.description}>Hi.</Text>
        <Text style={styles.description}>
          email: {screenProps.email} // password: {screenProps.password}
        </Text>
        <Text style={styles.description} onPress={() => screenProps.logout()}>
          Bye.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  about: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  description: {
    fontSize: 12,
    textAlign: "center",
    margin: 10
  }
});
