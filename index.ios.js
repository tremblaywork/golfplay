/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


console.disableYellowBox = true;
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Button,
    Image,
    Dimensions,
    NavigatorIOS,
    Navigator,
    AsyncStorage,
    Alert,
    ToastAndroid,
    NetInfo
} from 'react-native';
import  App from './app/index'


export default class GolfPlayed extends Component {
    constructor(props) {
        super(props);
        
        
    }

    render() {
        return<App/>
    }

}





AppRegistry.registerComponent('GolfPlayed', () => GolfPlayed);
