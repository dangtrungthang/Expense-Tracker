import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={this.props.style}>
          <Text>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
