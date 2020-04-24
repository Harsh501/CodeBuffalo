import React, { Component } from 'react';
import {  StyleSheet, Text, View , TouchableOpacity , Image } from 'react-native';
import { Linking } from 'react-native';
import * as SMS from 'expo-sms';





export default class emergency extends Component{

    render(){
        phone = () => {
            Linking.openURL('tel:7168343131');
          };
          
          SendMessage =  async () => {
            const isAvailable = await SMS.isAvailableAsync();            
            if (isAvailable) {
                const { result } = await SMS.sendSMSAsync(
                    ['000000000' ],
                    'Help! Health Emergency.'
                  );
                  
            } else {

  // misfortune... there's no SMS available on this device
}

          }
      
        return(
            <View style = {styles.container}>
                <TouchableOpacity  onPress={() => this.showFirstContactAsync()}
                >
                <Image source = {require('../images/panic_contact.png')} style ={styles.icon}/>
                </TouchableOpacity>

                <TouchableOpacity style= {styles.erie} onPress={() => phone()}>
                    <Text style = {{color : 'white' , fontSize : 20}}>Erie County Crisis service</Text>
                </TouchableOpacity>
                <Text style = {styles.or}>OR</Text>
                <TouchableOpacity style= {styles.erie} onPress={() => SendMessage()}>
                    <Text style = {{color : 'white' , fontSize : 20}}>Notify John</Text>
                </TouchableOpacity>
                <TouchableOpacity style= {styles.erie} onPress={() => SendMessage()}>
                    <Text style = {{color : 'white' , fontSize : 20}}>Notify Mike</Text>
                </TouchableOpacity>
                <TouchableOpacity style= {styles.erie} onPress={() => SendMessage()}>
                    <Text style = {{color : 'white' , fontSize : 20}}>Notify Jack</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor : 'white'
    },
    erie:{
        width: '80%', 
        height: 70, 
        borderColor:'white', 
        backgroundColor : '#cc0000',
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
        bottom : -10,
        marginBottom : 10
    },
    or:{
        color : 'gray',
        fontSize : 20,
        marginBottom : 10,
        marginTop : 10,
        
    },
    icon:{
        width : 40,
        height : 40,
        top : -110,
        right :-177,
        position : 'absolute'
    },
    
  });