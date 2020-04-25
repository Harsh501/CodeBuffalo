import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

export default toolKit = () => (
  <View style ={{flex: 1}}>
  <Text style={{ fontSize: 26 , top  :30 }}>Something You might Like!</Text>
  <ScrollView style ={{top  :40}}>
    
    <Image source={require('../images/mot1.jpg')} style ={{width : 200 , height : 200}}></Image>
    <Image source={require('../images/mot2.jpg')} style ={{width : 200 , height : 200}}></Image>
    <Image source={require('../images/mot3.jpeg')} style ={{width : 200 , height : 200}}></Image>
    <Image source={require('../images/mot4.jpg')} style ={{width : 200 , height : 200}}></Image>
    <Image source={require('../images/mot5.jpg')} style ={{width : 200 , height : 200}}></Image>
    <Image source={require('../images/mot6.jpg')} style ={{width : 200 , height : 200}}></Image>
    <Image source={require('../images/mot7.jpeg')} style ={{width : 200 , height : 200}}></Image>
    <Image source={require('../images/liked_1.png')} style ={{width : 200 , height : 200}}></Image>
    <Image source={require('../images/fav.jpg')} style ={{width : 200 , height : 200}}></Image>
  </ScrollView>
  </View>
);
