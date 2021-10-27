import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import * as newsAction from '../redux/actions/newsAction';

import Card from '../components/Card';
import DrawerHeaderButtons from '../components/DrawerHeaderButton';

const NewsListScreen = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(newsAction.fetchArticles())
    }, [dispatch]);

    const articles = useSelector(state => state.news.articles);

    return(
        <FlatList
            data={articles}
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

NewsListScreen.navigationOptions = navData => {
    return {
        headerLeft: () => {
            return (
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

export default NewsListScreen;