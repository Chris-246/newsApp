import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import DrawerHeaderButtons from '../components/DrawerHeaderButton';
import Card from '../components/Card';

const FavoriteScreen = (props) => {
    const favorites = useSelector(state => state.news.favorites)
    return(
        <FlatList
            data={favorites}
            keyExtractor={item => item.url}
            renderItem={({ item }) => (
                <Card
                    navigation={props.navigation}
                    title={item.title}
                    description={item.description}
                    image={item.urlToImage}
                    url={item.url}
                />
            )}
        />
    )
}

FavoriteScreen.navigationOptions = navData => {
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
})

export default FavoriteScreen;