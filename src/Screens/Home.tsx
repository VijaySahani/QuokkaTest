import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Quokka Home page</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color:'#000',
    fontSize:RFValue(18)
  },
})