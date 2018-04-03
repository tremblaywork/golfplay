
import {StyleSheet,Dimensions} from  'react-native'
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: {
    },

    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: width-40,
        height:40,
        flex:0,
        borderRadius:40,
        top:10

    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },


    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },

    logo_container: {

        flex:0,
        justifyContent:"center",
        alignItems:"center",
        marginTop : 100,
        resizeMode: 'contain'
    },

    logo_container2: {

        marginTop : 100,
        marginLeft : 45,
        marginRight : 45,
        height : 300,
        width: null,
        resizeMode: 'contain'
    },

    logo_container3: {
        justifyContent:"center",
        alignItems:"flex-start",
        marginTop : 150,
        marginLeft : 45,
        resizeMode: 'contain'
    },
    main_bg: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

    text_container: {
        top:20,
        left: 40,
        justifyContent:'center',
        width: width - 60,
        height:50,
        resizeMode: 'contain'
    },
    text_container2: {
        top:-80,
        left: 40,
        justifyContent:'center',
        width: width - 60,
        height:50,
        resizeMode: 'contain'
    },
    alternativeLayoutButtonContainer: {
        marginTop:20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'rgba(1,1,1,0.0)',
        flex:1
    }
});
export  default styles;