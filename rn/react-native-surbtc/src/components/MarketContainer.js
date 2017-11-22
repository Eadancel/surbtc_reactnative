import  React, {Component}  from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Header, Ticker, Trades, TextTrades } from './';


class MarketContainer extends Component {
	render(){
		const {marketID} = this.props;
		return (
			<View style={marketContainer}>
				<Header marketID={marketID}/>
				<Ticker ticker_value={"4.4M"}/>
				<Trades buys={"12"} sales={"33"}/>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	marketContainer : {
		display : "flex",
		flex : 1,
		alignItems : "center",
		backgroundColor : "#000000",
		flexDirection: 'column',
        justifyContent: 'center'
	},

})

const { marketContainer } = styles;
export default MarketContainer