import  React, {Component}  from "react";
import { ActivityIndicator, View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { Header, Ticker, Trades, TextTrades } from './';


var REQUEST_URL = 'https://www.surbtc.com/api/v2/markets/btc-clp/ticker.json';
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

	constructor(props) {
		super(props);
		this.state = {
		  isLoading: true
		}
	};

	fetchData() {
		fetch(REQUEST_URL)
		  .then((response) => response.json())
		  .then((responseData) => {
			this.setState({
			  isLoading: false,
			  ticker: responseData.ticker,
			});
			console.log("new fetch");
		  })
		  .done();
	  };

	  _onRefresh() {
		this.fetchData();
	}

	componentDidMount() {
		this.fetchData();
	  };

	render(){
		const {marketID} = this.props;
		//const {ticker} = MOCKED_SURBTC_TICKER[0];
		const {ticker} = this.state;

		if (this.state.isLoading) {
			return (
			  <View style={{flex: 1, paddingTop: 20}}>
				<ActivityIndicator />
			  </View>
			);
		  }

		return (
			
				<View style={marketContainer}>
					<Header marketID={marketID}/>
					<View style={scrollContainer}>
						<ScrollView refreshControl={
							<RefreshControl
							  refreshing={this.state.isLoading}
							  onRefresh={this._onRefresh.bind(this)}
							  tintColor="#ff0000"
							  title="Loading..."
							  colors={['#ff0000', '#00ff00', '#0000ff']}
							  progressBackgroundColor="#ffff00"
							/>
						  } >
							<View style={scroll}>
								<Ticker ticker={ticker['last_price'][0]} variation={ticker['price_variation_24h']}/>
								<Trades buys={ticker['min_ask'][0]} sales={ticker['max_bid'][0]}/>
							</View>
						</ScrollView>
					</View>
				</View>
			
		)
	}
}
const styles = StyleSheet.create({
	marketContainer : {
		display : "flex",
		flex : 1,
		
		// padding : 15
	},
	scroll:{
		flex:1,
		alignItems : "stretch",
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	scrollContainer :{
		// display : "flex",
		flex : 10,
		backgroundColor : "#555555",

	}
})

const { marketContainer, scrollContainer,scroll } = styles;
export default MarketContainer