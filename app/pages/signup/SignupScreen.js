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
    Dimensions
} from 'react-native';
const fbButtonImage = require('../../Images/AuthImages/FbIn.png');
const LinkedImage = require('../../Images/AuthImages/googleIn.png');
const  googleImage = require('../../Images/AuthImages/linkedIn.png');
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
    REGISTRATION_TWO


} = RouterScene;
export default class SignupScreen extends React.Component {
  
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
 
  
    
  changeScreen = () => {
    Actions.pop()
  }


    signUp = () => {
        Actions[REGISTRATION_ONE]()
    };
  render() {
      const profileImage = require('../../Images/AuthImages/profile.png');
  var overrides = { textColor : '#ffffff', backgroundColor: '#004c86' }; 
  return (
    <View style={styles.container}>
           <StatusBar
          backgroundColor={'#000000'}
          />
             
           <Image style={styles.backgroundImage} source={require('./img/tut1_bg.png')} />
           <View style={styles.header}>
                <Image style={styles.mark} source={require('./img/tut1_logo.png')} />
            </View>
            <View style={styles.inputs}>
                  
                <InputContainer 
                  secureTextEntry={false}
                  placeholder="Email or mobile number *"
                  placeholderTextColor="#7f7f7f"
                  value={this.state.username}
                  onChangeText={this.handleUsernameChange.bind(this)}
                  returnKeyType={'next'}
                  inlineImagePadding={10}
                />
                <InputContainer 
                  secureTextEntry={true}
                  placeholder="Create password *"
                  placeholderTextColor="#7f7f7f"
                  value={this.state.password}
                  onChangeText={this.handlePasswordChange.bind(this)}
                  returnKeyType={'go'}
                  onSubmitEditing={this.handleSubmit.bind(this)} 
                  inlineImageLeft="lock"
                  inlineImagePadding={10}
                />
                <TouchableOpacity style={styles.buttonWrap} onPress={this.signUp}>
                <View style={styles.button}>
                  <Text style={{color: '#000',fontSize:18}}>Next</Text>
                </View>
                </TouchableOpacity>

                <View>
                    <Text style = {{ top:height/4 ,backgroundColor:'transparent' , textAlign : 'center' ,color:'white'}}>
                    or connect with
                    </Text>
                    <View style = {{top:height/4,backgroundColor:'transparent', flexDirection:'row', alignItems:'center' ,marginLeft:50}}>
                        <Image source={LinkedImage} style={styles.imageColor}/>
                        <Image source={fbButtonImage} style={styles.imageColor}/>
                        <Image source={googleImage} style={styles.imageColor}/>
                        {/*<SocialButton onClicked = {this.onLinkedInClicked} image = {LinkedImage}/>*/}
                        {/*<SocialButton onClicked = {this.onLinkedInClicked} image = {LinkedImage}/>*/}
                        {/*<SocialButton onClicked = {this.onLinkedInClicked} image = {LinkedImage}/>*/}
                    </View>


            </View>
              
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
      top:height/4.5,
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
      paddingTop: 8,
      paddingBottom: 8,
      borderRadius: 50,
      margin: 20 
    },
    imageColor:{
        alignItems:'center',
        margin:30,
        height:35,
        width:35,
        resizeMode:'contain'
    }
    
})

