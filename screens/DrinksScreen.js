import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import AppHeader from './AppHeader';

export default class DrinksScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.recipeButton}
          onPress={() => {
            Linking.openURL(
              'https://hebbarskitchen.com/watermelon-juice-recipe-tarbooz-ka-juice/'
            );
          }}>
          <Text style={styles.recipeButtonText}>Watermelon Juice</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.recipeButton}
          onPress={() => {
            Linking.openURL(
              'https://hebbarskitchen.com/avocado-banana-smoothie-recipe/'
            );
          }}>
          <Text style={styles.recipeButtonText}>Avocado Smoothie</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.recipeButton}
          onPress={() => {
            Linking.openURL(
              'https://hebbarskitchen.com/nimbu-paani-recipe-limbu-nimbu-sharbat/'
            );
          }}>
          <Text style={styles.recipeButtonText}>Lemonade</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.recipeButton}
          onPress={() => {
            Linking.openURL(
              'https://hebbarskitchen.com/grape-juice-recipe-grapefruit-juice//'
            );
          }}>
          <Text style={styles.recipeButtonText}>Grape Juice</Text>
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
