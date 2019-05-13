import React from "react";
import { StyleSheet, Image, Text } from "react-native";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <React.Fragment>
      <Image source={require("../assets/images/backgroundLarge.png")} style={styles.background} />
      <Text style={styles.subtitle}>{props.title}</Text>
      <Text style={styles.title}>{props.subtitle}</Text>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  background: {
    display: "flex"
  },
  subtitle: {
    color: "#9FA2AA",
    fontSize: 18
  },
  title: {
    fontSize: 26,
    fontWeight: "bold"
  }
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};
