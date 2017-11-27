import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import  TextTrades  from './TextTrades.js';
var numeral = require ('numeral');

const Trades = ({buys, sales}) => {

	var buys_txt = numeral(parseInt(buys)).format('0,0[.]00');
	var sales_txt = numeral(parseInt(sales)).format('0,0[.]00');

	return (
		<View style={tradesContainer}>
			<TextTrades label={"# MaxBid:"} 
						value={buys_txt} 
						color={"#FF0000"} />
			<TextTrades label={"# MinAsk:"} 
						value={sales_txt} 
						color={"#00FF00"} />
		</View>
	)
}

const styles = StyleSheet.create({
	tradesContainer : {
		display : "flex",
		// margin : 55,
		backgroundColor : "#999999",
		flex : 1,
		alignItems : "center"
	}
})

const { tradesContainer} = styles;

export default Trades