import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,FlatList } from 'react-native';
import iconDefaults from '../configs/iconDefaults';
import { getExpenseFromAccount} from '../databases/allSchemas';
import Segment from '../components/Segment';
export default class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }
_renderItems(item){
  return(
    <View style={styles.container}>
        <Image style={styles.icon}
        source={iconDefaults.catagory}/>
        <View style={styles.containerText}>
          <Text>{item.catagory}</Text>
          <Text>{item.id}</Text>
        </View>
        <Text style={styles.amount}>${item.amount}</Text>
      </View>
  )
}
_Load(){
  getExpenseFromAccount('1543387865').then((data)=>{
    this.setState({data})
    alert('OK')
  }).catch((error)=>{
    alert('Loi')
  })
}
  render() {
    return (
      <View>
      
      <FlatList
      data={this.state.data}
      renderItem={({item})=>this._renderItems(item)}
      keyExtractor={(item)=>item.id}>
     
      </FlatList>
      <Text onPress={this._Load.bind(this)}>LOAD</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    marginVertical: 10,
  },
  containerText:{
    flexDirection: 'column',
    flex:1
  },
  icon:{
    width:35,
    height:35,
    marginHorizontal: 5,
  },
  amount:{
    marginRight:15,
    alignSelf: 'center',
    color:'red'
    
  }
});