
'use strict';


import React from 'react';

import SocialButton from './socialButton'

import {
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableHighlight,
    Alert,
    TouchableOpacity,
    ToastAndroid,
    Dimensions,
    Button
} from 'react-native';

const fbButtonImage = require('../../Images/AuthImages/FbIn.png');
const LinkedImage = require('../../Images/AuthImages/googleIn.png');
const  googleImage = require('../../Images/AuthImages/linkedIn.png');
const profileImage = require('../../Images/AuthImages/profile.png');

import Spinner from 'react-native-loading-spinner-overlay';
import { Actions } from 'react-native-router-flux';
import InputContainer from './InputContainer';
import RouterScene from '../../Constant/constant';
const {

    MAIN_CONTENT,
    AUTHENTICATION,
    LOG_IN,
    ROOT_SCENE,
    SIGN_UP,
    FORGET_PASSWORD,
    INTRO_SLIDES,
    DASH_BOARD,
    REGISTRATION_ONE,
    REGISTRATION_TWO,
    REGISTRATION_THREE


} = RouterScene;
export  default  class RegistrationPageTwo extends React.PureComponent{

    constructor(props) {
        super(props)

        this.state =  {
            username: '',
            password: '',
            animating: false
        }

    }
    onLinkedInClicked = () =>{
        console.log('great here will be LinkedIn')
    };

    onFbLogInClicked = () =>{
        console.log('great here will be FbIn')
    };

    onGoogleBtnClicked = () =>{
        console.log('great here will be GoogleIn')
    };


    componentWillUnmount() {
        this.setState({animating: false});

    }
    componentDidMount() {
        this.setState({animating: false});
        //SplashScreen.hide();

    }
    handleUsernameChange(text) {
        this.setState({username: text});
    }
    handlePasswordChange(text) {
        this.setState({password: text});
    }
    handleSubmit() {
        var username = this.state.username.trim();
        var password = this.state.password.trim();
        if (!username || !password) {
            return;
        }


    }
    nextBtnClicked = () =>{
        Actions[REGISTRATION_THREE]()
    };
    render(){
        return  (<View style={styles.container}>
                <StatusBar
                    backgroundColor={'#000000'}
                />

                <Image style={styles.backgroundImage} source={require('./img/tut1_bg.png')} />
                <View style={styles.header}>
                    <Image style={styles.mark} source={require('./img/tut1_logo.png')} />
                </View>
                <View style={styles.inputs}>
                    <Text  style={{color:'white',
                        fontWeight:'800',
                        fontSize:18,
                        textAlign:'center',
                        backgroundColor:'transparent'}}> Tell us about you and your golf</Text>
                    <View style = {{flexDirection:'row',
                        justifyContent:'center',
                         top:15,
                        backgroundColor:'transparent',
                        marginBottom:15}}>
                        <TouchableOpacity style={{
                            width:(width/2)-10 ,
                            height:30,
                            borderTopLeftRadius :15 ,
                            borderBottomLeftRadius :15,
                            backgroundColor:'white',
                            marginRight:3,}}><Text
                            style={{
                             textAlign:'center' ,
                                backgroundColor:'transparent',
                                top:7}}>Male</Text>
                            </TouchableOpacity>
                        <TouchableOpacity style={{width:(width/2)-10 ,
                            marginLeft:0,
                            height:30,
                            borderTopRightRadius :15,
                            borderBottomRightRadius :15,backgroundColor:'#BBAA64'}}>
                            <Text style={{
                                 textAlign:'center',backgroundColor:'transparent', top:7}}>Female</Text>
                            </TouchableOpacity>
                    </View>
                    <InputContainer
                        secureTextEntry={false}
                        placeholder="Select your home country*"
                        placeholderTextColor="#7f7f7f"
                        value={this.state.username}
                        onChangeText={this.handleUsernameChange.bind(this)}
                        returnKeyType={'next'}
                        inlineImagePadding={10}
                    />
                    <InputContainer
                        secureTextEntry={false}
                        placeholder="Select your home club*"
                        placeholderTextColor="#7f7f7f"
                        value={this.state.password}
                        onChangeText={this.handlePasswordChange.bind(this)}
                        returnKeyType={'go'}
                        onSubmitEditing={this.handleSubmit.bind(this)}
                        inlineImageLeft="lock"
                        inlineImagePadding={10}
                    />
                    <InputContainer
                        secureTextEntry={false}
                        placeholder="Select your handicap *"
                        placeholderTextColor="#7f7f7f"
                        //value={this.state.password}
                        //onChangeText={this.handlePasswordChange.bind(this)}
                        returnKeyType={'go'}
                        // onSubmitEditing={this.handleSubmit.bind(this)}
                        inlineImageLeft="lock"
                        inlineImagePadding={10}
                    />

                    <View style = {styles.refralContainer}>
                        <Text numberOfLines={2}
                              style = {{ fontSize:10,color:'white'}}>By clicking "Create account" you accept and agree to the GolfPlayed.com
                            <Text style={{color:"#BBAA64"}}> Privacy Policy</Text> and <Text style={{color:"#BBAA64"}}>Term & Condition.</Text></Text>
                    </View>
                    <TouchableOpacity style={styles.buttonWrap} onPress={this.nextBtnClicked}>
                        <View style={styles.button}>
                            <Text style={{color: '#000',fontSize:18}}>Create account</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <Spinner color="#00695C" visible={this.state.animating} />

            </View>
        );
    }
}




const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#eee'
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
        height: height
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .15,
        marginBottom: 10,
        marginTop: 20,
        backgroundColor: 'transparent'
    },
    mark: {
        top:30,
        width: 260,
        height: 100,
        resizeMode:'contain'
    },
    signin: {
        backgroundColor: '#FF3366',
        padding: 20,
        alignItems: 'center',
        width:320
    },
    signup: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .15
    },
    inputs: {
        paddingTop:10,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 15,
        flex: .55
    },

    forgotContainer: {
        alignItems: 'flex-end',
        padding: 15,
    },

    whiteFont: {
        color: '#FFF'
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        position: 'absolute',
        top: height/2 -80,
        height: 200,
        width: width
    },
    gray: {
        backgroundColor: '#cccccc',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
    },
    backgroundImage: {
        backgroundColor: '#ccc',
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    center: {
        width: width-60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    forgotPassword: {
        color: '#BBAA64',
        backgroundColor: 'transparent'
    },
    buttonWrap: {
        top:100,
        alignItems: 'center',
        justifyContent: 'center',
        width: width-60
    },
    button:{
        left:20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: width-60,
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 50,
        margin: 20
    },
    imageColor:{
        alignItems:'center',
        margin:30,
        height:35,
        width:35,
        resizeMode:'contain'
    },
    refralContainer:{
        top:100,
        flexDirection:'row',
        marginLeft:40,
        marginRight:40,
        backgroundColor:'transparent',

    },
    referalImage:{
        height:55,
        width:55,

        borderRadius: 27.5,
        resizeMode:'contain'
    },
    referalText:{
        fontSize:18,
        color:'white'
    },
    referalName:{
        top:6,
        fontSize:20,
        color:'#BBAA64'
    },
    viewContainer:{
        marginLeft:10,
        marginRight:10,
    }

})