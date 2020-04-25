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
import { PieChart } from "react-native-chart-kit";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import BottomNav from './Bottom';
import homescreen from './homescreen';
import emergency from './emergency';
import second_screen from './second_screen';
import { Ionicons } from '@expo/vector-icons';
import tell_me from './tell_me';




const SELECTORS = [
  {
    title: 'Day',
    value: 0,
  },
  {
    title: 'Week',
    value: 2,
  },
  {
    title: 'Year',
  },
];
const data = [
    {
      name: "18 April",
      population: 1,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "19 April",
      population: 1,
      color: "green",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "20 April ",
      population: 1,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "21 April",
      population: 1,
      color: "yellow",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "22 April",
      population: 1,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];
export default class day extends Component {
  state = {
    activeSections: [],
  };


  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  render() {
    const { multipleSelect, activeSections } = this.state;
    const NavStack = createBottomTabNavigator({
      ScreenOne: { 
          screen:emergency,
          navigationOptions: {
              tabBarLabel: 'Panic', 
              tabBarIcon: ({ tintColor , navigation }) => (
                  <TouchableOpacity title = 'panic' onPress={() => this.props.navigation.navigate('emergency')}>
                  <Ionicons name="ios-alert" color={tintColor} size={25}  />
                  </TouchableOpacity>
              ),
              tabBarOptions: { 
                  activeTintColor:'red',
                  inactiveTintColor:'gray',
                  style: {
                      borderTopWidth: 0,
                      backgroundColor: 'transparent',
                  }
              },
              
          },
      },
      ScreenTwo: { 
          screen: second_screen,
          navigationOptions: {
              tabBarLabel: 'Home', 
              tabBarIcon: ({ tintColor }) => (
                <TouchableOpacity title = 'panic' onPress={() => this.props.navigation.navigate('second_page')}>
                <Ionicons name="ios-home" color={tintColor} size={25}  />
                </TouchableOpacity>
              ),
              tabBarOptions: { 
                  activeTintColor:'black',
                  inactiveTintColor:'black',
                  style: {
                      borderTopWidth: 0,
                      backgroundColor: 'transparent',
                  }
              }
          },
      },
      Screenthree: { 
          screen: tell_me,
          navigationOptions: {
              tabBarLabel: 'Start Over', 
              tabBarIcon: ({ tintColor }) => (
                <TouchableOpacity title = 'panic' onPress={() => this.props.navigation.navigate('tell_me')}>
                <Ionicons name="ios-add" color={tintColor} size={30}  />
                </TouchableOpacity>
              ),
              tabBarOptions: { 
                  activeTintColor:'black',
                  inactiveTintColor:'black',
                  style: {
                      borderTopWidth: 0,
                      backgroundColor: 'transparent',
                  }
              }
          },
      },
      Screenfour: { 
          screen: day,
          navigationOptions: {
              tabBarLabel: 'Health Analysis', 
              tabBarIcon: ({ tintColor }) => (
                <TouchableOpacity title = 'panic' onPress={() => this.props.navigation.navigate('day')}>
                <Ionicons name="ios-analytics" color={tintColor} size={25}  />
                </TouchableOpacity>
              ),
              tabBarOptions: { 
                  
                  style: {
                      borderTopWidth: 0,
                      backgroundColor: 'transparent',
                  }
              }
          },
      }
      
    });
    
  const Bottom = createAppContainer(NavStack);

    return (
      <View style={styles.container}>
        <ImageBackground
          source = {require('../images/tab.jpg')}
          style = {{width : '100%' , height : '100%'}}
        >
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
          <PieChart
            data={data}
            width={350}
            height={280}
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="29"
          />
          <View style= {styles.container} style ={{left : 20}}>
          <Text style = {{fontSize : 25  ,left  :0 , color : 'gray' ,marginBottom: 20 , fontFamily: 'Gill Sans'}}>
            You checked-in {"\n"} 
            <Text style = {{fontSize : 35  }}> 5{"\n"}
              times
            </Text>
          </Text>
          <Text style = {{
                    fontSize : 25 ,
                    left  :0 , 
                    color : 'gray',
                    fontFamily: 'Gill Sans',
                    marginBottom : 4}}>
            You felt {"\n"} 
            <Text style = {{fontSize : 35  }}>
              Happy {"\n"}
          </Text>
            in 40% of the{"\n"}
            check-in's
          </Text>
          <Text style ={{
                        bottom  :250,
                        left : 240,
                        fontSize : 25,
                        color : 'gray',
                        fontFamily: 'Gill Sans',
                        marginBottom : 18
                        }}>You Liked!</Text>
          <Image
                    style={{ 
                      height: 150,
                      width: 150,
                      bottom  :250,
                      left : 200,
                      borderColor :'black',
                      borderWidth : 3,
                      borderRadius : 20,
                      
                    }}
                    source={require('../images/liked_1.png')}
                  />
          </View>
          <View style = {{position: 'absolute',
                        bottom:2,
                        width : '100%',
                        left : -15}}>
                        <Bottom
                        style= {{position: 'absolute',
                        bottom:0,
                        left:0,}}/>
                    </View>
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
    top : 0
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