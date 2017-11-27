import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
var numeral = require ('numeral');


const Ticker = ({ticker, variation}) => {
	var ticker_value = parseInt(ticker);
	var variation_value = parseFloat(variation);

	var ticker_text = numeral(ticker_value).format('0.0a');
	var variation_text = numeral(variation_value).format('0.00%');
	return (
		<View style={tickerContainer}>
			<Text style={tickerText}>
				{ticker_text}
			</Text>
			<Text style={variationText}>
				{variation_text}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	tickerContainer : {
		display : "flex",
		// margin : 55,
		backgroundColor : "#777777",
		flex : 3,
		alignItems : "center"
	},
	tickerText : {
		fontWeight: '700',
		fontSize : 130,
		color : "#7ED321",
		fontFamily : 'Arial'
	},
	variationText : {
		fontWeight: "bold",
		fontSize : 40,
		color : "#7ED321"
	}
})

const { tickerContainer, tickerText, variationText } = styles;

export default Ticker