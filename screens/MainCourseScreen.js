import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import AppHeader from './AppHeader';

export default class MainCourseScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.recipeButton}
          onPress={() => {
            Linking.openURL(
              'https://hebbarskitchen.com/chana-masala-powder-recipe-chole-masala/'
            );
          }}>
          <Text style={styles.recipeButtonText}>Chana Masala</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.recipeButton}
          onPress={() => {
            Linking.openURL(
              'https://hebbarskitchen.com/punjabi-dal-makhani-recipe/'
            );
          }}>
          <Text style={styles.recipeButtonText}>Dal Makhani</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.recipeButton}
          onPress={() => {
            Linking.openURL(
              'https://hebbarskitchen.com/paneer-butter-masala-recipe/'
            );
          }}>
          <Text style={styles.recipeButtonText}>P.B.M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.recipeButton}
          onPress={() => {
            Linking.openURL(
              'https://hebbarskitchen.com/schezwan-fried-rice-recipe-schezwan-rice/'
            );
          }}>
          <Text style={styles.recipeButtonText}>Fried Rice</Text>
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
