import React, { Component } from 'react';
import { View, Text, Image, FlatList, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../configs/colors';
import Button from '../components/Button';
import iconDefaults from '../configs/iconDefaults'
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import  ArrayIconAccount from '../configs/iconAccount';
const heightModal = Dimensions.get('window').height / 2;
class ListIconAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
           data:[
            require('../asset/iconAccount/1.png'),
            require('../asset/iconAccount/2.png'),
            require('../asset/iconAccount/3.png'),
            require('../asset/iconAccount/4.png'),
            require('../asset/iconAccount/5.png'),
            require('../asset/iconAccount/6.png'),
            require('../asset/iconAccount/7.png'),
            require('../asset/iconAccount/8.png'),
           ]
         
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Button onPress={this.props.onPress}
                        title='  Đóng' />

                </View>
                <ScrollView
                    horizontal={true}>

                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.onGetIcon(item)
                                    }}
                                    style={styles.wrapperItems}>
                                    <Image
                                        style={styles.ImageST}
                                        source={item} />

                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={item => item.name}
                        contentContainerStyle={styles.list}
                        numColumns={7}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    >

                    </FlatList>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor:'white',
    },
    header: {
        height: 50,
        borderBottomWidth: 0.7,
        borderBottomColor: colors.rowSeparator,
        flexDirection: 'row',
        alignItems: 'center',

    },
    wrapperItems: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
    list: {


    },
    ImageST: {
        height: 35,
        width: 35
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        onGetIcon: (icon) => {
            dispatch(actions.getIconAccount(icon))
        }
    }
}


export default connect(null, mapDispatchToProps)(ListIconAccount);

