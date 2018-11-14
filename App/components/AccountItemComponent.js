import React from 'react';
import { Text, View,TouchableOpacity,ScrollView } from 'react-native';
import PropTypes from 'prop-types';
const AccountItemComponent = ({
    id,
    name,
    openingBlance,
}) => (
   
    <ScrollView>

    
         <TouchableOpacity style={{backgroundColor:'#4C68A3',height:40,width:200,borderRadius:10,marginTop:5,marginLeft:10,marginRight:10}}>
            <Text style={{textAlign:'center'}}>{name}</Text>
         </TouchableOpacity>
    </ScrollView>
    
   
);
AccountItemComponent.propTypes={
 id:PropTypes.string,
 name:PropTypes.string,

}
export default AccountItemComponent;
