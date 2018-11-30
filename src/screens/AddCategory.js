import React, { Component } from 'react';
import { View, Text,TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../configs/colors';
import Button from '../components/Button';
export default class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapperRow}>
                    <TouchableOpacity >
                        <Image style={styles.icon} source={require('../asset/icon/budget.png')} />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder='Tên nhóm'
                        placeholderTextColor={colors.rowSeparator} />
                </View>
                <View style={[styles.wrapperRow,{height:35,alignItems:'center'}]}>
                    <Text>Thu nhập/ Chi tiêu</Text>
                    
                    <Button style={styles.button}title="Thu nhập"/>
                    <Button style={styles.button}title="Chi tiêu"/>
                </View>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        marginTop: 30,
    },
    wrapperRow: {
        flexDirection: 'row',
        marginLeft: 15,
        borderBottomWidth:0.7,
        borderBottomColor: colors.rowSeparator,
       
    },
    icon: {
        width: 35,
        height: 35
    },
    inputStyle:{
        flex:1,
        marginLeft:10,
        borderLeftWidth: 0.5,
        borderLeftColor: colors.rowSeparator,
       
    },
    button:{
        borderRadius:3,
        borderWidth: 1,
    }
})