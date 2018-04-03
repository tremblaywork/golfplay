import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import SimpleInputContainer from "../Component/InputContainer/SimpleInputContainer";

export default class PlusScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Plus</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: 30,
    backgroundColor: "#49143c"
  },
  closeButton: {
    position: "absolute",
    width: 30,
    height: 30,
    top: 50,
    right: 50,
    backgroundColor: "black"
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 20
  }
};
