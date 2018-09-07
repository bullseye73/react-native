/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,
} from 'react-native';

const instructions = Platform.select({
});

type Props = {};

class NavBar extends Component {
  render() {
    return (
      <View style={styles.navBar}>
        <Text> NavBar </Text>

      </View>
    )
  }
}

class Body extends Component {
  render() {
    return(
      <View style={styles.body}>
        <Text> body </Text>
      </View>
    )
  }
}

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <NavBar></NavBar>
        <Body></Body>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
  flex: 1,
  flexDirection: 'column',
  },
  navBar: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0B0B0'
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
});
