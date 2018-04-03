// By Dmitry
import React from 'react';
import { 
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';

let Window = Dimensions.get('window');

const ChatButtonGroup = (props) => {
    return <View style={[styles.container, props.style]}>
        <TouchableOpacity>
          <View style={styles.leftButton}>
            <Text style={styles.text}>New chat</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.centerButton}>
            <Text style={styles.text}>New group</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.rightButton}>
            <Text style={styles.text}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>;
}
export default ChatButtonGroup

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Window.width/4,
        height: 32,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: 'white',
    },
    centerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Window.width/4,
        height: 32,
        marginLeft: 2,
        marginRight: 2,
        backgroundColor: 'white',
    },
    rightButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Window.width/4,
        height: 32,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: 'white',
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'black',
        fontSize: 18,
        backgroundColor: 'transparent'
    }
} 
