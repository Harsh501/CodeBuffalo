import * as React from 'react';

import { StyleSheet, Text, View , ImageBackground, TouchableOpacity } from 'react-native';
// import { Video } from 'expo-av';

export default class toolKit extends React.Component {


  render() {
    return (
        <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}> React Native Video </Text>
        {/* <Video
          source={{ uri: 'https://www.youtube.com/watch?v=KEf3BAPbqvM' }}
              shouldPlay
          resizeMode="cover"
          style={{ width : 100, height: 300 }}
        /> */}
          </View>
    )

  }
}


var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });