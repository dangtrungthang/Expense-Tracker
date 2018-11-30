import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import colors from '../configs/colors';
import HeaderComponent from '../components/HeaderComponent';
import ListSelector from '../components/ListSelector';
import Note from '../components/Note';
import iconDefaults from '../configs/iconDefaults'
import { insertNewAccount, queryAllAccountLists,insertExpenseToAccount } from '../databases/allSchemas';
import { AccountsNv} from '../configs/configNavigation';
class AddExpense extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [{ id: 'd' }],
      text: '',
      isDateTimePickerVisible: false,
      date: 'Today',
      category:'Expense',
      amount:'',
      accountID:'Select Account',
      note:'Note',
      isNote:false

      

    };
  };
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: colors.colorHeader,
        height: 30
      },
      headerRight: (
        <TouchableOpacity
        
          onPress={navigation.getParam('onSave')}
          style={{ marginRight: 10,}}>
          <Text>SAVE</Text>
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Text>CANCEL</Text>
        </TouchableOpacity>
      )
    };
  };
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    var newDate = moment(date).format('DD/MM/YYYY');
    this.setState({ date: newDate })
    this._hideDateTimePicker();
  };
 //
 _onSave(){
   const expense=[
     {
       id:Math.floor(Date.now() / 1000).toString(),
       accountID:this.props.accountID,
       amount:this.state.amount,
       category:this.state.category,
       creationDate:this.state.date,
     }
   ]
  insertExpenseToAccount(this.props.accountID,expense).then(()=>{

  }).catch((error)=>{
    alert('Loi them')
  })
 }

 componentDidMount() {
  this.props.navigation.setParams({ onSave: this._onSave.bind(this) });
}
  render() {
   
    return (
      <View style={{ flexDirection: 'column' }}>
        <HeaderComponent
          titleAmount='So tien'
          changeText={(text) => { this.setState({ amount:text }) }}
          icon={iconDefaults.vnd}
          keyboardType='decimal-pad'
          placeholder='0'
          />
        <ListSelector text="Catagory" icon={iconDefaults.catagory} onPress={() => {
          this.props.navigation.navigate('Category')
        }} />      
        <ListSelector text={this.state.date} icon={iconDefaults.calendar}
          onPress={this._showDateTimePicker} />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode='date'
        />
        <ListSelector text={this.state.accountID} icon={iconDefaults.account}
        onPress={()=>{
          this.props.navigation.navigate('Accounts')
          
        }} />
         <ListSelector text={this.state.note} icon={iconDefaults.note} 
        onPress={()=>{
          if(this.state.isNote){
            this.setState({isNote:false})
          }else{
            this.setState({isNote:true})
          }
        }}/>
        <Note isActive={this.state.isNote}
        onChangeText={(text)=>this.setState({note:text})}/>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    accountID:state.getAccountID
  }
}



export default connect(mapStateToProps, null)(AddExpense);

