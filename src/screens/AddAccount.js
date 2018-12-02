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
  // Tuỳ chỉnh navigation (title, thêm button, style,..)
  static navigationOptions = ({ navigation }) => {
    return {
      
      headerStyle: {
        backgroundColor: colors.colorHeader,
        height: 30
      },
      headerRight: (
        <TouchableOpacity
          onPress={navigation.getParam('onSave')}
          style={{ marginRight: 10, }}>
          <Text>SAVE</Text>
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity
          onPress={navigation.getParam('onCancel')}
          style={{ marginLeft: 10 }}>
          <Text>CANCEL</Text>
        </TouchableOpacity>
      )
    };
  };
  //
  componentDidMount() {
    this.props.navigation.setParams({ onSave: this._onSave.bind(this) });
    this.props.navigation.setParams({ onCancel: this._onCancel.bind(this) });
  }
  // Hàm save dữ liệu nhập vào database
  _onSave() {
    // Tạo object chứa thông tin nhập vào
    const newAccount = {
      id: Math.floor(Date.now() / 1000).toString(),
      name: this.state.name,
      openingBlance: this.state.openingBlance,
    }
    // Thêm dữ liệu trong object vào database
    insertNewAccount(newAccount).then(() => {
      alert('Them thanh cong')
    }).catch((error) => {
      alert('Loi~ them account')
    })
  }
  // Huỷ quay về màn hình trước đó
  _onCancel() {
    this.props.navigation.goBack()
  }
  //Hàm render các thành phần giao diện lên màn hình
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
