import React, { Component } from 'react';
import { View, Text,StyleSheet,TextInput } from 'react-native';
import colors from '../configs/colors'

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
activeNote(){
    return(
    <View style={styles.container}>
        <TextInput placeholder='Nhập vào ghi chú'
        placeholderTextColor={colors.rowSeparator}
        onChangeText={this.props.onChangeText}/>
      </View>
    )
}
disableNote(){

}
  render() {
    return (
      <View>
          {this.props.isActive?this.activeNote():this.disableNote()}
         
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
       // backgroundColor:colors.colorNote,
        height:100,
        marginLeft: 50,
        borderBottomWidth:0.5
    }
})