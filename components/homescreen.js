import React, { Component } from 'react';
import { Button , StyleSheet, Text, View , ImageBackground, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as Google from "expo-google-app-auth";
export default class homescreen extends Component {
   
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: ""
    }
  }


  render() {
    signInWithGoogle = async () => {
      try {
        const result = await Google.logInAsync({
          iosClientId: "310530671505-sstrq6kalprkbn0ldrl5fmd7c47oaccf.apps.googleusercontent.com",
          scopes: ["profile", "email"]
        });
  
        if (result.type === "success") {
          console.log("LoginScreen.js.js 21 | ", result.user.givenName);
          this.props.navigation.navigate("second_page", {
            username: result.user.givenName
          }); //after Google login redirect to Profile
          return result.accessToken;
        } else {
          return { cancelled: true };
        }
      } catch (e) {
        console.log('LoginScreen.js.js 30 | Error with login', e);
        return { error: true };
      }
    };
    return (
        <View style={styles.container}>
          <ImageBackground 
          source = {require('../images/first_page_splash_paint.jpg')}
          style = {{width : '100%' , height : '100%'}}
          >
            <View style = {styles.container} >
              <Text
              style = {{
                fontSize : 70 ,
                fontFamily: 'AvenirNextCondensed-DemiBold',
                color :'white',
                flexWrap:'wrap',
                bottom : 250,
                }}> 
                        Serenus
              </Text>
              <Text
              style = {{
                fontSize : 27 ,
                fontFamily: 'AvenirNextCondensed-DemiBold',
                color :'white',
                bottom : 258,
                justifyContent : 'center', 
                }}> 
                          Making mental health a  normal conversation
              </Text>

              <Button title="Sign in with Google" 
              onPress={() => signInWithGoogle()}
               />
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
    fontFamily: 'AvenirNextCondensed-DemiBold',
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
  }, 
  text_box:{

  }
});