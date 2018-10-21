'use strict';

import React,{Component} from 'react';
import {Text,View,ListView,StatusBar,TouchableOpacity,Navigator,StyleSheet,FlatList} from 'react-native';
import { FormattedCurrency } from 'react-native-globalize';
import ExpenseListItem from '../components/ExpenseListItem';
const dummyExpenses = [
  { key:'1',date: '2016-10-24', amount: 500, payee: { name: 'Imbiss' }, account: { 'name': 'Bargeld' }, envelope: { name: 'Auswärts essen' } },
  { key:'2',date: '2016-10-22', amount: 1000, payee: { name: 'Restaurant' }, account: { 'name': 'Bargeld' }, envelope: { name: 'Auswärts essen' } },
  { key:'3',date: '2016-10-22', amount: 1297, payee: { name: 'Penny' }, account: { 'name': 'Bargeld' }, envelope: { name: 'Supermarkt' } },
];

class ExpenseListScreen extends Component{
	constructor(props){
		super(props)
		
	}

	render(){
		return(
			<View style={ styles.expenseList }>
			<StatusBar />
			<View style={ styles.statusBarBackground } />
			<FlatList
  				data={dummyExpenses}
  				renderItem={({item}) => 
  		
  					<ExpenseListItem expense={item}/>
  				}
  				
			/>
			</View>
			)
	}
	
}

const styles = StyleSheet.create({

  expenseList: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  },

  statusBarBackground: {
    height: 20,
  },

  expenseRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    height: 20,
    marginLeft: 8,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },

  expenseRowPayee: {
    fontWeight: 'bold'
  },

  expenseRowAmount: {
    flex: 1,
    textAlign: "right",
    paddingRight: 8,
    fontWeight: 'bold',
  }

})
module.exports=ExpenseListScreen