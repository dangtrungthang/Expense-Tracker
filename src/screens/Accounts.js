import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
//Import các func,moudle liên quan đến database
import { queryAllAccountLists } from '../databases/allSchemas';
// import redux
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import getAccountID from '../reducers/Accounts';

 class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  // Tuỳ chỉnh navigatoin (icon, title, style,...)
  static navigationOptions = ({ navigation }) => {
    return {
    
     
      headerRight:(
        <TouchableOpacity
        onPress={navigation.getParam('onAdd')}>
         <Text style={{fontSize:28,marginRight:15}}>+</Text>
          
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
  _onAdd(){
    this.props.navigation.navigate('AddAccount')
  }
  // Hàm thiết kế giao diện các Item trong danh sách
  renderItem = (item) => {
    return (
      <TouchableOpacity
        onPress={(event) => { 
          this.props.navigation.goBack();
          
          this.props.onGetID(item) }}
        style={styles.containerItem}>
        <View style={styles.containerText}>
          <Text>{item.name}</Text>
          <Text>{item.openingBlance}</Text>
        </View>
        <Icon
        style={{tintColor:'red'}}
        name={"check"}/>
      </TouchableOpacity>
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
    backgroundColor: '#6B00BD',
    marginVertical: 5,
    marginHorizontal: 10,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    

  },
  containerText:{
    flex:1
  },
  
});
const mapStateToProps = (state) => {
  return {
    accountID:''
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onGetID: (account) => {
      dispatch(actions.getAccount(account))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Accounts);

