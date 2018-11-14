import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert } from 'react-native';
import DatePicker from 'react-native-datepicker'
//
import HeaderComponent from '../components/HeaderComponent';
import DatePickerComponent from '../components/DatePickerComponent';
import AccountPopup from '../Popup/AccountPopup';
import realm from '../databases/allSchemas';
import {insertExpenseToAccount,queryAllAccountLists} from '../databases/allSchemas';
import {stylesADD} from '../styles/stylesADD';
export default class AddTransactionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isOpen:false,
        textNote:'',
        amount:'',
        date:'',
        payee:'',
        category:'  Other',
        account:'default',
        isDateTimePickerVisible: false,
        accountData:[],
    };
  }
  
_selectCategory(){
   
}
_openAccountPopup(){
 this.setState({isOpen:true});
 // reload data account from popup
 queryAllAccountLists().then((accountData) => {
  this.setState({ accountData });
}).catch((error) => {
  this.setState({ accountData: [] });
});

}
_onAdd(){
  
  
}

  render() {
    return (
      <View style={stylesADD.container}>
      <HeaderComponent
        onPressIcon={this._selectCategory.bind(this)}
        onChangeTextName={(text) => this.setState({payee:text})}
        placeholderName={'payee'}
        onChangeTextAmount= {(text) => this.setState({amount:text})} 
        category={this.state.category}
        styles={stylesADD.headerStyle}/>
       
   
       <DatePickerComponent date={this.state.date}onDateChange={(date) => {this.setState({date: date});}}/>
       
        <View style={stylesADD.containerRow}>
            <Image style={stylesADD.styleIcon} source={require('../icons/credit-card.png')}/>
            <TouchableOpacity onPress={this._openAccountPopup.bind(this)} >
                <Text style={stylesADD.textStyle}>
                    Default Account
                </Text>
            </TouchableOpacity>
           
        </View>
        <View style={stylesADD.containerRow}>
            <Image style={stylesADD.styleIcon} source={require('../icons/notepad.png')}/>
            <TextInput placeholder='Note' placeholderTextColor='gray' 
            onChangeText={(text) => this.setState({textNote:text})}
            value={this.state.textNote}
            keyboardType='default'/>
        </View>
        <View>
            <TouchableOpacity style={stylesADD.ButtonContainer} onPress={this._onAdd.bind(this)}>
                <Text style={{textAlign:'center'}}>SAVE</Text>
            </TouchableOpacity>
        </View>
        <AccountPopup
        isOpen={this.state.isOpen}
        onClose={()=>{this.setState({isOpen:false})}}
        accountData={this.state.accountData}
       />
      </View>
    );
  }
}
