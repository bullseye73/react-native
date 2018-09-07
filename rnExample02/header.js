import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text> Header </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0B0B0'
  },
});

module.exports = Header;
