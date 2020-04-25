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
  import { BarChart} from 'react-native-svg-charts'
  import { LineChart, XAxis} from 'react-native-svg-charts'
  import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import BottomNav from './Bottom';
import homescreen from './homescreen';
import emergency from './emergency';
import second_screen from './second_screen';
import { Ionicons } from '@expo/vector-icons';
import day from './day';
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
const labl = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
export default class year extends Component {
    
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
    const fill = 'rgb(120, 65, 244)'
    const data = [20,34,12,45,67,78,89,87,43,49,10,23 ]
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
          <BarChart 
          style={{ height: 200 }}
           data={data} 
           svg={{ fill }} 
           contentInset={{ top: 30, bottom: 30 }}>
                </BarChart>
                <XAxis
                    style={{ marginHorizontal: -10 }}
                    data={data}
                    formatLabel={(index) => labl[index]}
                    contentInset={{ left: 17, right:17 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                />
        </ImageBackground>
        <Text style ={{
                        bottom  :370,
                        left : 95,
                        fontSize : 20,
                        color : 'black',
                        marginBottom : 2,
                        fontFamily: 'Gill Sans',
                        
                        }}>Number of Check-ins {"\n"}over the Year</Text>
        <Text style ={{
                        bottom  :360,
                        left : 14,
                        color : 'gray',
                        fontSize : 20,
                        
                        fontFamily: 'Gill Sans',
                        marginBottom : 18
                        }}>
                            You check-in {"\n"} 
                            <Text style = {{fontSize : 35  }}>557{"\n"}</Text>
                            over the Year
        </Text>
        <Text style ={{
                        bottom  :360,
                        left : 14,
                        color : 'gray',
                        fontSize : 20,         
                        fontFamily: 'Gill Sans',
                        marginBottom : 18
                        }}>
                            You Felt {"\n"} 
                            <Text style = {{fontSize : 35  }}>Neutral{"\n"}</Text>
                            in 60% of your {"\n"}check-ins
        </Text>
        <Text style ={{
                        bottom  :580,
                        left : 190,
                        color : 'gray',
                        fontSize : 20,         
                        fontFamily: 'Gill Sans',
                        
                        }}>
                            <Text style = {{fontSize : 20  }}>Your Favourite{"\n"}</Text>
                            Quote was
        </Text>
        <Image
                    style={{ 
                      height: 170,
                      width: 170,
                      bottom  :570,
                      left : 190,
                      borderColor :'black',
                      borderWidth : 3,
                      borderRadius : 20,
                    }}
                    source={require('../images/fav.jpg')}
                  />
                <View style = {{position: 'absolute',
                        bottom:4,
                        width : '100%',
                        left : -15}}>
                        <Bottom
                        style= {{position: 'absolute',
                        bottom:0,
                        left:0,}}/>
                    </View>

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