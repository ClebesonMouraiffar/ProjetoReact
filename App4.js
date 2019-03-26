import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), parseInt(this.props.time));
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text style={this.props.style}>{this.props.text}</Text>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.blink}>
        <Blink style={styles.blink} text='I love to blink' time='1000' />
        <Blink style={styles.blink} text='Yes blinking is so great' time='1000' />
        <Blink style={styles.blink} text='Why did they ever take this out of HTML' time='1000' />
        <Blink style={styles.blink} text='Look at me look at me look at me' time='1000' />
        {/* <Text style={styles.blink}>Oi mundo</Text> */}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  blink: {
    fontSize: 30
  }
})
