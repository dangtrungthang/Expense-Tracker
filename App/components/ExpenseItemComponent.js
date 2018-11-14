import React from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
import PropTypes from 'prop-types';
const ExpenseItemComponent = ({
    
    amount,
    category,
    payee,
    account,
    iconURL,
    
   
}) => (
    <View style={styles.container}>
    <Image  style ={{width: 30, height: 30}}source={require('../icons/category/expense/restaurants.png')}/>
        <View style={styles.title}>
            <Text style={styles.textCategory}>{payee}</Text>
            <Text>{category}</Text>
          
        </View>
        <View style={styles.textAmount}>
            <Text>{amount}</Text>
        </View>
    </View>
);
ExpenseItemComponent.propTypes={
    expense:PropTypes.object,
    category:PropTypes.string,
    payee:PropTypes.string,
    account:PropTypes.string,
    amount:PropTypes.string,
}
const styles = StyleSheet.create({
    container:{
       
        padding: 15,
        flexDirection: 'row',
        
    },
    title:{
        flexDirection:'column',
        marginLeft:10,
    },
    textCategory:{
        fontWeight: 'bold',
    },
    textAmount:{
      
      justifyContent:'center',
      alignItems:'flex-end',
      flex:1,
    }
});
export default ExpenseItemComponent;
