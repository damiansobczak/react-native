import React, { Component } from "react";
import { Image, StyleSheet, View, Text } from "react-native";

export default class Item extends Component {
  render() {
    return (
      <View style={styles.item}>
        {this.props.status === "active" ? <Image source={require("../assets/images/icon-circle.png")} /> : <Image source={require("../assets/images/icon-circle-checked.png")} />}
        <Text style={this.props.status === "active" ? styles.name : styles.nameIsDone}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16
  },
  nameIsDone: {
    opacity: 0.5,
    marginLeft: 8,
    textDecorationLine: "line-through"
  },
  name: {
    marginLeft: 8
  }
});
