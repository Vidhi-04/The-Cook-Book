import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from './AppHeader';
import { RFValue } from 'react-native-responsive-fontsize'

export default class recipeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <View style={styles.categoriesContainer}>
          <TouchableOpacity
            style={styles.starterButton}
            onPress={() => {
              this.props.navigation.navigate('StarterScreen');
            }}>
            <Text style={styles.starterButtonText}>Starters</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mainCourseButton}
            onPress={() => {
              this.props.navigation.navigate('MainCourseScreen');
            }}>
            <Text style={styles.mainCourseButtonText}>Main Course</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drinksButton}
            onPress={() => {
              this.props.navigation.navigate('DrinksScreen');
            }}>
            <Text style={styles.drinksButtonText}>Drinks</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dessertButton}
            onPress={() => {
              this.props.navigation.navigate('DessertScreen');
            }}>
            <Text style={styles.dessertButtonText}>Dessert</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addRecipeButton}
            onPress={() => {
              this.props.navigation.navigate('AddRecipeScreen');
            }}>
            <Text style={styles.addRecipeButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#5653D4',
    //marginTop: 80,
  },
  starterButton: {
    width: RFValue(300),
    height: '10%',
    backgroundColor: 'pink',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  starterButtonText: {
    fontSize: RFValue(35),
    color: 'black',
  },
  mainCourseButton: {
   width: RFValue(300),
    height: '10%',
    backgroundColor: 'pink',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  mainCourseButtonText: {
    fontSize: RFValue(35),
    color: 'black',
  },
  drinksButton: {
    width: RFValue(300),
    height: '10%',
    backgroundColor: 'pink',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  drinksButtonText: {
    fontSize: RFValue(35),
    color: 'black',
  },
  dessertButton: {
    width: RFValue(300),
    height: '10%',
    backgroundColor: 'pink',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  dessertButtonText: {
    fontSize: RFValue(35),
    color: 'black',
  },
  addRecipeButton: {
    backgroundColor: 'pink',
    width: RFValue(70),
    height: RFValue(70),
    marginTop: RFValue(20),
    marginLeft: '80%',
    border: '2px black solid',
    borderRadius: '100%',
    justifyContent: 'center',
    //alignItems: "center"
  },
  addRecipeButtonText: {
    fontWeight: 'bold',
    fontSize: RFValue(50),
    margin: 'auto',
    marginTop: RFValue(-6),
  },
});
