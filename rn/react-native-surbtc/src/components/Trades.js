import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import  TextTrades  from './TextTrades.js';

const Trades = ({buys, sales}) => {
	return (
		<View style={tradesContainer}>
			<TextTrades label={"# BUYS:"} 
						value={buys} 
						color={"#FF0000"} />
			<TextTrades label={"# SALES:"} 
						value={sales} 
						color={"#00FF00"} />
		</View>
	)
}

const styles = StyleSheet.create({
	tradesContainer : {
		display : "flex",
		// margin : 55,
		flex : 1,
		alignItems : "center"
	}
})

const { tradesContainer} = styles;

export default Trades