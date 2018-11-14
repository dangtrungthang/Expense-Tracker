
import React from 'react';
import { Text, View,StyleSheet,TextInput,TouchableOpacity,Image } from 'react-native';
import {stylesADD} from '../styles/stylesADD';
import PropTypes from 'prop-types';
class HeaderComponent extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
      };
    };
    
    render(){
        return(
            <View style={this.props.styles}>
      
                    <TouchableOpacity onPress={this.props.onPressIcon}>
                        <Image style={{width:40,height:40,marginLeft:20,marginBottom:10}} source={require('../icons/star-button.png')}/>
                    </TouchableOpacity>
                
                    <View style={stylesADD.payeeStyle}> 
                        <TextInput placeholder={this.props.placeholderName} placeholderTextColor='gray' 
                        onChangeText={this.props.onChangeTextName}/>
                        <Text style={stylesADD.textCategory}> {this.props.category}</Text>
                    </View>
                    <TextInput style={{flex:1,textAlign:'right',fontSize:35,color:'white'}}placeholder='0.00' placeholderTextColor='white'
                    onChangeText={this.props.onChangeTextAmount}
                    
                    keyboardType='decimal-pad'/>
            </View>

        )
    }

  
};
HeaderComponent.propTypes={
    onPressIcon:PropTypes.func,
    onChangeTextName:PropTypes.func,
    placeholderName:PropTypes.string,
    onChangeTextAmount:PropTypes.func,    
    category:PropTypes.string,
    styles:PropTypes.any,
}

export default HeaderComponent;
