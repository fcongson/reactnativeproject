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
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    const setAuth = (email, password) => {
      this.setState({ email, password });
    };
    return (
      <View style={styles.container}>
        <Screens
          screenProps={{
            email: this.state.email,
            password: this.state.password,
            setAuth: setAuth
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
