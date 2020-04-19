import React, { Component } from 'react';
import { Button , StyleSheet, Text, View , ImageBackground, Image,TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Modal from 'react-native-modal';

{/*  */}
const images = ["../images/happy_logo.jpeg" , "../images/calm.jpg"];
export default class behaviour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressStatus : false,
            isModalVisible:false,
            tableData: [               

                [
                    <TouchableOpacity 
                        // onPress={() => this.props.navigation.navigate('second_page')}
                    >
                        {/* 1 image */}
                        <Image
                        source={require("../images/happy_logo.jpeg")}
                        style={{height : 80 , width : 80 , left :7}}
                        />
                    </TouchableOpacity>,
                    <TouchableOpacity>
                            <Image
                            source={require("../images/calm.jpg")}
                            style={{height : 80 , width : 90}}
                            />
                    </TouchableOpacity>
                    ,
                    <TouchableOpacity>
                        <Image
                        source={require("../images/star_eyed.jpeg")}
                        style={{height : 80 , width : 90}}
                        />
                    </TouchableOpacity>
                    ,
                    <TouchableOpacity>
                        <Image
                        source={require("../images/neutral_1.jpg")}
                        style={{height : 80 , width :95}}
                        />
                </TouchableOpacity>
                ],
                [                    
                <TouchableOpacity>
                    <Image
                    source={require("../images/sad_1.jpg")}
                    style={{height : 75 , width :75, left :10}}
                    />
            </TouchableOpacity>,
            <TouchableOpacity>
                    <Image
                    source={require("../images/angry.jpg")}
                    style={{height : 75 , width :100}}
                    />
            </TouchableOpacity>,
            <TouchableOpacity>
                    <Image
                    source={require("../images/nervous_1.png")}
                    style={{height : 80 , width :85 , left:8}}
                    />
            </TouchableOpacity>,
            <TouchableOpacity>
                        <Image
                        source={require("../images/anxious_1.jpeg")}
                        style={{height : 80 , width :80 ,left :10}}
                        />
            </TouchableOpacity>
            ],
            ]
        }
      }
      
  render() {
    const state = this.state;
    
    openModal = () =>{this.setState({isModalVisible:true})}
    closeModal = () =>{this.setState({isModalVisible:false})}
    
    return (
        <View style={styles.container}>
            <ImageBackground 
            source = {require('../images/plant_2.jpg')}
            style = {{width : '100%' , height : '100%'}}
            >
                <Text style = {styles.textstyle}>how do you feel ?</Text>
                <View style = {{bottom : -150}}>
                    <Table borderStyle = {{borderWidth : 0}}>
                        <Rows
                         textStyle={styles.text}
                         />{
                            state.tableData.map((rowData, index) => (
                                <TableWrapper key={index} style={styles.row}>{
                                    rowData.map((cellData, cellIndex) => (
                                    <Cell key={cellIndex} data={cellData} textStyle={styles.text}/>
                                      ))}
                                </TableWrapper>
                                ))
                         }
                    </Table>
                    
                    <TouchableOpacity
                    onPress={() => openModal()}
                    >
                        <Modal 
                        isVisible={this.state.isModalVisible}
                        onBackdropPress={()=>closeModal()}
                        onSwipeComplete={()=>closeModal()}
                        animationIn="slideInRight" 
                        animationOut="slideOutLeft" 
                        >
                            <View style={{ flex: 1 }}>
                                <Text>This is the modal content for now!</Text>
                            </View> 
                            <View style={{flexDirection:'row',}}>
                            <TouchableOpacity style={{backgroundColor:'green',width:'50%'}}>
                                <Text style={{color:'white',textAlign:'center',padding:10}}>Ok</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'red',width:'50%'}} onPress={()=>closeModal()}>
                                <Text style={{color:'white',textAlign:'center',padding:10}}>Cancel
                                </Text>
                            </TouchableOpacity>
                            </View>
                        </Modal>
                <Image
                        source={require("../images/scribble.jpg")}
                        style={styles.scribble}
                        />
                        <Text style = {styles.scrrible_text}>I dont know !</Text>

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
  head: { height: 230, backgroundColor: '#f1f8ff' },
  text: { margin: 0 ,height : 100 , bottom : -50},
  textstyle :{
    fontFamily: 'AvenirNext-Bold',
    fontSize : 30,
    color: 'black' , 
    textAlign: 'left',
    position: 'absolute',
    top: 90,
    left: 15,
  },
  Button_unpress:{
    width: 80, 
    height: 80, 
    borderColor:'blue', 
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
  Button_press:{
    width: 80, 
    height: 80, 
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
  },
  row: { flexDirection: 'row' },
  scribble:{width:100 , height : 100  , bottom : -130 , left : 30},
  scrrible_text: { 
      margin: 0,
      height : 100,
      bottom : -135,
      left:30,
      fontFamily: 'AvenirNext-Bold',
      fontSize : 25,},
    modal :{
        justifyContent:'center',
        textAlign:'center'
    }
});