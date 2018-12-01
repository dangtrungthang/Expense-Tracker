import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../configs/colors';
import iconDefaults from '../configs/iconDefaults'
import ListIcon from '../components/ListIcon';
import InputComponent from '../components/InputComponent';
import Segment from '../components/Segment';
import { insertNewCategory } from '../databases/allSchemas';
import Modal from "react-native-modal";

const heightModal = Dimensions.get('window').height / 2.5;
const widthtModal = Dimensions.get('window').width;
export default class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpense: true,
            name: '',
            isVisibleModal: false
        };
    }
    // Tuỳ chỉnh navigatoin (icon, title, style,...)
    static navigationOptions = ({ navigation }) => {
        return {

            title: 'Nhóm mới',
            headerRight: (
                <TouchableOpacity
                    onPress={navigation.getParam('onAdd')}>
                    <Text style={{ fontSize: 28, marginRight: 15 }}>+</Text>

                </TouchableOpacity>
            )
        };
    };
    componentWillMount() {
        this.props.navigation.setParams({ onAdd: this._onAdd.bind(this) });
    }
    _onAdd() {
        const newCategory = {
            id: Math.floor(Date.now() / 1000).toString(),
            name: this.state.name,
            icon: 'none',
            isExpense: this.state.isExpense
        }
        insertNewCategory(newCategory).then(() => {
            alert('OK')
        }).catch((error) => {
            alert('Loi them category')
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <InputComponent
                    icon={iconDefaults.budget}
                    placeholder="Tên nhóm"
                    placeholderTextColor={colors.rowSeparator}
                    onPressIcon={() => this.setState({ isVisibleModal: true })} />
                <View style={[styles.wrapperRow, { height: 35, alignItems: 'center' }]}>
                    <Text style={{ flex: 1 }}>Thu nhập/ Chi tiêu</Text>

                    <Segment
                        titleTab1='Thu nhập'
                        titleTab2='Chi tiêu'
                        onPressTab1={() => this.setState({ isExpense: true })}
                        onPressTab2={() => this.setState({ isExpense: false })} />
                </View>
                <Modal
                    isVisible={this.state.isVisibleModal}
                    deviceHeight={heightModal}
                    //deviceWidth={widthtModal}
                    style={styles.styleModal}>
                    <ListIcon
                    onPress={() => this.setState({ isVisibleModal: false })}/>


                </Modal>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 30,
    },
    wrapperRow: {
        flexDirection: 'row',
        marginLeft: 15,
        borderBottomWidth: 0.7,
        borderBottomColor: colors.rowSeparator,

    },
    icon: {
        width: 35,
        height: 35
    },
    inputStyle: {
        flex: 1,
        marginLeft: 10,
        borderLeftWidth: 0.5,
        borderLeftColor: colors.rowSeparator,

    },
    button: {
        width: 70,
        justifyContent: 'center',

    },
    wrapperButton: {
        borderWidth: 1,
        flexDirection: 'row',
        borderRadius: 3,
        marginRight: 15,
    },
    styleModal:{
        justifyContent: "flex-start",
        marginTop: heightModal,
        marginHorizontal:0 
    }
})