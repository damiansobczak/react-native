import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import PropTypes from "prop-types";

export default class Sumup extends Component {
  render() {
    return (
      <View style={styles.sumup}>
        <Text style={styles.title}>Do kupienia</Text>
        <Text style={styles.counter}>
          {this.props.items} {this.props.items > 0 && this.props.items < 5 ? `produkty` : `produktów`}
        </Text>
      </View>
    );
  }
}

Sumup.propTypes = {
  items: PropTypes.number.isRequired
};

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
