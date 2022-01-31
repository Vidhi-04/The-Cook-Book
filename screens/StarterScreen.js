import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import AppHeader from './AppHeader';

export default class StarterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.recipeButton}
          onPress={() => {
            Linking.openURL(
              'https://hebbarskitchen.com/ginger-garlic-veg-soup-recipe/'
            );
          }}>
          <Text style={styles.recipeButtonText}>Ginger Garlic Soup</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.recipeButton}
          onPress={() => {
            Linking.openURL(
              'https://hebbarskitchen.com/veg-dry-cabbage-manchurian-recipe/'
            );
          }}>
          <Text style={styles.recipeButtonText}>Veg Manchurian</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.recipeButton}
          onPress={() => {
            Linking.openURL(
              'https://hebbarskitchen.com/restaurant-style-chilli-paneer-recipe/'
            );
          }}>
          <Text style={styles.recipeButtonText}>Chilli Paneer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.recipeButton}
          onPress={() => {
            Linking.openURL(
              'https://hebbarskitchen.com/crispy-veg-starter-recipe-veg-crispy/'
            );
          }}>
          <Text style={styles.recipeButtonText}>Crispy Veg</Text>
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
