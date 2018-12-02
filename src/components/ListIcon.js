import React, { Component } from 'react';
import { View, Text, Image, FlatList, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../configs/colors';
import Button from '../components/Button';
import iconDefaults from '../configs/iconDefaults'
import { connect } from 'react-redux';
import * as actions from '../actions/index';
const heightModal = Dimensions.get('window').height / 2;
class ListIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: ' beer',
                    URL: require('../asset/iconCategory/Food/beer.png')
                },
                {
                    name: 'aubergine',
                    URL: require('../asset/iconCategory/Food/aubergine.png')
                },
                {
                    name: 'birthdayCake',
                    URL: require('../asset/iconCategory/Food/birthday-cake.png')
                },
                {
                    name: 'biscuit',
                    URL: require('../asset/iconCategory/Food/biscuit.png')
                },
                {
                    name: 'bread',
                    URL: require('../asset/iconCategory/Food/bread.png')
                },
                {
                    name: 'breakfast',
                    URL: require('../asset/iconCategory/Food/breakfast.png')
                },
                {
                    name: 'coffee',
                    URL: require('../asset/iconCategory/Food/coffee.png')
                },
                {
                    name: 'fish',
                    URL: require('../asset/iconCategory/Food/fish.png')
                },
                {
                    name: 'milk',
                    URL: require('../asset/iconCategory/Food/milk.png')
                },
                {
                    name: 'noodles',
                    URL: require('../asset/iconCategory/Food/noodles.png')
                },
                {
                    name: 'pizaa',
                    URL: require('../asset/iconCategory/Food/pizza.png')
                },
                {
                    name: 'rice',
                    URL: require('../asset/iconCategory/Food/rice.png')
                },
                {
                    name: 'waterGlass',
                    URL: require('../asset/iconCategory/Food/water-glass.png')
                },
                {
                    name: 'steak',
                    URL: require('../asset/iconCategory/Food/steak.png')
                },
                {
                    name: 'apple',
                    URL: require('../asset/iconCategory/Education/apple.png')
                },
                {
                    name: 'crayon',
                    URL: require('../asset/iconCategory/Education/crayon.png')
                },
                {
                    name: 'graduationHat',
                    URL: require('../asset/iconCategory/Education/graduation-hat.png')
                },
                {
                    name: 'couple',
                    URL: require('../asset/iconCategory/Dating/couple.png')
                },
                {
                    name: 'bandAid',
                    URL: require('../asset/iconCategory/Medical/band-aid.png')
                },
                {
                    name: 'eye',
                    URL: require('../asset/iconCategory/Medical/eye.png')
                },
                {
                    name: 'tooth',
                    URL: require('../asset/iconCategory/Medical/tooth.png')
                },

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
                                        this.props.onGetURL(item.URL)
                                    }}
                                    style={styles.wrapperItems}>
                                    <Image
                                        style={styles.ImageST}
                                        source={item.URL} />

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
const mapStateToProps = (state) => {
    return {
        icon: state.getIconURL
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetURL: (URL) => {
            dispatch(actions.getIcon(URL))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListIcon);

