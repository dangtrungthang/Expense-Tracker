import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import colors from '../configs/colors';
import PropTypes from 'prop-types';
class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{
                    flex: 1,
                    marginLeft: 10,marginTop:12
                }}>
                    <Image style={styles.iconStyle} source={this.props.icon} />

                </TouchableOpacity>
                <View style={{ flex: 9 }}>
                <Text>    {this.props.titleAmount}</Text>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder='0'
                        onChangeText={this.props.changeText}
                        keyboardType={this.props.keyboardType}
                        placeholder={this.props.placeholder}
                        placeholderTextColor='white'
                    />
                </View>

            </View>
        );
    }
}
HeaderComponent.propTypes={
    onChangeText:PropTypes.func
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.colorHeader,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputStyle: {
        
       
       
       
        height: 50,

        fontSize: 25
    },
    iconStyle: {
        width: 40,
        height: 40,
    }
});
export default HeaderComponent;
