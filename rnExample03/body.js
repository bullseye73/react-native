import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Body extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Text> Body </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
});

module.exports = Body;
