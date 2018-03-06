import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image
} from "react-native";

export default class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        { id: 0, image: "https://source.unsplash.com/8v9DuOrLu2I/1000x1000" },
        { id: 1, image: "https://source.unsplash.com/enkRFHbOEE0/1000x1000" },
        { id: 2, image: "https://source.unsplash.com/W4wZRBZl7SI/1000x1000" },
        { id: 3, image: "https://source.unsplash.com/ZA727EMMtLA/1000x1000" }
      ]
    };
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.about}>images.</Text>
          <Text style={styles.description}>Images from Unsplash.</Text>
          {this.state.images.map(image => {
            return (
              <View key={image.id} style={styles.imageContainer}>
                <Image
                  source={{ uri: image.image }}
                  style={{
                    width:
                      Math.min(
                        Dimensions.get("window").width,
                        Dimensions.get("window").height
                      ) - 20,
                    height:
                      Math.min(
                        Dimensions.get("window").width,
                        Dimensions.get("window").height
                      ) - 20
                  }}
                />
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
    height:
      Math.min(
        Dimensions.get("window").width,
        Dimensions.get("window").height
      ) - 20,
    width:
      Math.min(
        Dimensions.get("window").width,
        Dimensions.get("window").height
      ) - 20,
    justifyContent: "center",
    alignItems: "center"
  }
});
