import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';

const Header = (props) => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Platform.OS === 'ios' ? 'gray' : '#72bcd4',
        padding: 15,
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
    },
    title: {
        marginTop: 40,
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    }
})

export default Header;