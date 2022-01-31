import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from './AppHeader';
import BottomTabNavigator from '../navigation/BottomTabNavigator'

export default class DashBoardScreen extends Component {
  render() {
    return (
      <BottomTabNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  }
});
