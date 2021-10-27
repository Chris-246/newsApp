import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import * as newsAction from '../redux/actions/newsAction'

const Header = (props) => {
    const dispatch = useDispatch();
    const isFav = useSelector(state => state.news.favorites.some(article => article.url === props.url));
    return(
    <TouchableOpacity onPress={() => {
        props.navigation.navigate({
            routeName: 'NewsItem',
            params: {articleUrl: props.url
            }
        });
    }}>
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: props.image }}></Image>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {props.title.length > 25 ? props.title.slice(0, 25) + '...': props.title}
                </Text>
                <MaterialIcons
                    name={ isFav ? 'favorite' : 'favorite-border'}
                    size={24}
                    color='#72bcd4'
                    onPress={() => {
                        dispatch(newsAction.toggleFav(props.url))
                    }}
                />
            </View>
            <View style={styles.description}>
                <Text style={styles.descriptionText}>
                    {props.description.length > 100 ? props.description.slice(0, 100) + '...': props.description}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 5,
        height: 300,
        margin: 20,
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
    },
    titleContainer: {
        height: '15%',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    description: {
        paddingHorizontal: 15,
    },
    title: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 20,
        marginTop: 10,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    descriptionText: {
        fontFamily: 'Ubuntu',
        fontSize: 15,
        marginTop: 10,
    },
})

export default Header;