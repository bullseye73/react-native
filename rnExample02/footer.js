import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text> Footer </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});

module.exports = Footer;
