import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Sumup from "./Sumup";
import Item from "./Item";
import Items from "../items";

export default class App extends Component {
  state = {
    items: Items
  };

  getActiveItems = () => {
    let counter = 0;
    const activeItems = this.state.items.forEach(item => {
      if (item.status === "active") {
        counter++;
      }
    });
    return counter;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("../assets/images/backgroundLarge.png")} style={styles.background} />
          <Text style={styles.subtitle}>Zaczynajmy!</Text>
          <Text style={styles.title}>Lista zakupów</Text>
          <View style={styles.list}>
            {this.state.items.map((item, index) => (
              <Item name={item.name} image={item.image} status={item.status} key={index} />
            ))}
          </View>
        </View>
        <Sumup items={this.getActiveItems()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    padding: 50
  },
  header: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    paddingTop: 40
  },
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
  },
  list: {
    width: 300,
    display: "flex",
    marginTop: 32
  }
});
