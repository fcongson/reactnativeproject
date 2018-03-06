import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { TabNavigator } from "react-navigation";

import Hello from "../components/Hello";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Images from "../components/Images";

const Tabs = TabNavigator(
  {
    hello: { screen: Hello },
    about: { screen: About },
    images: { screen: Images }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#eee",
        paddingBottom: 15
      },
      labelStyle: {
        fontSize: 14
      }
    }
  }
);

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Tabs />
        {/* <Footer /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
