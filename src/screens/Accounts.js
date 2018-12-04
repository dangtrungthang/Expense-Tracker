import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
//Import các func,moudle liên quan đến database
import { queryAllAccountLists } from '../databases/allSchemas';
// import redux
import { connect } from 'react-redux';
import * as actions from '../actions/index';
// import component
import ListSelector from '../components/ListSelector';
class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],

    };
  }
  // Tuỳ chỉnh navigatoin (icon, title, style,...)
  static navigationOptions = ({ navigation }) => {
    return {


      headerRight: (
        <TouchableOpacity
          onPress={navigation.getParam('onAdd')}>
          <Text style={{ fontSize: 28, marginRight: 15 }}>+</Text>

        </TouchableOpacity>
      )
    };
  };
  // load dữ liệu khi ứng dụng bắt đầu chạy 
  componentWillMount() {
    this.loadData();
    this.props.navigation.setParams({ onAdd: this._onAdd.bind(this) });
  }
  // Hàm điều hướng sang màn hình addAccount
  _onAdd() {
    this.props.navigation.navigate('AddAccount')
  }
  // Hàm thiết kế giao diện các Item trong danh sách
  renderItem = (item) => {
        return (
      // <TouchableOpacity
      //   onPress={(event) => {
      //     this.props.navigation.goBack();
      //     this.props.onGetID(item)
      //   }}
      //   style={styles.containerItem}>
      //   <View style={styles.containerText}>
      //     <Text>{item.name}</Text>
      //     <Text>{item.openingBlance}</Text>
      //   </View>
      //   <Icon
      //     style={{ tintColor: 'red' }}
      //     name={"check"} />
      // </TouchableOpacity>
      <ListSelector
      text={item.name}
      icon={JSON.parse(item.icon)}
      />
     
    )
  }
  // Hàm load database đổ vào state.data,
  loadData() {
    queryAllAccountLists().then((accountData) => {
      // Lấy dữ liệu thành công, setState data:accountData
      this.setState({ data: accountData });
    }).catch((error) => {
      // Lấy dữ liệu thất bại gán state.data bằng mảng rỗng
      this.setState({ data: [] });
      Alert.alert('Lỗi', 'Có lỗi khi load danh sách')
    });

  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) =>
            this.renderItem(item)
          }
          keyExtractor={(item) => item.id}
        />
        <Text >{this.props.accountID}</Text>
      </View>



    );
  }
}
// Tuỳ chỉnh style 
const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: 'white',


    height: 50,

    justifyContent: 'center',
    flexDirection: 'row',


  },
  containerText: {
    flex: 1
  },

});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetID: (account) => {
      dispatch(actions.getAccount(account))
    }
  }
}


export default connect(null, mapDispatchToProps)(Accounts);

