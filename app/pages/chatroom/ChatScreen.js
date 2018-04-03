// By Dmitry
import React from 'react';
import { 
  StyleSheet,
  Text,
  TextInput,
  View,
  Image, 
  TouchableOpacity,
  Alert,
  LayoutAnimation,
} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import FirstScreen from './FirstScreen.js';
import TopToolbar from '../Component/Toolbars/TopToolbar.js';

let FIRSTSCREEN_INDEX = 0;

export default class ChatScreen extends React.Component {
  
   constructor(props) {
    super(props)
   
    this.state = {
      currentChatScreenIndex : FIRSTSCREEN_INDEX,

      topToolBarShow: true,
    };
  }

  onSwipeUp(gestureState) {
    if (this.state.topToolBarShow) {
      this.showTopToolBar(false);
    }
  }

  onSwipeDown(gestureState) {
    if (this.state.topToolBarShow == false) {
      this.showTopToolBar(true);
    }
  }

  showTopToolBar = (show) => {
    this.setState({
      topToolBarShow: show
    })
  }

  onSwipe(gestureName, gestureState, fromToolBar) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:
      this.onSwipeUp(gestureState);
      break;
      case SWIPE_DOWN:
      this.onSwipeDown(gestureState);
      break;
    }
  }

  render() {
    const config = {
      velocityThreshold: 0,
      directionalOffsetThreshold: 80
    };
    return (
      <View style={styles.container}>
        <TopToolbar 
        show={this.state.topToolBarShow} />
        <GestureRecognizer
          onSwipe={(direction, state) => this.onSwipe(direction, state, false)}
          config={config} >
            {this.renderScreen()}
        </GestureRecognizer>
      </View>
    )
  }

  renderScreen() {
    switch(this.state.currentChatScreenIndex) {
      case FIRSTSCREEN_INDEX:
      return ( <FirstScreen /> );
      default:
      return null;
    }
  }
}

const styles = {
  container: {
    width: '100%',
    height: '100%'
  }
}
