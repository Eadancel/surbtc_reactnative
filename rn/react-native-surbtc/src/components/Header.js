import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
	return (
		<View style={headerContainer}>
			<Text style={header}>
				BTC-CLP
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	headerContainer : {
		display : "flex",
		margin : 55,
		alignItems : "center"
	},
	header : {
		fontWeight: "bold",
		fontSize : 20
	}
})

const { headerContainer, header } = styles;

export default Header