import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TextTrades = ({label, value, color}) => {
	return (
			<View style={styles.trades}>
				<Text style={[styles.label,{color:color}]}>
					{label}
				</Text>
				<Text style={[styles.value,{color:color}]}>
					{value}
				</Text>
			</View>
		
	)
}

const styles = StyleSheet.create({
	
	trades: {
		flex: 1,
		flexDirection : "row",
		justifyContent : "space-between",
		// margin:10
	},
	label :{
		fontWeight: "bold",
		flex : 1,
		fontSize : 40,
		// color : {color},
		
	},
	value :{
		flex : 1,
		fontWeight: "bold",
		fontSize : 40,
		// color : {color},
		textAlign :"right"
	},
})

const {  trades, label, value } = styles;

export default TextTrades