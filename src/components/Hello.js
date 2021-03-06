import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>hello.</Text>
        <View style={styles.button}>
          <Button
            onPress={() => {
              this.setState({ clicks: this.state.clicks + 1 });
            }}
            title="button"
            color="#fff"
          />
        </View>
        <Text style={styles.clicks}>{this.state.clicks} clicks</Text>
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
  hello: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  button: {
    backgroundColor: "darkgrey",
    margin: 10
  },
  clicks: {
    fontSize: 12,
    textAlign: "center",
    margin: 10
  }
});
