import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import RecipeScreen from '../screens/RecipeScreen';
import AddRecipeScreen from '../screens/AddRecipeScreen';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          barStyle={styles.barStyle}
          activeColor={'pink'}
          inactiveColor={'white'}>
          <Tab.Screen name="Recipe Screen" component={RecipeScreen} />
          <Tab.Screen name="Add Recipe" component={AddRecipeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: 'pink',
  },
});
