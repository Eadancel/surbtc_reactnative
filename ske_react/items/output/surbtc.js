import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from 'react-native';

import Line from './surbtc_images/Line.png'
import buys from './surbtc_images/buys.png'
import sells from './surbtc_images/sells.png'
import logosurbtc835bd206337a59efa79bf8875526e02d1a591151d7717a6c8e5f088d132704df from './surbtc_images/logosurbtc835bd206337a59efa79bf8875526e02d1a591151d7717a6c8e5f088d132704df.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#ffffff'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.Rectangle} />
          <View style={styles.surbtc}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flexDirection: 'column'}}>
                <View style={styles.ticker}>
                  <View style={styles.Rectangle_13}>
                    <Text style={styles._44M}>4.4M</Text>
                  </View>
                </View>
                <View style={styles.market}>
                  <View style={styles.Rectangle_21}>
                    <Text style={styles.BTCCLP}>BTC / CLP</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flexDirection: 'column'}}>
                <Image source={Line} style={styles.Line} />
                <View style={styles.varia24h}>
                  <Text style={styles._04}>
                    <Text>▲</Text>{'\n'}
                    <Text>0.4%</Text>{'\n'}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.buy} />
              <Image source={buys} style={styles.buys} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.sell} />
              <Image source={sells} style={styles.sells} />
            </View>
            <Image source={logosurbtc835bd206337a59efa79bf8875526e02d1a591151d7717a6c8e5f088d132704df} style={styles.logosurbtc835bd206337a59efa79bf8875526e02d1a591151d7717a6c8e5f088d132704df} />
            <View style={styles.ElementsPageControlWhite} />
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  Rectangle: {
    height: 667,
    backgroundColor: '#000000'
  },
  surbtc: {
    height: 612
  },
  ticker: {
    width: 274,
    height: 175,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Rectangle_13: {
    height: 175,
    backgroundColor: '#000000',
    width: 274,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _44M: {
    backgroundColor: 'transparent',
    fontSize: 144,
    fontWeight: '700',
    color: '#7ED321'
  },
  market: {
    width: 181,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Rectangle_21: {
    height: 58,
    backgroundColor: '#000000',
    width: 181,
    alignItems: 'center',
    justifyContent: 'center'
  },
  BTCCLP: {
    backgroundColor: 'transparent',
    fontSize: 48,
    fontWeight: '700',
    color: '#FFFFFF'
  },
  Line: {

  },
  varia24h: {
    width: 140,
    height: 67,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _04: {
    backgroundColor: 'transparent',
    fontSize: 48,
    fontWeight: 'normal',
    color: '#7ED321'
  },
  buy: {
    width: 128,
    height: 58
  },
  buys: {

  },
  sell: {
    width: 130,
    height: 58
  },
  sells: {

  },
  logosurbtc835bd206337a59efa79bf8875526e02d1a591151d7717a6c8e5f088d132704df: {
    alignSelf: 'center',
    marginTop: 57
  },
  ElementsPageControlWhite: {
    alignSelf: 'center',
    marginTop: 21,
    width: 39,
    height: 7
  }
})
