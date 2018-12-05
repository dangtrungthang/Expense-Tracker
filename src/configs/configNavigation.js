import AddExpense from '../screens/AddExpense';
import AddAccount from '../screens/AddAccount';
import Accounts from '../screens/Accounts';
import Transaction from '../screens/Transaction';
import Category from '../screens/Category';
import AddCategory from '../screens/AddCategory';
import {Image,StyleSheet} from 'react-native'
import React from 'react'
import colors from './colors';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

// Setting navigation 
export const AddExpenseNv = createStackNavigator({
    AddExpense: {
        screen: AddExpense,

    },
    Accounts: {
        screen: Accounts,
    },
    AddAccount: {
        screen: AddAccount,

    },
    Category: {
        screen: Category
    },
    AddCategory: {
        screen: AddCategory
    },


}
)

export const AccountsNv = createStackNavigator({
    Accounts: {
        screen: Accounts
    }
})
export const TransactionNV = createStackNavigator({
    Transaction: {
        screen: Transaction,
        
    },
    Accounts: {
        screen: Accounts,
    },
})
export const Apps = createBottomTabNavigator({
    Tab1: {
        screen: TransactionNV,
        
        navigationOptions: () => ({
            title:'Sổ giao dịch',           
            tabBarIcon:({tintColor})=> <Image source={require('../asset/icon/wallet.png')} 
            style={[styles.icon,{tintColor:tintColor}]}/>,
            tabBarOptions:{
                // activeTintColor: '#e91e63',
            }
        })

    },
    Tab2: { screen: AddExpenseNv },



}, {
        initalRouteName: 'Tab1',
    })

    
   const styles = StyleSheet.create({
       icon:{
           width:24,
           height:24
       }
   })