import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.footerText}>footer</Text>
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
    borderTopColor: "#eee"
  },
  footerText: {
    textAlign: "center"
  }
});
