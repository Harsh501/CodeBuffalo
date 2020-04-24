import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: 'Sat, April 18                                              1',
    content: <Image
    source={require("../images/happy_logo.jpeg")}
    style={{height : 50 , width : 50 , position : 'relative' , right : -290 , top : -35   }}
    />,
    time : '12:53 pm',
    reason : 'School'
  },
  {
    title: 'Sun, April 19                                             1',
    content : <Image
    source={require("../images/calm.jpg")}
    style={{height : 50 , width : 50 , position : 'relative' , right : -290 , top : -35   }}
    />,
    time : '1:13 pm',
    reason : 'partner'
  },
  {
    title: 'Mon, April 20                                           1',
    content: <Image
    source={require("../images/nervous_1.png")}
    style={{height : 50 , width : 50 , position : 'relative' , right : -290 , top : -35   }}
    />,
    time : '7:33 pm',
    reason : 'Dating'
  },
  {
    title: 'Tue, April 21                                             1',
    content: <Image
    source={require("../images/neutral_1.jpg")}
    style={{height : 50 , width : 50 , position : 'relative' , right : -290 , top : -35   }}
    />,
    time : '2:53 am',
    reason : 'Friends'
  },
  {
    title: 'Wed, April 22                                           1',
    content: <Image
    source={require("../images/sad_1.jpg")}
    style={{height : 50 , width : 50 , position : 'relative' , right : -290 , top : -35   }}
    />,
    time : '10:50 am',
    reason : 'Work'
  },
  {
    title: 'Thu, April 23                                            1',
    content: <Image
    source={require("../images/star_eyed.jpeg")}
    style={{height : 50 , width : 50 , position : 'relative' , right : -290 , top : -35   }}
    />,
    time : '4:30 am',
    reason : 'Family'
  },
];
// Day week year
const SELECTORS = [
  {
    title: 'Day',
    value: 0,
  },
  {
    title: 'Week',
    
  },
  {
    title: 'Year',
  },
];

export default class day extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style= {{fontSize : 20, marginBottom : 10 }}> Checked in at : {section.time}</Text>    
        <Text style= {{fontSize : 20 ,position : 'relative' , left : 5 }}>How do you feel ? </Text>   
        {section.content}
        <Text style= {{fontSize : 20 ,position : 'relative' , left : 5 , top : 12}}>Why do you feel that way ?  </Text>   
        <Text style= {{fontSize : 20 ,position : 'relative' , right : -290 ,top : -10}}>{section.reason}</Text>   
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container}>
            <ImageBackground 
          source = {require('../images/tab.jpg')}
          style = {{width : '100%' , height : '100%'}}
          >
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          <View style={styles.selectors}>
            

            {SELECTORS.map(selector => (
                
              <TouchableOpacity
                key={selector.title}
                onPress={() => this.props.navigation.navigate(selector.title)}
              >
                <View style={styles.selector}>
                  <Text
                    style={
                      activeSections.includes(selector.value) &&
                      styles.activeSelector
                    }
                    style= {{fontSize : 22}}
                  >
                    {selector.title} |
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          
            <View style={styles.header}>
              <Text style={styles.headerText}>Date</Text>
              <Text style={styles.headerText_1}>Check in's</Text>
            </View>
          
          {/* <Collapsible collapsed={this.state.collapsed} align="center"/> */}
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: 'transparent',
    padding: 25,
    borderBottomWidth : 3,
    borderLeftWidth : 3,
    borderRightWidth : 3,
    
    borderColor : 'black',
    justifyContent : 'center',
    borderRadius : 20
  },
  headerText: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: '500',
    left : 10,
    position : 'absolute',
    backgroundColor:'transparent'
  },
  headerText_1: {
    justifyContent : 'center',
    textAlign: 'center',
    fontSize: 19,
    fontWeight: '500',
    left : 104,
    top : 3,
    backgroundColor:'transparent'
  },
  content: {
    padding: 10,
    backgroundColor: '#fff',
    position : 'relative',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  inactive: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    left : 78,
    top : -22,
  },
  selector: {
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
    
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
    left : 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
    
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});