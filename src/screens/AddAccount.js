import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import InputComponent from '../components/InputComponent';
import ListSelector from '../components/ListSelector';
import iconDefaults from '../configs/iconDefaults';
import colors from '../configs/colors';
import { insertNewAccount } from '../databases/allSchemas';
import Modal from "react-native-modal";
import ListIconAccount from '../components/ListIconAccount';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
const heightModal = Dimensions.get('window').height / 2.5;
class AddAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      openingBlance: '0',
      isModalVisible: false

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
      endingBlance: this.state.openingBlance,
      icon:JSON.stringify(this.props.Icon),
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
          icon={JSON.parse(this.props.Icon)}
          placeholder='Name'
          changeText={(text) => { this.setState({ name: text }) }}
          onPressIcon={() => this.setState({ isModalVisible: true })}
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
        <Modal isVisible={this.state.isModalVisible}

          deviceHeight={heightModal}
          style={styles.styleModal}>
          <ListIconAccount
            onPress={() => this.setState({ isModalVisible: false })} />
        </Modal>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  styleModal: {
    justifyContent: "flex-start",
    marginTop: heightModal,
    marginHorizontal: 0, marginBottom: 0,
    backgroundColor: 'white'
  }
})
const mapStateToProps = (state) => {
  return {
    Icon: state.getIconAccount,

  }
}



export default connect(mapStateToProps, null)(AddAccount);