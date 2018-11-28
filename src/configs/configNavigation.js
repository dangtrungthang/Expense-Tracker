import AddExpense from '../screens/AddExpense';
import AddAccount from '../screens/AddAccount';
import Accounts from '../screens/Accounts';
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
    }
}
)
export const AddAccountNv=createStackNavigator({
    AddAccount:{
        screen:AddAccount,
       
    }
})
export const AccountsNv=createStackNavigator({
    Accounts:{
        screen:Accounts
    }
})
export const Apps=createBottomTabNavigator({
    Tab1:{screen:AddExpenseNv},
    Tab2:{screen:AddAccountNv},
   
  },{
    initalRouteName: 'Tab1',
  })
