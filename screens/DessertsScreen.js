import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import AppHeader from './AppHeader';

export default class DessertScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.recipeButton}
          onPress={() => {
            Linking.openURL(
              'https://sallysbakingaddiction.com/salted-caramel-apple-pie/'
            );
          }}>
          <Text style={styles.recipeButtonText}>Apple Pie</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.recipeButton}
          onPress={() => {
            Linking.openURL(
              'https://hebbarskitchen.com/homemade-butterscotch-icecream-recipe/'
            );
          }}>
          <Text style={styles.recipeButtonText}>Butterscotch Icecream</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.recipeButton}
          onPress={() => {
            Linking.openURL('https://sallysbakingaddiction.com/brownie-pie/');
          }}>
          <Text style={styles.recipeButtonText}>Brownie</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.recipeButton}
          onPress={() => {
            Linking.openURL(
              'https://sallysbakingaddiction.com/classic-cheesecake/'
            );
          }}>
          <Text style={styles.recipeButtonText}>Cheesecake</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            this.props.navigation.navigate('RecipeScreen');
          }}>
          <Text style={styles.recipeButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#5653D4',
  },
  recipeButton: {
    width: '75%',
    height: '75px',
    border: '5px 	black solid',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE828C',
  },
  recipeButtonText: {
    color: '#000080',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Button: {
    width: '75%',
    height: '75px',
    border: '5px 	black solid',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aqua',
  },
});
