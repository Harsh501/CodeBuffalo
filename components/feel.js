import React, { Component } from 'react';
import { Button , StyleSheet, Text, View , ImageBackground, TouchableOpacity } from 'react-native';


export default class feel extends Component {

  render() {
    return (
        <View style={styles.container}>
          <ImageBackground 
          source = {require('../images/feel_2.jpg')}
          style = {{width : '100%' , height : '100%'}}
          >
            <View style = {styles.container} >
              <Text style ={styles.textstyle}>
                  Why do you feel that way ?
              </Text>
              <TouchableOpacity style = {styles.Buttons}>
                <Text>Work</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.Buttons}>
                <Text>School</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.Buttons}>
                <Text>Family</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.Buttons}>
                <Text>Partner</Text>
              </TouchableOpacity>
            </View>
            <View style = {styles.container_2}>
              <TouchableOpacity style = {styles.Buttons_2}>
                <Text>Family</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.Buttons_2}>
                <Text>Friends</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.Buttons_2}>
                <Text>Dating</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.Buttons_2}>
                <Text>Not sure!</Text>
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
    flexDirection: 'row' ,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container_2: {
    flex: 1,
    flexDirection: 'row' ,
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom : 115
  },
  textstyle :{
    fontFamily: 'AvenirNext-Bold',
    fontSize : 30,
    color: 'black' , 
    textAlign: 'left',
    position: 'absolute',
    top: 50,
    left : 10,
    right : 10,
  },
  Buttons:{
    width : 130,
    flex: 1,
    marginRight : 10,
    marginLeft : 10,
    height: 50, 
    color : 'white',
    borderColor:'black', 
    borderBottomWidth:2,
    borderTopWidth:2,
    borderLeftWidth:2,
    borderRightWidth:2,
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'relative',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    bottom : -10
  },
  Buttons_2:{
    width : 130,
    flex: 1,
    marginRight : 10,
    marginLeft : 10,
    height: 50, 
    color : 'white',
    borderColor:'black', 
    borderBottomWidth:2,
    borderTopWidth:2,
    borderLeftWidth:2,
    borderRightWidth:2,
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'relative',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    bottom : 145
  }
});