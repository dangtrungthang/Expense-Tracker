import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button'
export default class Segment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Button style={styles.buttonTab} title='tab1'/>
                    <Button style={styles.buttonTab} title='tab2'/>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'center'
    },
    buttonTab: {
        borderRightWidth: 1,
        width:50,
        alignItems: 'center',
    },
    wrapper: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
    }
});
