import  React, {Component}  from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Header, Ticker, Trades, TextTrades } from './';

var MOCKED_SURBTC_TICKER = [
	{"ticker":{"last_price":["5348000.0","CLP"],
			   "min_ask":["5348000.0","CLP"],
			   "max_bid":["5305015.01","CLP"],
			   "volume":["31.82230733","BTC"],
			   "price_variation_24h":"-0.006",
			   "price_variation_7d":"0.129"}
			},
  ];
var numeral = require ('numeral');

class MarketContainer extends Component {
	render(){
		const {marketID} = this.props;
		const {ticker} = MOCKED_SURBTC_TICKER[0];

		return (
			<View style={marketContainer}>
				<Header marketID={marketID}/>
				<Ticker ticker={ticker['last_price'][0]} variation={ticker['price_variation_24h']}/>
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