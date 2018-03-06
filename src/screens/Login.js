import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions
} from "react-native";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.login}>PROJECT</Text>
          <TextInput
            style={styles.email}
            placeholder="email"
            onChangeText={() => {}}
            keyboardType="email-address"
            autoFocus={true}
          />
          <TextInput
            style={styles.password}
            placeholder="password"
            onChangeText={() => {}}
            secureTextEntry={true}
          />
          <View style={styles.button}>
            <Button onPress={() => navigate("Home")} title="login" />
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.description}>
            A project to learn the basics of React Native.
          </Text>
        </View>
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
  top: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  login: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  email: {
    borderWidth: 1,
    borderColor: "#eee",
    margin: 10,
    padding: 10,
    textAlign: "center",
    width: Dimensions.get("window").width / 2
  },
  password: {
    borderWidth: 1,
    borderColor: "#eee",
    margin: 10,
    padding: 10,
    textAlign: "center",
    width: Dimensions.get("window").width / 2
  },
  button: {
    backgroundColor: "#eee",
    margin: 10,
    width: Dimensions.get("window").width / 2
  },
  description: {
    fontSize: 12,
    textAlign: "center",
    width: Dimensions.get("window").width / 2
  }
});
