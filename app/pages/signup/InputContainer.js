import React, {Component, PropTypes} from 'react';
import {
  TextInput,
  View,
} from 'react-native';



export default class InputContainer extends Component {
  
   constructor(props) {
    super(props)
   
    
  }



  render() {

  return (
  <View style={styles.inputContainer}>
        <TextInput 
            style={styles.greyFont}
            secureTextEntry={this.props.secureTextEntry}
            placeholder={this.props.placeholder}
            placeholderTextColor={this.props.placeholderTextColor}
            value={this.props.value}
            onChangeText={this.props.onChangeText}
            returnKeyType={this.props.returnKeyType}
            onSubmitEditing={this.props.onSubmitEditing}
            inlineImageLeft={this.props.inlineImageLeft}
            inlineImagePadding={this.props.inlineImagePadding}
            underlineColorAndroid={'#ffffff'}
            clearButtonMode={'while-editing'}
        />
    </View>
      
  );
  }
}

const styles = {
  inputContainer: {
      top:20,
      paddingLeft:15,
      paddingTop: 5,
      paddingBottom: 5,
      marginBottom: 24,
      backgroundColor: '#ffffff',
      borderRadius: 50
  },
  greyFont: {
    color: '#7f7f7f',
    height:26,
    marginLeft:10,
    marginRight:10,
  }
  }
