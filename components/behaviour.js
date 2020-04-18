import React, { Component } from 'react';
import { Button , StyleSheet, Text, View , ImageBackground, TouchableOpacity } from 'react-native';


export default class behaviour extends Component {

  render() {
    return (
        <View style={styles.container}>
          <ImageBackground 
          source = {require('../images/snow_cap.jpg')}
          style = {{width : '100%' , height : '100%'}}
          >

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
    fontSize : 40,
    color: 'black' , 
    textAlign: 'left',
    position: 'absolute',
    top: 130,
    left: 25,
  },
  Buttons:{
    width: '40%', 
    height: 70, 
    color : 'black',
    borderColor:'black', 
    borderBottomWidth:5,
    borderTopWidth:5,
    borderLeftWidth:5,
    borderRightWidth:5,
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: -30,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    left:20
  },
  Buttons_no:{
    width: '40%', 
    height: 70, 
    color : 'black',
    borderColor:'black', 
    borderBottomWidth:5,
    borderTopWidth:5,
    borderLeftWidth:5,
    borderRightWidth:5,
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: -30,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    left:-165
  }
});