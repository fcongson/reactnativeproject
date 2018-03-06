import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

export default class Images extends Component {
  render() {
    const images = ["one", "two", "three", "four"];

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.about}>images.</Text>
          <Text style={styles.description}>Currently adding images.</Text>
          {images.map(image => {
            return (
              <View key={image} style={styles.imageContainer}>
                <Text>{image}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
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
  },
  imageContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#eee",
    margin: 10,
    height: Dimensions.get("window").width - 20,
    width: Dimensions.get("window").width - 20,
    justifyContent: "center",
    alignItems: "center"
  }
});
