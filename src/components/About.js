import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.about}>about.</Text>
        <Text style={styles.description}>
          Learn the basics of React Native.
        </Text>
        <Text style={styles.description}>
          Click the button. I'll keep count.
        </Text>
        <Text style={styles.description}>
          Look at some photos.
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
