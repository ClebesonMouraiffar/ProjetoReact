import React, { Component } from 'react'

// Importar do react-native as tags que iremos utilizar (pois serão convertidas em elementos nativos)
import { Text, View, StyleSheet, ScrollView } from 'react-native'

export default class HelloWorldApp extends Component {
  constructor(){
    super()
    // this.posts = [
    //   {id: 1, title: '1 post', description: 'descrição do 1 post'},
    //   {id: 2, title: '2 post', description: 'descrição do 2 post'},
    //   {id: 3, title: '3 post', description: 'descrição do 3 post'}
    // ]
    this.posts = [...Array(30).keys()].map(i => {
      return {
        id: i,
        title: `Post - ${i}`,
        description: `Descrição do post: ${i}`
      }
    })

  }
  renderPosts() {
    let pp = []
    this.posts.map(p => {
      pp.push(
        <View key={p.id} style={styles.postContainer}>
          <Text style={styles.postTitle}>{p.title}</Text>
          <Text style={styles.postDescription}>{p.description}</Text>
        </View>
      );
    })
    return pp
  }

  render() {

    return (
      // JSX
      <ScrollView style={styles.container}>
        { this.renderPosts() }
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
    marginBottom: 10,
    marginTop: 10,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 3
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3
  },
  postDescription: {
    color: '#666'
  }
})

// https://facebook.github.io/react-native/docs/props
