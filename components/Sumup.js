import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Sumup extends Component {
  render() {
    return (
      <View style={styles.sumup}>
        <Text style={styles.title}>Do kupienia</Text>
        <Text style={styles.counter}>{this.props.items} produkty</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sumup: {
    display: "flex",
    alignItems: "center",
    width: 300,
    borderTopWidth: 1,
    borderColor: "#EAEAEC",
    paddingTop: 16
  },
  title: {
    color: "#343434",
    marginBottom: 8
  },
  counter: {
    color: "#5C54FF",
    fontWeight: "bold",
    backgroundColor: "#EFEFFE",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 4,
    overflow: "hidden"
  }
});