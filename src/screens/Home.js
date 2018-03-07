import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { TabNavigator } from "react-navigation";

import Hello from "../components/Hello";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Images from "../components/Images";
import Profile from "../components/Profile";

const Tabs = TabNavigator(
  {
    hello: { screen: Hello },
    images: { screen: Images },
    about: { screen: About },
    profile: { screen: Profile }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: "#000",
      style: {
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#eee"
      },
      labelStyle: {
        fontSize: 14,
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
      }
    }
  }
);

export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { screenProps } = this.props;
    const logout = () => navigate("Login");
    return (
      <View style={styles.container}>
        <Header />
        <Tabs
          screenProps={{
            email: screenProps.email,
            password: screenProps.password,
            logout: logout
          }}
        />
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
