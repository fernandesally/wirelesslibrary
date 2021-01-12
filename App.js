import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Search from './screens/search';
import Transaction from './screens/transaction';
import {createAppContainer} from 'react-navigation'
export default class App extends React.Component {
  render(){
  return (
    <View style={{flex:1}}>
   <Appcontainer/>
   </View>
  );
  }
}
const bottomtab = createBottomTabNavigator({
 search:{screen:Search},
  transaction:{screen:Transaction}
})

const Appcontainer=createAppContainer(bottomtab)
