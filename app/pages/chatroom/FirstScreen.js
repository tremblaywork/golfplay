// By Dmitry
import React from 'react';
import { 
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image, 
  TouchableOpacity,
  Alert,
  LayoutAnimation,
} from 'react-native';

import ChatButtonGroup from './ChatButtonGroup.js';

export default class ChatScreen extends React.Component {
  
   constructor(props) {
    super(props)
   
    this.state = {
      searchText: '',
      searchHomeFeedText: '',

      homeFeedEdited: false,
      showPostOption: false,
      showAddUser: false,
    };
  }

  render() {
    return (
      <Image style={styles.container} source={require('../../Images/tut1_bg.png')} >
        <ChatButtonGroup style={styles.buttonGroup}/>
        <Text style={styles.text}>Hello, Welcome to Chat room of GolfPlayed. Enjoy your chatting time.</Text>
      </Image>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    height: '100%'
  },
  text: {
    fontSize: 20,
    color: 'black',
    height: '30%',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'transparent'
  },
  buttonGroup: {
    marginTop: 100,
    marginBottom: 50,
  }
}
