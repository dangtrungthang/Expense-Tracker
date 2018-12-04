import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import iconDefaults from '../configs/iconDefaults';
import { getExpenseFromAccount } from '../databases/allSchemas';
import Segment from '../components/Segment';
export default class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      openingBlance:400,
      endingBlance:500
    };
  }
  _renderItems(item) {
    return (
      <View style={styles.container}>
        <Image style={styles.icon}
          source={iconDefaults.catagory} />
        <View style={styles.containerText}>
          <Text>{item.categoryName}</Text>
          <Text>{item.id}</Text>
        </View>
        <Text style={item.isExpense?styles.amount:{marginRight: 15,
    alignSelf: 'center',
    color: 'green'}}>${item.amount}</Text>
      </View>
    )
  }
  _Load() {
    getExpenseFromAccount('1543907169').then((data) => {
      this.setState({ data })
      alert('OK')
    }).catch((error) => {
      alert('Loi')
    })
  }
  render() {
    return (
      <View style={{ flexDirection: 'column' }}>
        {/* Giao diện phần tính toán số dư đầu vào và đầu cuối*/}
        <View style={styles.wrapperRow}>
          <Text style={{ flex: 1 }}>Số dư đầu</Text>
          <Text>498,400.00đ</Text>

        </View>
        <View style={[styles.wrapperRow, { borderBottomWidth: 1 }]}>
          <Text style={{ flex: 1 }}>Số dư cuối</Text>
          <Text >2,098,400.00đ</Text>
        </View>
        <Text style={{ alignSelf: 'flex-end', marginHorizontal: 15 }}>{this.state.endingBlance-this.state.openingBlance}</Text>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => this._renderItems(item)}
          keyExtractor={(item) => item.id}>
          {/*Phần cài đặt giao diện FlatList */}
        </FlatList>
        <Text onPress={this._Load.bind(this)}>LOAD</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  containerText: {
    flexDirection: 'column',
    flex: 1
  },
  icon: {
    width: 35,
    height: 35,
    marginHorizontal: 5,
  },
  amount: {
    marginRight: 15,
    alignSelf: 'center',
    color: 'red'

  },
  wrapperRow: {
    flexDirection: 'row',
    marginHorizontal: 15,
  }
});