import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import Hello from "./components/Hello";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Hello />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
