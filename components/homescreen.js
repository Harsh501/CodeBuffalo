import React, { Component } from 'react';

import { Button , StyleSheet, Text, View , ImageBackground, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class homescreen extends Component {

  render() {
    return (
        <View style={styles.container}>
          <ImageBackground 
          source = {require('../images/first_page_splash_paint.jpg')}
          style = {{width : '100%' , height : '100%'}}
          >
            <View style = {styles.container} >
              <Text style ={styles.textstyle}>
                Welcome to 
              </Text>
              <Text
              style = {{
                fontSize : 70 ,
                fontFamily: 'AvenirNext-Heavy',
                color :'white',
                left : -10,
                top : 60
                }}> 
                        Serenus
              </Text>
            
            <TouchableOpacity style = {styles.Buttons}
                onPress={() => this.props.navigation.navigate('second_page')}
                >
              <Text style ={{color : 'white' ,fontSize : 25 ,fontFamily: 'AvenirNext-Bold'}}> Let's get Started </Text>
            </TouchableOpacity>
          
              
          </View>
        </ImageBackground>
  
      </View>
    )
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
    fontSize : 50,
    color: 'white' , 
    textAlign: 'left',
    position: 'absolute',
    top: 300,
    left: 10,
  },
  Buttons:{
    width: '70%', 
    height: 70, 
    color : 'white',
    borderColor:'white', 
    borderBottomWidth:2,
    borderTopWidth:2,
    borderLeftWidth:2,
    borderRightWidth:2,
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  }
});