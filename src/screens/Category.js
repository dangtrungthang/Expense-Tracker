import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { insertNewCategory, queryAllCategoryLists, getIdCategory } from '../databases/allSchemas';
import colors from '../configs/colors';
import realm from '../databases/allSchemas';
import Segment from '../components/Segment';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Expense: [],
            Income:[],
            isData:'',
            isExpense:true
        };
        // this._reloadData();
        // realm.addListener('change', () => {
        //     this._reloadData();
        // });
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
        
        };
      };
    _onAdd(){
        this.props.navigation.navigate('AddCategory')
    }
    _reloadData(){
         queryAllCategoryLists().then((data) => {
            let Expense=[];
            let Income=[];
            for(var i=0;i<data.length;i++){
                if(data[i].isExpense!=true){
                    Expense.push(data[i])
                   
                }else{
                    Income.push(data[i])
                }
            }
            this.setState({ Expense })
            this.setState({ Income })
        }).catch(() => {
            alert('Loi load category')
        })
    }
    componentWillMount() {
        
        this.props.navigation.setParams({ onAdd: this._onAdd.bind(this) });
       this._reloadData()
       
    }
    render() {
        return (
            <View>
                <View style={styles.containerSegment}>
                     <Segment
                        data={['Thu nhập', 'Chi tiêu']}
                        selected={this.state.selected}
                        onPress={index => {
                            if(index==1){
                                this.setState({isExpense:false})
                                this.setState({selected:index})
                            }else{
                                this.setState({isExpense:true})
                                this.setState({selected:index})

                            }   
                        }}
                        horizontalWidth={150}
                        horizontalHeight={20}
                        activeColor='green' />
                </View>
               
                <FlatList
                    data={this.state.isExpense?this.state.Income:this.state.Expense}
                    renderItem={({ item }) => {
                        let obj=JSON.parse(item.icon)
                        return (
                            <TouchableOpacity 
                            onPress={(event)=>{
                                this.props.onGetCategory(item)
                                this.props.navigation.goBack()
                            }}
                            style={styles.wrapperRow}>
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
    },
    containerSegment:{
        alignItems:'center',
        backgroundColor:'white',
        justifyContent:'center',
        height:30,
     }
});
const mapStateToProps = (state) => {
    return {
        IconURL: state.getIconURL
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetCategory: (category) => {
            dispatch(actions.getCategory(category))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Category);