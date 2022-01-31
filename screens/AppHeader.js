import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';


export default class AppHeader extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
      <Text style={styles.headerText}>The Cook Book</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    backgroundColor: "red",
    width: "100%",
    height: RFValue(85),
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: RFValue(40),
    color: "black",
    borderColor: "black",
    fontWeight: "bold"
  }
});
