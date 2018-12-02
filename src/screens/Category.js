import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { insertNewCategory, queryAllCategoryLists, getIdCategory } from '../databases/allSchemas';
import colors from '../configs/colors';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isData:''
        };
    }
    static navigationOptions = ({ navigation }) => {
        return {
          
          headerStyle: {
            // backgroundColor: colors.colorHeader,
            
          },
          headerRight: (
            <TouchableOpacity
            
              onPress={navigation.getParam('onAdd')}
              style={{ marginRight: 10,}}>
              <Text>Thêm</Text>
            </TouchableOpacity>
          ),
        //   headerLeft: (
        //     <TouchableOpacity style={{ marginLeft: 10 }}>
        //       <Text>CANCEL</Text>
        //     </TouchableOpacity>
        //   )
        };
      };
    _onAdd(){
        this.props.navigation.navigate('AddCategory')
    }
    componentWillMount() {
        
        this.props.navigation.setParams({ onAdd: this._onAdd.bind(this) });
            // const newCategory = {
            //     id: '1',
            //     name: 'food',
            //     icon: 'none',
            //     isExpense: false
            // }
            // insertNewCategory(newCategory).then(() => {

            // }).catch(() => {
            //     alert('Loi them category');
            // })
        


        queryAllCategoryLists().then((data) => {
            this.setState({ data })
        }).catch(() => {
            alert('Loi load category')
        })
    }
    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => {
                        let obj=JSON.parse(item.icon)
                        return (
                            <TouchableOpacity style={styles.wrapperRow}>
                                <Image style={styles.icon} source={obj} />
                                <Text style={styles.lineRow}>{item.name}</Text>
                                <Text>{obj}</Text>
                            </TouchableOpacity>
                        )

                    }}
                    keyExtractor={(item) => item.id}>

                </FlatList>
                <Text>{this.state.isData}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapperRow: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft:15,
        height: 40,
        alignItems: 'center',
    },
    lineRow: {
        borderBottomWidth: 1,
        marginLeft: 15,
        flex: 1,
        fontSize: 20
    },
    icon: {
        width: 35,
        height: 35
    }
});
