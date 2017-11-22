import React from 'react';
import { View, Text  } from 'react-native';
import { Header, MarketContainer } from "./src/components";

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <MarketContainer marketID="btc-clp"/>
      </View>
    );
  }
}
