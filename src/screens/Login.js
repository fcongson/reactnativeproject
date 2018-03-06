import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
  ImageBackground
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
      <ImageBackground
        source={{ uri: "https://source.unsplash.com/WKVGmz7o0O4/1500x1500" }}
        style={styles.background}
        imageStyle={{
          resizeMode: "cover"
        }}
      >
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
              <Button
                onPress={() => navigate("Home")}
                title="login"
                color="#fff"
              />
            </View>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.description}>
              A project to learn the basics of React Native.
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  top: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  login: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  email: {
    borderWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    textAlign: "center",
    width: Dimensions.get("window").width / 2
  },
  password: {
    borderWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    textAlign: "center",
    width: Dimensions.get("window").width / 2
  },
  button: {
    backgroundColor: "darkgrey",
    margin: 10,
    width: Dimensions.get("window").width / 2
  },
  description: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
    width: Dimensions.get("window").width / 2
  }
});
