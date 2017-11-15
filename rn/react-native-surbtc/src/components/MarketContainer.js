import  React  from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Header, Ticker, Trades } from './'


const MarketContainer = () => {
    return (
        <View>
            <Header />
            <Ticker />
            <Trades />
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
export default MarketContainer