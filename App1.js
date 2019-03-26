import React, { Component } from 'react'

// Importar do react-native as tags que iremos utilizar (pois serão convertidas em elementos nativos)
import { Text, View, StyleSheet } from 'react-native'

export default class HelloWorldApp extends Component {
  render() {
    return (
      // JSX
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello, World</Text>
        <Text style={styles.teste}>Hello, World</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10
  },
  teste: {
    fontSize: 50,
    color: '#500010'
  }
})

// https://facebook.github.io/react-native/docs/props
