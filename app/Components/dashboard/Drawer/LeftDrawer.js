import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'

export default class LeftDrawer extends Component {
    render() {
        const fullName = '{{fullName}}';

        return <View style={styles.container}>
            <Text style={[styles.title, styles.item]}>Menu</Text>
            <Text style={styles.item}>{fullName}</Text>
            <TouchableOpacity>
              <Text style={styles.item}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.item}>My Course</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.item}>RoundPlayed</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.item}>Budget List</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.item}>Map</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.item}>Capture</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.item}>Reports</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.item}>Tools</Text>
            </TouchableOpacity>
          </View>;
    }
}

const styles = {
    container: {
        flexDirection: 'column',
        padding: 30,
        height: '100%',
        width: '100%',
        backgroundColor: '#ffe6ca'
    },
    icon: {
        width: 24,
        height: 24
    },
    item: {
        fontSize: 20,
        color: 'black',
        flexDirection: 'row',
    },
    title: {
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 30
    },
    dropdownItem: {
        flexDirection: 'row',
        justifyContnet: 'space-between',
    },
}
