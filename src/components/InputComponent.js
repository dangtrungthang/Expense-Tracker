import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import colors from '../configs/colors';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                style={{ flex: 1,marginLeft: 10,marginTop:12  }}
                onPress={this.props.onPressIcon}>
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
                        
                        placeholderTextColor={this.props.placeholderTextColor}
                    />
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        
       
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputStyle: {
        
       
        borderBottomColor: colors.rowSeparator,
        borderBottomWidth: 1,
        height: 50,
marginLeft:15,
        fontSize: 25
    },
    iconStyle: {
        width: 40,
        height: 40,
    }
});
export default HeaderComponent;
