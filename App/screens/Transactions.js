import React, { Component } from 'react';
import { View, Text,StyleSheet,FlatList } from 'react-native';

import ExpenseItemComponent from '../components/ExpenseItemComponent';
import HeaderComponent from '../components/HeaderComponent';
import realm from '../databases/allSchemas';
import {getExpenseFromAccount} from '../databases/allSchemas';
const TotalExpenseElement= ({
	
}) => (
	<View style={styles.container}>
		<View style={styles.rowContainer}> 
			<Text style={styles.textLeft}>Opening balance</Text>
			<Text style={styles.textRight}>+ 500</Text>
		</View>
		<View style={styles.rowContainer}>
			<Text style={styles.textLeft}>Ending balance</Text>
			<Text style={[styles.textRight,{borderBottomWidth:1}]}>+ 500</Text>

		</View>
		<View style={styles.rowContainer}>	
			<Text style={styles.textRight}> 500000</Text>
		</View>
	  </View>
);

export default class TransactionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expense:[],
		};
		this.reloadData();
		realm.addListener('change', () => {
				this.reloadData();
		});
  }
	reloadData = () => {
		
	}
  render() {
    return (
      <View style={styles.containerAll}>
      
        <TotalExpenseElement/>
        <FlatList data={this.state.expense}
        renderItem={({item,index})=>{
          return(
            <ExpenseItemComponent payee={item.payee} category={item.category} amount={item.amount} />
          )
        }}
				keyExtractor={item=>item.payee}>
        </FlatList>
			
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container:{
    flexDirection: 'column',
    

	},
	rowContainer:{
		flexDirection: 'row',
	},
	textRight:{
		flex:1,textAlign:'right', marginRight:10
	},
	textLeft:{
		flex:1,

	},
	rowLine:{
		alignItems:'flex-end',
		borderBottomWidth:1,
		flex:0.5
	},
	containerAll:{
		
    
    flexDirection:'column',
	}
}) 