import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  headerText: {
    textAlign: "center"
  }
});
