import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import NewsItemScreen from '../screens/NewsItemScreen';
import NewsListScreen from '../screens/NewsListScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import AboutScreen from '../screens/AboutScreen';

const StackNavigator = createStackNavigator({
    News: {
        screen: NewsListScreen,
    },
    NewsItem: {
        screen: NewsItemScreen,
        navigationOptions: {
            headerTitle: 'News Item'
        }
    }
});

const FavoritesNavigator = createStackNavigator({
    Favorites: {
        screen: FavoriteScreen,
    }
})

const AboutNavigator = createStackNavigator({
    About: {
        screen: AboutScreen,
    }
})

const BottomTabNavigator = createBottomTabNavigator({
    Home: {
        screen: StackNavigator,
        navigationOptions: {
            tabBarIcon: () => <MaterialIcons name='home' size={24}/>
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarIcon: () => <MaterialIcons name='favorite' size={24}/>
        }
    },
});

const DrawerNavigator = createDrawerNavigator({
    News: {
        screen: BottomTabNavigator,
    },
    About: {
        screen: AboutNavigator,
    }
}, {
    hideStatusBar: true,
});

export default createAppContainer(DrawerNavigator);