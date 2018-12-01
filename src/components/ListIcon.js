import React, { Component } from 'react';
import { View, Text,Image,FlatList, Dimensions, ScrollView,StyleSheet,TouchableOpacity } from 'react-native';
import colors from '../configs/colors';
import Button from '../components/Button';
import iconDefaults from '../configs/iconDefaults'
const heightModal = Dimensions.get('window').height / 2;
export default class ListIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[{name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},
      {name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},
      {name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},
      {name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},
      {name:'redit',URL:iconDefaults.account},
      {name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},
      {name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},
      {name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},
      {name:'redit',URL:iconDefaults.account},
      {name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},
      {name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},
      {name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},
      {name:'redit',URL:iconDefaults.account},
      {name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},
      {name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},
      {name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},
      {name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},
      {name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},
      {name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},{name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},
      {name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},
      {name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},{name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},
      {name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},
      {name:'Budget',URL:iconDefaults.budget},
      {name:'redit',URL:iconDefaults.account},
    ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Button onPress={this.props.onPress}
          title='  Đóng'/>
        </View>
        <ScrollView horizontal={true}>

       
        <FlatList
        data={this.state.data}
        renderItem={({item})=>{
          return(
          <TouchableOpacity style={styles.wrapperItems}>
            <Image
            style={styles.ImageST}
            source={item.URL}/>
            <Text>{item.name}</Text>
          </TouchableOpacity>
          )
        }}
        keyExtractor={item=>item.name}
        contentContainerStyle={styles.list}
        numColumns={6}
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

  },
  header: {
    height: 50,
    borderBottomWidth: 0.7,
    borderBottomColor: colors.rowSeparator,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  wrapperItems:{
    marginHorizontal:10
  },
  list:{
    
    
  },
  ImageST:{
    height:35,
    width:35
  }
})