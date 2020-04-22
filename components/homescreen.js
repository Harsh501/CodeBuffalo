import React, { Component } from 'react';
import {  StyleSheet, Text, View , ImageBackground, TouchableOpacity , Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as Google from "expo-google-app-auth";
import * as Facebook from 'expo-facebook';



export default class homescreen extends Component {
   
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
    }
  }


  render() {
    
    signInWithGoogle = async () => {
      if(this.state.signedIn) 
        this.props.navigation.navigate("second_page");
      else{
        try {
          const result = await Google.logInAsync({
            iosClientId: "310530671505-sstrq6kalprkbn0ldrl5fmd7c47oaccf.apps.googleusercontent.com",
            scopes: ["profile", "email"]
          });
    
          if (result.type === "success") {
            this.setState({signedIn : true});
            this.props.navigation.navigate("second_page", {
              username: result.user.givenName
            });
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
    }
    };

     logInWithFacebook = async() => {
      if(this.state.signedIn)
        this.props.navigation.navigate("second_page");
      else{
        try {
          
          await Facebook.initializeAsync('2376431252655014');
          const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
          });
          
          if (type === 'success') {
            this.setState({signedIn : true});
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            this.props.navigation.navigate("second_page", {
              username: `${((await response.json()).name).split(" ")[0]}`
            });
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
    }
  }
    return (
        <View style={styles.container}>
          <ImageBackground 
          source = {require('../images/first_page_splash_paint.jpg')}
          style = {{width : '100%' , height : '100%'}}
          >
            <View style = {styles.container} >
              <Text
              style = {{
                fontSize : 100 ,
                fontFamily: 'AvenirNextCondensed-DemiBold',
                color :'white',
                flexWrap:'wrap',
                bottom : 230,
                left: -5
                }}> 
                        Serenus
              </Text>
              <Text
              style = {{
                fontSize : 35 ,
                fontFamily: 'AvenirNextCondensed-DemiBold',
                color :'white',
                bottom : 228,
                justifyContent : 'center',
                left :9
                }}> 
                          Making mental health a  normal conversation
              </Text>
              <TouchableOpacity 
                style = {styles.Buttons}
                onPress={() => signInWithGoogle()}
               >
                 <Image source={require('../images/google.png')} style ={{width : 30 , height : 30 , left :-110 , bottom : -10}}></Image>
                 <Text style ={{color :'white' , fontSize :20 , bottom : 15}}>
                   Sign in with Google
                 </Text>
               </TouchableOpacity>

               <TouchableOpacity 
                style = {styles.Buttons_2}
                onPress={() => logInWithFacebook()}
               >
                 <Image source={require('../images/google.png')} style ={{width : 30 , height : 30 , left :-110 , bottom : -5}}></Image>
                 <Text style ={{color :'white' , fontSize :20 , bottom : 20}}>
                   Sign in with facebook
                 </Text>
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
    width: '80%', 
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
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    bottom : 0
  },
  Buttons_2:{
    width: '80%', 
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
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    bottom : 90
  }, 
  text_box:{

  }
});