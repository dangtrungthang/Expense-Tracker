import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker'
import {stylesADD} from '../styles/stylesADD';
import PropTypes from 'prop-types';
class DatePickerComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      date:''
    };
  }

  render() {
    return (
      <View style={stylesADD.containerRow}>
      <Image style={stylesADD.styleIcon} source={require('../icons/calendar.png')}/>
      <TouchableOpacity onPress={this._showDateTimePicker}>
          <DatePicker
          date={this.props.date}
          format='MM-DD-YYYY'
         
          customStyles={{
              dateInput:{
                  borderWidth: 0,
                  marginLeft: -50
              }
          }}
          showIcon={false}
          onDateChange={this.props.onDateChange}
          />
      </TouchableOpacity>
     
  </View>
  );}
}
DatePickerComponent.propTypes={
  onDateChange:PropTypes.func,
  date:PropTypes.string

}
export default DatePickerComponent;
