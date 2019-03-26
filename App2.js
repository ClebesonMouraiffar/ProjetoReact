import React, { Component } from 'react'

// Importar do react-native as tags que iremos utilizar (pois serão convertidas em elementos nativos)
import { Text, View, StyleSheet, ScrollView } from 'react-native'

export default class HelloWorldApp extends Component {
  render() {
    return (
      // JSX
      <ScrollView style={styles.container}>

       <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Primeiros Passos com React Native</Text>
          <Text style={styles.postDescription}>aqui seria a descrição referente ao título acima</Text>
       </View>

       <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Primeiros Passos com React Native</Text>
          <Text style={styles.postDescription}>aqui seria a descrição referente ao título acima</Text>
       </View>

       <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Primeiros Passos com React Native</Text>
          <Text style={styles.postDescription}>aqui seria a descrição referente ao título acima</Text>
       </View>

       <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Primeiros Passos com React Native</Text>
          <Text style={styles.postDescription}>aqui seria a descrição referente ao título acima</Text>
       </View>

       <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Primeiros Passos com React Native</Text>
          <Text style={styles.postDescription}>aqui seria a descrição referente ao título acima</Text>
       </View>

       <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Primeiros Passos com React Native</Text>
          <Text style={styles.postDescription}>aqui seria a descrição referente ao título acima</Text>
       </View>

       <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Primeiros Passos com React Native</Text>
          <Text style={styles.postDescription}>aqui seria a descrição referente ao título acima</Text>
       </View>

       <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Primeiros Passos com React Native</Text>
          <Text style={styles.postDescription}>aqui seria a descrição referente ao título acima</Text>
       </View>

       <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Primeiros Passos com React Native</Text>
          <Text style={styles.postDescription}>aqui seria a descrição referente ao título acima</Text>
       </View>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#333'
  },
  postContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 3
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  postDescription: {
    color: '#666'
  }
})

// https://facebook.github.io/react-native/docs/props
