import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
//import local file
import TransactionScreen from './App/screens/Transactions';
import AddTransactionScreen from './App/screens/AddTransactions';
import AddAccountScreen from './App/screens/AddAccount';
const App=createBottomTabNavigator({
	AddTransactionScreen:{
		screen:AddTransactionScreen
	},
	TransactionScreen:{
		screen:TransactionScreen
	},
	AddAccountScreen:{
		screen:AddAccountScreen
	}
	
})

export default App;
