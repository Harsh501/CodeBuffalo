import React, { Component } from 'react';
import { Button , StyleSheet, Text, View , ImageBackground, TouchableOpacity ,TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native-paper';


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
      Not_Sure : false,
      text : ''
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
            <View>
            <TextInput 
                  style = {styles.text_box} 
                  label='Is there anything else you would like to add ?'
                  theme={{
                    roundness: 50,
                    colors: {
                      primary:'grey',
                      underlineColor:'transparent',
                      
                    }
                  }}
                  />

                  
            </View>
            
            <TouchableOpacity 
            style = {{
              left :64,
              bottom : 165,
              width : 240,
              height :80,
              position : 'absolute',
              borderColor:'black',
              borderWidth : 3,
              borderRadius : 40,
              alignItems: 'center',
            }}
            onPress={() => this.props.navigation.navigate('second_page')}
            >
              <Text style = {{
                margin : 22,
              fontFamily: 'AvenirNext-Bold',
              fontSize : 20}}>Submit</Text>
            </TouchableOpacity>
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
  text_box:{
    bottom : 100,
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: '#48BBEC',
    width : '95%',
    left:8,
    bottom : 270,
    position : 'absolute',
    fontSize: 16,
    flex :1,
    justifyContent: 'center',
    height : 70,
  }
});