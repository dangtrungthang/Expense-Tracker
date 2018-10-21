/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,StatusBar,TouchableOpacity,FlatList,
  Dimensions,TouchableHighlight,
  Image} from 'react-native';
//import {StackNavigator} from 'react-navigation';
import { FormattedDate } from 'react-native-globalize';
//import ExpenseListItem from './App/components/ExpenseListItem';
import ExpenseListScreen from './App/screen/ExpenseListScreen';
import {createBottomTabNavigator} from 'react-navigation';
import AddTransactionScreen from './App/screen/AddTransactionScreen';

let routeConfigs={
  ExpenseListScreen:{
    screen:ExpenseListScreen,title:'Hello',
    
  },
  AddTransactionScreen:{
  screen:AddTransactionScreen,}
}
let tabNavigatorConfig={

}
const App=createBottomTabNavigator(routeConfigs,tabNavigatorConfig);
module.exports=App