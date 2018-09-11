import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.hText}> Header </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#78CEFF'
  },
  hText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
});

module.exports = Header;
