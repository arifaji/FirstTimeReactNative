import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Constants } from 'expo';

import { Card } from 'react-native-paper';
import { TabNavigator } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import AssetExample from './components/AssetExample';
import MyText from './components/MyText';
import FirstScreen from './tabs/FirstScreen';
import SecondScreen from './tabs/SecondScreen';

// var MainScreenNavigator = TabNavigator({
//   Tab1: {screen:FirstScreen},
//   Tab2: {screen: SecondScreen}
// });

// MainScreenNavigator.navigatorOptions = {
//   title: "Tab examle"
// };
export default class App extends React.Component {
  state = {
    firstName: '',
    lastName: ''
 }
 handleFirstName = (text) => {
    this.setState({ firstName: text })
 }
 handleLastName = (text) => {
    this.setState({ lastName: text })
 }
 combine = (firstName, lastName) => {
    alert('email: ' + firstName + ' password: ' + lastName)
 }
  render() {
    return (
      <KeyboardAwareScrollView
      style={{ backgroundColor: '#4c69a5' }}
      resetScrollToCoords={{ x: 50, y: 50 }}
      contentContainerStyle={styles.container}
      
    >
    <KeyboardAvoidingView behavior="padding" enabled>
      {/* <ScrollView style={styles.container} contentContainerStyle={styles.wrapper}> */}
      <ScrollView style={{flex: 1}}>
      
        <Text style={styles.paragraph}>Open up App.js to start working on your appsa!</Text>

        <Card>
          <MyText />
          
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "First Name"
               onChangeText = {this.handleFirstName}/>
           <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Last Name"
               onChangeText = {this.handleLastName}/>
          <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.combine(this.state.firstName, this.state.lastName)
               }>
               <Text style = {styles.submitButtonText}> Check Fullname </Text>
            </TouchableOpacity>
           <Text style={styles.paragraph}>{this.state.firstName} {this.state.lastName}</Text>
         
          </Card>
         
          <Card>
          <AssetExample />
          <AssetExample />
          <AssetExample />
          <AssetExample />
          <AssetExample />
        </Card>
        <Card>
          <AssetExample />
        </Card>
        
      </ScrollView>
      </KeyboardAvoidingView>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   // justifyContent: 'center',
  //   paddingTop: Constants.statusBarHeight,
  //   backgroundColor: '#ecf0f1',
  //   padding: 8,
  // },
  wrapper:{
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1,
      textAlign: 'center',
   },
   submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText: {
  textAlign: 'center',
 },
});

