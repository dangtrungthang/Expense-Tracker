import AddExpense from '../screens/AddExpense';
import AddAccount from '../screens/AddAccount';
import Accounts from '../screens/Accounts';
import Transaction from '../screens/Transaction';
import Category from '../screens/Category';
import AddCategory from '../screens/AddCategory';
import colors from './colors';
import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';

// Setting navigation 
export const AddExpenseNv=createStackNavigator({
    AddExpense:{
        screen:AddExpense,
        
    },
    Accounts:{
        screen:Accounts,
    },
    AddAccount:{
        screen:AddAccount,
       
    },
    Category:{
        screen:Category
    },
    AddCategory:{
        screen:AddCategory
    }
   
}
)

export const AccountsNv=createStackNavigator({
    Accounts:{
        screen:Accounts
    }
})
export const Apps=createBottomTabNavigator({
     Tab2:{screen:AddExpenseNv},
    Tab1:{screen:Transaction},
   

   
   
  },{
    initalRouteName: 'Tab1',
  })
