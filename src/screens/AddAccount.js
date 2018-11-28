import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import InputComponent from '../components/InputComponent';
import ListSelector from '../components/ListSelector';
import iconDefaults from '../configs/iconDefaults';
import colors from '../configs/colors';
import { insertNewAccount } from '../databases/allSchemas';
export default class AddAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      openingBlance: '0',
      
    };
  }
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
  componentDidMount() {
    this.props.navigation.setParams({ onSave: this._onSave.bind(this) });
  }
  _onSave() {
    const newAccount = {
      id: Math.floor(Date.now() / 1000).toString(),
      name: this.state.name,
      openingBlance: this.state.openingBlance,
    }
    //insert account
    insertNewAccount(newAccount).then(() => {
      alert('Them thanh cong')
    }).catch((error) => {
      alert('Loi~ them account')
    })
  }
  render() {
    return (
      <View>
        <HeaderComponent
          titleAmount='Tên'
          icon={iconDefaults.account}
          placeholder='Name'
          changeText={(text) => { this.setState({ name: text }) }}
        />
        <InputComponent
          titleAmount='Số tiền sẵn có'
          placeholder='0'
          icon={iconDefaults.budget}
          keyboardType='decimal-pad'
         changeText={(text) => { this.setState({ openingBlance: text }) }}
        />

        <ListSelector
          text='Đơn vị tiền tệ'
          icon={iconDefaults.currency}
        />
        
      </View>
    );
  }
}
