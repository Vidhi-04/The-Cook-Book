import * as React from "react";
import StarterScreen from '../screens/StarterScreen'
import MainCourseScreen from '../screens/MainCourseScreen'
import DrinksScreen from '../screens/DrinksScreen'
import DessertScreen from '../screens/DessertsScreen'
import RecipeScreen from '../screens/RecipeScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation' 
import DashBoardScreen from '../screens/DashBoardScreen'
import Constants from "expo-constants"
import {View} from 'react-native'
import AddRecipeScreen from '../screens/AddRecipeScreen'

var AppNavigator = createSwitchNavigator({
  RecipeScreen: RecipeScreen,
  AddRecipeScreen: AddRecipeScreen,
  MainCourseScreen: MainCourseScreen,
  DrinksScreen: DrinksScreen,
  DessertScreen: DessertScreen,
  StarterScreen: StarterScreen,
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer