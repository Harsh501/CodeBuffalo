import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View , ImageBackground, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import quotesGo from "quotes-go";

export default class second_screen extends Component{
  
    render(){
      
  return (
      
    <View style={styles.container}>
      <ImageBackground 
      source = {require('../images/second_page_1.jpg')}
      style = {{width : '100%' , height : '100%'}}
      >
        <View style = {styles.container} >
        <Text style ={styles.textstyle_name}  >
            Hello,  {this.props.navigation.getParam("username")}!
          </Text>
          <Text style ={styles.textstyle}  >
            "{quotesGo.getRandomQuote().text}"
          </Text>
          <TouchableOpacity style={styles.Buttons} onPress={() => this.props.navigation.navigate('tell_me')}>
            <Text style ={{color : 'black' ,fontSize : 30,fontFamily: 'AvenirNext-Bold'}}>Check in</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

    </View>
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textstyle :{
    fontFamily: 'AvenirNext-Bold',
    fontSize : 30,
    width : '90%',
    color: 'black' , 
    textAlign: 'center',
    position: 'absolute',
    top: 290,
    left: 10,
  },
  textstyle_name :{
    fontFamily: 'AvenirNext-Bold',
    fontSize : 50,
    color: 'black' , 
    textAlign: 'center',
    position: 'absolute',
    top: 150,
  },
  Buttons:{
    width: '70%', 
    height: 70, 
    color : 'black',
    borderColor:'black', 
    borderBottomWidth:2,
    borderTopWidth:2,
    borderLeftWidth:2,
    borderRightWidth:2,
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom:20,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  }
});
