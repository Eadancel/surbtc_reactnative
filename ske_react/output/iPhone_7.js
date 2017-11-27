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

import WiFi from './iPhone_7_images/WiFi.png'
import MobileSignal from './iPhone_7_images/MobileSignal.png'
import Battery from './iPhone_7_images/Battery.png'
import Line from './iPhone_7_images/Line.png'
import logosurbtc835bd206337a59efa79bf8875526e02d1a591151d7717a6c8e5f088d132704df from './iPhone_7_images/logosurbtc835bd206337a59efa79bf8875526e02d1a591151d7717a6c8e5f088d132704df.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#323232'}}>
        <View style={styles.iPhone7}>
          <View style={styles.StatusBarWhite100}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.PinLeft}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.Carrier}>Sketch</Text>
                  <Image source={WiFi} style={styles.WiFi} />
                  <Image source={MobileSignal} style={styles.MobileSignal} />
                </View>
              </View>
              <Text style={styles._941AM}>9:41 AM</Text>
              <View style={styles.PinRight}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles._100}>100%</Text>
                  <Image source={Battery} style={styles.Battery} />
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles._44M} />
              <View style={styles.BTCCLP} />
              <View style={styles._04} />
            </View>
          </View>
          <Image source={Line} style={styles.Line} />
          <View style={{flexDirection: 'row'}}>
            <View style={styles.buy} />
            <View style={styles._230} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.sell} />
            <View style={styles._140} />
          </View>
          <Image source={logosurbtc835bd206337a59efa79bf8875526e02d1a591151d7717a6c8e5f088d132704df} style={styles.logosurbtc835bd206337a59efa79bf8875526e02d1a591151d7717a6c8e5f088d132704df} />
          <View style={styles.ElementsPageControlWhite} />
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  iPhone7: {

  },
  StatusBarWhite100: {
    alignSelf: 'center',
    height: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  PinLeft: {
    width: 94,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Carrier: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  WiFi: {

  },
  MobileSignal: {

  },
  _941AM: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  PinRight: {
    width: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _100: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  Battery: {

  },
  _44M: {
    width: 274,
    height: 175
  },
  BTCCLP: {
    width: 180,
    height: 58
  },
  _04: {
    width: 140,
    height: 67
  },
  Line: {
    alignSelf: 'center'
  },
  buy: {
    width: 128,
    height: 58
  },
  _230: {
    width: 75,
    height: 58
  },
  sell: {
    width: 130,
    height: 58
  },
  _140: {
    width: 68,
    height: 58
  },
  logosurbtc835bd206337a59efa79bf8875526e02d1a591151d7717a6c8e5f088d132704df: {
    alignSelf: 'flex-start',
    marginLeft: 62,
    marginTop: 53
  },
  ElementsPageControlWhite: {
    alignSelf: 'center',
    marginTop: 25,
    width: 39,
    height: 7
  }
})
