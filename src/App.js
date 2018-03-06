import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";

import Login from "./screens/Login";
import Home from "./screens/Home";

const Screens = StackNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home }
  },
  {
    headerMode: "none",
    initialRouteName: "Login"
  }
);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Screens />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
