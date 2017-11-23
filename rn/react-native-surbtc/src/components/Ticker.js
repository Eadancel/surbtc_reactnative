import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
var numeral = require ('numeral');


const Ticker = ({ticker, variation}) => {
	var ticker_value = parseInt(ticker);
	var variation_value = parseFloat(variation);

	var ticker_text = numeral(ticker_value).format('$ 0.0 a');
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
		flex : 2,
		alignItems : "center"
	},
	tickerText : {
		fontWeight: "bold",
		fontSize : 100,
		color : "#00ff00"
	},
	variationText : {
		fontWeight: "bold",
		fontSize : 40,
		color : "#00ff00"
	}
})

const { tickerContainer, tickerText, variationText } = styles;

export default Ticker