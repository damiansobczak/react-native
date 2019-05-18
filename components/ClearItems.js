import React, { Component } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import PropTypes from "prop-types";

export default class ClearItems extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.clear}>
        <Text style={styles.clear}>Wyczyść wszystko</Text>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  clear: {
    color: "#9FA2AA",
    marginBottom: 16,
    fontSize: 16
  }
});

ClearItems.propTypes = {
  clear: PropTypes.func.isRequired
};
