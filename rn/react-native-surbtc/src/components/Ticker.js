import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Ticker = ({ticker_value}) => {
	return (
		<View style={tickerContainer}>
			<Text style={tickerText}>
				{ticker_value}
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
	}
})

const { tickerContainer, tickerText } = styles;

export default Ticker