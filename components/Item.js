import React, { Component } from "react";
import { Image, StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import PropTypes from "prop-types";

export default class Item extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.checkItem(this.props.id);
        }}>
        <View style={styles.item}>
          {this.props.status === "active" ? <Image source={require("../assets/images/icon-circle.png")} /> : <Image source={require("../assets/images/icon-circle-checked.png")} />}
          <Text style={this.props.status === "active" ? styles.name : styles.nameIsDone}>{this.props.name}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  status: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  checkItem: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22
  },
  nameIsDone: {
    opacity: 0.5,
    marginLeft: 8,
    fontSize: 16,
    textDecorationLine: "line-through"
  },
  name: {
    marginLeft: 8,
    fontSize: 16
  }
});
