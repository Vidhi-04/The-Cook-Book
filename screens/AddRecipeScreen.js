import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AppHeader from './AppHeader';
import DropDownPicker from 'react-native-dropdown-picker';

export default class AddRecipe extends Component {
  constructor() {
    super();
    this.state = {
      previewCategory: 'Starter',
      dropdownHeight: 40,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <TextInput
          style={styles.recipeNameInput}
          placeholder={'Recipe Name '}
          placeholderTextColor={'white'}
        />
        <TextInput
          style={styles.recipeNameInput}
          placeholder={'Recipe Link '}
          placeholderTextColor={'white'}
        />
        <View style={styles.dropDownView}>
          <DropDownPicker
            items={[
              
              { label: 'Starters',value:'item1' },
              { label: 'Main Course',value:'item2' },
              { label: 'Drinks', value:'item3' },
              { label: 'Desserts', value:'item4' },
            ]}
            defaultValue={this.state.previewCategory}
            containerStyle={{ height: 40, borderRadius: 10, marginTop: 10 }}
            onOpen={() => {
              this.setState({ dropdownHeight: 160 });
            }}
            onClose={() => {
              this.setState({ dropdownHeight: 40 });
            }}
            style={{ backgroundColor: 'transparent' }}
            itemStyle={{ justifyContent: 'flex-start' }}
            dropDownStyle={{ backgroundColor: '#5653D4' }}
            labelStyle={{ color: 'white' }}
            arrowStyle={{ color: 'white' }}
            onChangeItem={(item) => {
              this.setState({ previewCategory: item.value });
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#5653D4',
  },
  recipeNameInput: {
    width: '85%',
    border: '5px black solid',
    height: '8%',
    marginTop: '30px',
    paddingLeft: '5px',
    fontSize: 21,
    color: 'black',
    fontWeight: 'bold',
  },
});
