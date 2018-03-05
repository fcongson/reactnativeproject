import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.footerText} onPress={() => {}}>hello</Text>
        <Text style={styles.footerText} onPress={() => {}}>about</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  footerText: {
    textAlign: "center"
  }
});
