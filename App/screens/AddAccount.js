import React, { Component } from 'react';
import { View, Text,TouchableOpacity,FlatList,Picker} from 'react-native';
import DatePickerComponent from '../components/DatePickerComponent';
import {stylesADD} from '../styles/stylesADD';
import HeaderComponent from '../components/HeaderComponent';
import realm from '../databases/allSchemas';
import {insertNewAccount,queryAllAccountLists} from '../databases/allSchemas';
import AccountItemComponent from '../components/AccountItemComponent';
export default class AddAccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        date:'',
        category:'  Other',
        account:[],
        name:'',
        amount:''
    };
    
  }
  
_selectCategory(){

}

_addAccount(){
    const account={
        id:Math.floor(Date.now()/1000).toString(),
        name:this.state.name,
        openingBlance:this.state.amount,
        
    }
    insertNewAccount(account).then().catch((error)=>{
     Alert.alert('Faile','Loi ');
    });
    alert("Add account succ");
}
  render() {
      
    return (
      <View style={stylesADD.container}>
        <HeaderComponent
        onPressIcon={this._selectCategory.bind(this)}
        onChangeTextName={(text) => this.setState({name:text})}
        placeholderName={'Account Name'}
        onChangeTextAmount= {(text) => this.setState({amount:text})} 
        category={this.state.category}
        styles={[stylesADD.headerStyle,{backgroundColor:'#22B3EF'}]}/>
        <DatePickerComponent date={this.state.date}onDateChange={(date) => {this.setState({date: date});}}/>
        <TouchableOpacity style={stylesADD.ButtonContainer}>
            <Text style={{textAlign:'center'}}
            onPress={this._addAccount.bind(this)}>SAVE</Text>
        </TouchableOpacity>
       
      </View>
    );
  }
}
