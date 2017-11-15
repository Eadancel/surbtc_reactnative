import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Ticker = () => {
	return (
		<View style={tickerContainer}>
			<Text style={tickerText}>
				4.4 M
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	tickerContainer : {
		display : "flex",
		margin : 55,
		alignItems : "center"
	},
	tickerText : {
		fontWeight: "bold",
		fontSize : 20
	}
})

const { tickerContainer, tickerText } = styles;

export default Ticker