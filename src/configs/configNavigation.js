import AddExpense from '../screens/AddExpense';
import AddAccount from '../screens/AddAccount';
import Accounts from '../screens/Accounts';
import Transaction from '../screens/Transaction';
import colors from './colors';
import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';

// Setting navigation 
export const AddExpenseNv=createStackNavigator({
    AddExpense:{
        screen:AddExpense,
        navigationOptions:()=>({
            title:'s',
            headerStyle: {
                backgroundColor: colors.colorHeader,
                height:30
              },
              
        })
    },
    Accounts:{
        screen:Accounts
    },
    AddAccount:{
        screen:AddAccount,
       
    }
}
)

export const AccountsNv=createStackNavigator({
    Accounts:{
        screen:Accounts
    }
})
export const Apps=createBottomTabNavigator({
    Tab1:{screen:Transaction},
    Tab2:{screen:AddExpenseNv}
   
   
  },{
    initalRouteName: 'Tab1',
  })
