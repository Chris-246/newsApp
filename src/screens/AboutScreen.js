import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import DrawerHeaderButtons from '../components/DrawerHeaderButton';

const AboutScreen = (props) => {
    return(
        <View style={styles.container}>
            <Text>About us</Text>
        </View>
    )
}

AboutScreen.navigationOptions = navData => {
    return {
        headerLeft: () => {
            return(
            <HeaderButtons HeaderButtonComponent={DrawerHeaderButtons}>
                <Item title='Menu' iconName="menu" onPress={() => {
                    navData.navigation.toggleDrawer();
                }}/>
            </HeaderButtons>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default AboutScreen;