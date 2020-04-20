import React, { Component } from 'react';
import { Button , StyleSheet, Text, View , ImageBackground, TouchableOpacity ,TouchableHighlight } from 'react-native';


export default class feel extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      work: false,
      school : false,
      family : false,
      partner : false,
      friends : false,
      dating: false,
      other : false,
      Not_Sure : false
     };
    }
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
              <TouchableHighlight
                  underlayColor="rgba(0, 0, 0, 0)"
                  style={
                  this.state.work
                  ? styles.ButtonPress
                  : styles.Buttons
                  }
                  onPress={() => this.setState({work: !this.state.work})}
              >
                <Text>Work</Text>
              </TouchableHighlight>
              <TouchableHighlight
                  underlayColor="rgba(0, 0, 0, 0)"
                  style={
                  this.state.school
                  ? styles.ButtonPress
                  : styles.Buttons
                  }
                  onPress={() => this.setState({school: !this.state.school})}
              >
                <Text>School</Text>
              </TouchableHighlight>
              <TouchableHighlight
                  underlayColor="rgba(0, 0, 0, 0)"
                  style={
                  this.state.family
                  ? styles.ButtonPress
                  : styles.Buttons
                  }
                  onPress={() => this.setState({family: !this.state.family})}
              >
                <Text>Family</Text>
              </TouchableHighlight>
              <TouchableHighlight
                  underlayColor="rgba(0, 0, 0, 0)"
                  style={
                  this.state.partner
                  ? styles.ButtonPress
                  : styles.Buttons
                  }
                  onPress={() => this.setState({partner: !this.state.partner})}
              >
                <Text>Partner</Text>
              </TouchableHighlight>
            </View>
            <View style = {styles.container_2}>
              <TouchableHighlight
                  underlayColor="rgba(0, 0, 0, 0)"
                  style={
                  this.state.friends
                  ? styles.Buttonspress_2
                  : styles.Buttons_2
                  }
                  onPress={() => this.setState({friends: !this.state.friends})}
              >
                <Text>Friends</Text>
              </TouchableHighlight>
              <TouchableHighlight
                  underlayColor="rgba(0, 0, 0, 0)"
                  style={
                  this.state.dating
                  ? styles.Buttonspress_2
                  : styles.Buttons_2
                  }
                  onPress={() => this.setState({dating: !this.state.dating})}
              >
                <Text>Dating</Text>
              </TouchableHighlight>
              <TouchableHighlight
                  underlayColor="rgba(0, 0, 0, 0)"
                  style={
                  this.state.other
                  ? styles.Buttonspress_2
                  : styles.Buttons_2
                  }
                  onPress={() => this.setState({other: !this.state.other})}
              >
                <Text>Other</Text>
              </TouchableHighlight>
              <TouchableHighlight
                  
                  underlayColor="rgba(0, 0, 0, 0)"
                  style={
                  this.state.Not_Sure
                  ? styles.Buttonspress_2
                  : styles.Buttons_2
                  }
                  onPress={() => this.setState({Not_Sure: !this.state.Not_Sure})}
              >
                <Text>Not sure!</Text>
              </TouchableHighlight>
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
    borderColor:'black', 
    borderBottomWidth:3,
    borderTopWidth:3,
    borderLeftWidth:3,
    borderRightWidth:3,
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'relative',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    bottom : -10
  },
  ButtonPress:{
    width : 130,
    flex: 1,
    marginRight : 10,
    marginLeft : 10,
    height: 50, 
    borderColor:'blue', 
    borderBottomWidth:3,
    borderTopWidth:3,
    borderLeftWidth:3,
    borderRightWidth:3,
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
    borderColor:'black', 
    borderBottomWidth:3,
    borderTopWidth:3,
    borderLeftWidth:3,
    borderRightWidth:3,
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'relative',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    bottom : 145
  },
  Buttonspress_2:{
    width : 130,
    flex: 1,
    marginRight : 10,
    marginLeft : 10,
    height: 50, 
    borderColor:'blue', 
    borderBottomWidth:3,
    borderTopWidth:3,
    borderLeftWidth:3,
    borderRightWidth:3,
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'relative',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    bottom : 145
  },

});