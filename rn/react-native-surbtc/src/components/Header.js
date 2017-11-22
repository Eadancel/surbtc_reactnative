import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({marketID}) => {
	return (
		<View style={headerContainer}>
			<Text style={header}>
				{marketID}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	headerContainer : {
		display : "flex",
		// margin : 55,
		flex : 1,
		alignItems : "center",
		
	},
	header : {
		fontWeight: "bold",
		fontSize : 40,
		color: "#ffffff"
	}
})

const { headerContainer, header } = styles;

export default Header