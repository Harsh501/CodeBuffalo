import React, { Component } from 'react';
import { Button , StyleSheet, Text, View , ImageBackground, TouchableOpacity } from 'react-native';


export default class tell_me extends Component {

  render() {
    return (
        <View style={styles.container}>
          <ImageBackground 
          source = {require('../images/dog.jpg')}
          style = {{width : '100%' , height : '100%'}}
          >
            <View style = {styles.container} >
              <Text style ={styles.textstyle}>
                  Would you like to tell me something right now ?
                  </Text>
                <View style={{ flexDirection:"row", fontSize : 70 }}>
                    
                    <TouchableOpacity 
                      style ={styles.Buttons}
                      onPress={() => this.props.navigation.navigate('ToolKit')}
                    >
                        <Text style = {{fontSize : 40}}>No</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style = {styles.Buttons_no} 
                    onPress={() => this.props.navigation.navigate('behaviour')} >
                    <Text style = {{fontSize : 40}}>Yes</Text>
                    </TouchableOpacity>
                    
                </View>
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