import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements'
import colors from '../configs/colors'
import PropTypes from 'prop-types';
/* A List element that indicates another list is to be selected */

class ListSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render() {
        // const configText = this.props.itemSelected ? styles.selectedItemText : styles.placeholderItemText;
        // const text = this.props.itemSelected ? this.props.text : this.props.placeholderText;

        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                <Image style={styles.configIcon} source={this.props.icon} />

                <View style={styles.wrapper}>
                    <Text style={styles.configText}>{this.props.text}</Text>

                    <Icon
                        size={28}
                        name={"chevron-right"}
                    />
                </View>



            </TouchableOpacity>
        );
    }
}
ListSelector.propTypes = {
   text:PropTypes.string,
   onPress:PropTypes.func,
   icon:PropTypes.number,
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    wrapper: {
        flexDirection: 'row',
        borderBottomColor: colors.rowSeparator,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flex:1,
        marginLeft:10
    },
    configIcon: {
        width: 40,
        height: 40,
        marginLeft: 10
    },
    configText: {
        fontSize: 25,       
        flex: 3
    }
})
export default ListSelector;
