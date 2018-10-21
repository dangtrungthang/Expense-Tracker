
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,StatusBar,TouchableOpacity,FlatList,
  Dimensions,TouchableHighlight,TextInput,
  Image} from 'react-native';
  import { Icon} from 'react-native-elements';
  import DateTimePicker from 'react-native-modal-datetime-picker';
class AddTransactionScreen extends Component{
	state={
		isDateTimePickerVisible:false,
	};

	_showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };
render(){
	return(
		<View style={styles.rootContainer}>
		<View style={styles.container}>
			<View style={styles.rowContainer}>
				<Text style={{backgroundColor:'gray',borderRadius:2,padding:3}}
					// OnPress select USD,VND
					  >VND</Text>
				<View style={{flex:1,flexDirection:'column'}}>
					<Text style={{marginLeft:10,fontSize:10}}>Amount</Text>
					<TextInput style={styles.TextInputStyle}>0</TextInput>
				</View>
				
			</View>

			<TouchableOpacity style={styles.rowContainer}>
				<Image source={require('./../iconsImage/Salary.png')} style={{width:30,height:30}}/>
				<Text style={styles.TextRow}>Select Category</Text>
				<Icon size={28} name={"chevron-right"} />
           	</TouchableOpacity>

			<TouchableOpacity style={styles.rowContainer}>
				<Image source={require('./../iconsImage/Note2.png')}  style={{width: 30, height: 30}}/>
				<Text style={styles.TextRow}>Note</Text>
				<Icon size={28} name={"chevron-right"} />
			</TouchableOpacity>

			<TouchableOpacity style={styles.rowContainer} onPress={this._showDateTimePicker}>
				<Image source={require('./../iconsImage/calendar-512.png')}  style={{width: 30, height: 30}}/>
				<Text style={styles.TextRow}>18/10/2018</Text>
				<Icon size={28} name={"chevron-right"} />
				 <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
			</TouchableOpacity>

			<TouchableOpacity style={styles.rowContainer}>
				<Image source={require('./../iconsImage/Circle-icons-creditcard.png')} style={{width:30,height:30}}/>
				<Text style={styles.TextRow}>Tiền trong thẻ</Text>
				<Icon size={28} name={"chevron-right"} />
           	</TouchableOpacity>

		</View>
		<View style={{flex:0.7,marginTop:40,height:50}}>
			<View style={{padding:30,backgroundColor:'white',justifycontent:'center',alignItems:'center'}}>
				<Text style={{color:'forestgreen'}}>Add more details</Text>
			</View>
		</View>
		</View>)
}
}
const styles=StyleSheet.create({
	rootContainer:{
		flex:1,backgroundColor:'#efeff4',
	},
	container:{
		flex:1,
		
		flexDirection:'column',
		
		
	},
	rowContainer:{
		padding:10,
		flex:1,
		flexDirection:'row',
		alignItems:'center',
		backgroundColor:'white',
		
	},
	TextInputStyle:{
		 borderColor: 'gray', borderBottomWidth: 1,
		 marginLeft:10,
		 fontSize:15,


	}, TextRow:{marginLeft:10,borderBottomWidth:1,flex:1

	}
})
export default AddTransactionScreen;
