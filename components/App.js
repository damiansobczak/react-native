import React, { Component, StrictMode } from "react";
import { StyleSheet, Text, View, Image, Alert, TouchableWithoutFeedback, TextInput } from "react-native";
import Sumup from "./Sumup";
import Item from "./Item";
import Items from "../items";

export default class App extends Component {
  state = {
    items: Items,
    input: false
  };

  getActiveItems = () => {
    let counter = 0;
    if (this.state.items) {
      const activeItems = this.state.items.forEach(item => {
        item.status === "active" ? counter++ : counter;
      });
    }
    return counter;
  };

  addItem = text => {
    const items = this.state.items;
    const date = Date.now();
    if (text.trim() !== "") {
      items.push({ id: date, name: `${text}`, image: null, status: "active" });
      this.setState({ items });
    }
    this.toggleInput();
  };

  toggleInput = () => {
    let input = this.state.input;
    input = !input;
    this.setState({ input });
  };

  checkItem = id => {
    const items = this.state.items;
    const itemIndex = items.findIndex(item => {
      return item.id === id;
    });
    if (itemIndex !== undefined) {
      items[itemIndex].status === "active" ? (items[itemIndex].status = "done") : (items[itemIndex].status = "active");
      this.setState({ items });
    }
  };

  clearAllItems = () => {
    const items = [];
    this.setState({ items });
  };

  render() {
    const sumupItems = this.getActiveItems();
    return (
      <StrictMode>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={require("../assets/images/backgroundLarge.png")} style={styles.background} />
            <Text style={styles.subtitle}>Zaczynajmy!</Text>
            <Text style={styles.title}>Lista zakupów</Text>
            <View style={styles.list}>
              {this.state.items.length > 0 ? this.state.items.map((item, index) => <Item name={item.name} image={item.image} status={item.status} key={item.id} id={item.id} checkItem={this.checkItem} />) : <Text style={styles.emptyList}>Lista jest pusta</Text>}
              {this.state.input === true ? <TextInput editable={true} maxLength={80} placeholder="Dodaj" onSubmitEditing={event => this.addItem(event.nativeEvent.text)} /> : <View />}
              <TouchableWithoutFeedback onPress={this.toggleInput}>
                <View style={styles.touchableInput} />
              </TouchableWithoutFeedback>
            </View>
          </View>
          {this.state.items.length > 0 ? (
            <TouchableWithoutFeedback onPress={this.clearAllItems}>
              <Text style={styles.clear}>Wyczyść wszystko</Text>
            </TouchableWithoutFeedback>
          ) : (
            <View />
          )}
          <Sumup items={sumupItems} />
        </View>
      </StrictMode>
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
  clear: {
    color: "#9FA2AA",
    marginBottom: 16
  },
  list: {
    width: 300,
    display: "flex",
    marginTop: 32,
    flex: 1
  },
  touchableInput: {
    flex: 1
  },
  emptyList: {
    paddingBottom: 8,
    color: "#9FA2AA"
  }
});
