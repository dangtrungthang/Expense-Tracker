import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import colors from '../configs/colors'
export default class Segment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorTab1:'white',
            colorTab2:'white',
            isTab:'1'
        };
    }
isActive(){
    switch(this.state.isTab){
        case '1':
        this.setState({colorTab1:colors.colorActiveGreen,colorTab2:'white',isTab:'2'})
        break;
        case '2':
        this.setState({colorTab2:colors.colorActiveGreen,colorTab1:'white',isTab:'1'})
    }
}
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Button 
                    style={[styles.buttonTab,{backgroundColor:this.state.colorTab1}]} 
                    title={this.props.titleTab1}
                    onPress={()=>{
                        this.setState({isTab:'1'})
                        this.isActive();
                        this.props.onPressTab1;
                    }}/>
                    <Button 
                    style={[styles.buttonTab,{backgroundColor:this.state.colorTab2}]} 
                    title={this.props.titleTab2}
                    onPress={()=>{
                        this.setState({isTab:'2'})
                        this.isActive();
                        this.props.onPressTab2;
                    }}/>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'center',
        marginRight:15
    },
    buttonTab: {
        borderRightWidth: 1,
        width:50,
        alignItems: 'center',
        width:70
    },
    wrapper: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
    }
});
