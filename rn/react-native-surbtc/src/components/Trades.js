import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Trades = () => {
	return (
		<View style={tradesContainer}>
			<Text style={tradesBuy}>
				# buys
            </Text>
            <Text style={tradesSales}>
                # sales
            </Text>
		</View>
	)
}

const styles = StyleSheet.create({
	tradesContainer : {
		display : "flex",
		margin : 55,
		alignItems : "center"
	},
	tradesBuy : {
		fontWeight: "bold",
		fontSize : 20
    },
    tradesSales : {
		fontWeight: "bold",
		fontSize : 20
    }
})

const { tradesContainer, tradesBuy, tradesSales } = styles;

export default Trades