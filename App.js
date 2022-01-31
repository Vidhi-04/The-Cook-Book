import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RecipeScreen from './screens/RecipeScreen'
import AppContainer from './navigation/SwitchNavigator'

export default class App extends Component {
  render(){
    return(
      <AppContainer/>
    );
  }
}