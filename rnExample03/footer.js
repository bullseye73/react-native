import React, {Component} from 'react';
import {StyleSheet, Text, View, } from 'react-native';

class Button extends Component {
  render() {
    return (
      <View style={{flex: 1, height: 90, borderWidth: 0.5, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.btIcon} />
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Button name="내계정" />
          <Button name="친구" />
          <Button name="앱평가" />
          <Button name="옵션" />

        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Button name="내계정" />
          <Button name="친구" />
          <Button name="앱평가" />
          <Button name="옵션" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    height: 180,
    backgroundColor: 'yellow',
  },
  btIcon: {
    width: 50,
    height: 50,
    backgroundColor: 'green'
  }

});

module.exports = Footer;
